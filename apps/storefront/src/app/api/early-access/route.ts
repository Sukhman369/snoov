import { NextRequest, NextResponse } from "next/server"
import fs from "fs/promises"
import path from "path"

interface Subscriber {
  id: string
  name: string
  email: string
  phone: string
  registeredAt: string
  ip?: string
  userAgent?: string
}

const DATA_FILE = path.join(process.cwd(), "data", "early-access-subscribers.json")

async function getSubscribers(): Promise<Subscriber[]> {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8")
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function saveSubscribers(subscribers: Subscriber[]): Promise<void> {
  const dir = path.dirname(DATA_FILE)
  await fs.mkdir(dir, { recursive: true })
  await fs.writeFile(DATA_FILE, JSON.stringify(subscribers, null, 2), "utf-8")
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone } = body

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name." },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      )
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      return NextResponse.json(
        { error: "Please enter a valid phone number." },
        { status: 400 }
      )
    }

    const cleanEmail = email.trim().toLowerCase()
    const cleanName = name.trim()
    const cleanPhone = phone.trim()

    const subscribers = await getSubscribers()

    // Check duplicate
    const existing = subscribers.find((s) => s.email.toLowerCase() === cleanEmail)
    if (existing) {
      return NextResponse.json({
        success: true,
        alreadyRegistered: true,
        message: "You are already registered on the VIP list.",
        subscriber: {
          name: existing.name,
          email: existing.email,
          phone: existing.phone,
        },
      })
    }

    // New entry
    const newEntry: Subscriber = {
      id: `snv_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      registeredAt: new Date().toISOString(),
      ip: req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown",
      userAgent: req.headers.get("user-agent") || "unknown",
    }

    // 1. Local persistence (with graceful catch for serverless/read-only filesystems like Vercel)
    try {
      subscribers.push(newEntry)
      await saveSubscribers(subscribers)
    } catch (fsErr) {
      console.warn("Local JSON save skipped (expected on read-only serverless filesystems):", fsErr)
    }

    // 2. Forward to Google Sheets Webhook if configured
    const webhookUrl =
      process.env.GOOGLE_SHEET_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbxNynLOUBes6inmJBRSmxMf6fNg029allmKWpJiLj2Toq_4Xh7TrB6MYn0RGF_Ik0DJ/exec"

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: newEntry.id,
            name: newEntry.name,
            phone: newEntry.phone,
            email: newEntry.email,
            registeredAt: newEntry.registeredAt,
            ip: newEntry.ip,
          }),
        })
      } catch (webhookErr) {
        console.error("Google Sheets webhook forwarding error:", webhookErr)
      }
    }

    return NextResponse.json({
      success: true,
      message: "Priority allocation reserved.",
      subscriber: {
        name: newEntry.name,
        email: newEntry.email,
        phone: newEntry.phone,
      },
      queuePosition: subscribers.length,
    })
  } catch (error) {
    console.error("Early access signup error:", error)
    return NextResponse.json(
      { error: "Failed to record your invitation request. Please try again." },
      { status: 500 }
    )
  }
}
