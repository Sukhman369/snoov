# Snoov — Safe Animation & Interaction Playbook

> Everything in this doc is safe for SEO, Core Web Vitals, and mobile performance.
> No WebGL, no heavy 3D, no scroll-jacking. Just smart, memorable UX.

---

## Why "Safe Crazy"?

Full 3D / immersive WebGL experiences (Three.js, React Three Fiber) carry real risks:

- **Performance**: Can drop to 20fps on mid-range Android phones
- **Bundle size**: +500KB–2MB added to JS payload
- **Core Web Vitals**: LCP, INP, CLS can all tank
- **SEO**: Scroll-jacked content can confuse crawlers
- **Accessibility**: Breaks keyboard nav, triggers vestibular disorders
- **Maintenance**: 3D scenes need rebuilds when content changes

The effects below give 90% of the "wow" with 0% of the risk.

---

## Tier 1 — Pure CSS Only (Zero JS, Zero Risk)

### 1. Scroll-Driven Animations ⭐
Native browser API (2024). No JS, no GSAP, no library. Free.

```css
@keyframes reveal {
  from { opacity: 0; translate: 0 40px; }
  to   { opacity: 1; translate: 0 0; }
}
.hero-title {
  animation: reveal linear both;
  animation-timeline: scroll();
  animation-range: entry 0% entry 30%;
}
```

Impact: High | Effort: Very Low | Risk: Zero

---

### 2. Magnetic / Custom Branded Cursor
Cursor that morphs on hover — branded to Snoov.
Pure CSS + ~10 lines of JS. <1KB total.
Almost no Indian fashion brand does this.

Impact: High | Effort: Low | Risk: Zero

---

### 3. Clip-Path Reveal (Curtain Wipe)
Images wipe in like a curtain — editorial magazine feel.

```css
.product-image {
  clip-path: inset(0 100% 0 0);
  transition: clip-path 0.8s cubic-bezier(0.76, 0, 0.24, 1);
}
.product-image.in-view { clip-path: inset(0 0% 0 0); }
```

Impact: Very High | Effort: Low | Risk: Zero

---

### 4. CSS Perspective Tilt on Hover (Fake 3D)
Product cards tilt in 3D on hover. No Three.js needed.

```css
.card:hover {
  transform: perspective(800px) rotateX(3deg) rotateY(-5deg);
}
```

Impact: Medium-High | Effort: Very Low | Risk: Zero

---

### 5. Variable Font Animation ⭐ (Rare — Almost Nobody Does This)
Animate font weight on scroll or hover. Cormorant supports this.

```css
h1 {
  font-variation-settings: 'wght' 300;
  transition: font-variation-settings 0.8s ease;
}
h1:hover { font-variation-settings: 'wght' 800; }
```

Impact: Very High (genuinely unique in fashion) | Effort: Low | Risk: Zero

---

### 6. Marquee / Infinite Ticker Strip
CSS-animated horizontal text. Used by Bottega Veneta, Jacquemus, Off-White.

```css
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.ticker { animation: marquee 20s linear infinite; }
```

Content: "NEW ARRIVALS — SS 2026 — LIMITED EDITION — 150 PIECES —"

Impact: Medium | Effort: Very Low | Risk: Zero

---

### 7. CSS Grain / Noise Texture Overlay
Animated grain over the hero. Makes photos feel analogue and luxury.
Used by Jacquemus, A-Cold-Wall, Toteme.

```css
.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/noise.png'); /* tiny 200x200 tileable PNG */
  opacity: 0.04;
  animation: grain 0.4s steps(1) infinite;
  pointer-events: none;
}
```

Impact: Medium (very premium feel) | Effort: Very Low | Risk: Zero

---

## Tier 2 — Lightweight JS (~5–15KB, No SEO Risk)

### 8. Lenis Smooth Scroll ⭐ (Highest Impact / Effort Ratio)
Physics-based inertia scroll. Transforms the entire site feel.
7KB total. Used by almost every award-winning site.

```bash
npm install lenis
```

```tsx
import Lenis from 'lenis'
const lenis = new Lenis({ lerp: 0.08, smoothWheel: true })
```

Impact: Transformative | Effort: Low | Risk: Zero

---

### 9. Staggered Text Split Animation ⭐

"The"          → fades in at 0ms
"Architecture" → fades in at 80ms
"of"           → fades in at 160ms
"Ease"         → fades in at 240ms

```tsx
const words = "The Architecture of Ease".split(" ")
{words.map((word, i) => (
  <motion.span
    key={i}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.08, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
  >
    {word}{" "}
  </motion.span>
))}
```

Impact: Very High | Effort: Low | Risk: Zero

---

### 10. Framer Motion Section Entrance Animations

```tsx
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
>
```

Impact: High | Effort: Low | Risk: Zero

---

### 11. Image Cursor Follower on Collection Grid ⭐ (People Screenshot This)
Hover a product name — product image follows your cursor.
~20 lines of JS. Images already loaded, just repositioned.

```tsx
const [pos, setPos] = useState({ x: 0, y: 0 })
const [activeImg, setActiveImg] = useState(null)

onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
onMouseEnter={() => setActiveImg(product.thumbnail)}

// Floating image follows cursor
style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
```

Impact: Extremely High (genuinely memorable, shareable) | Effort: Medium | Risk: Zero

---

### 12. Parallax on Hero Image
Hero image moves at 60% of scroll speed — natural depth.

```tsx
const { scrollY } = useScroll()
const y = useTransform(scrollY, [0, 500], [0, -150])

<motion.div style={{ y }}>
  <HeroImage />
</motion.div>
```

Impact: Medium-High | Effort: Low | Risk: Zero

---

## Tier 3 — The "How Did They Do That" Effects

### 13. CSS Horizontal Scroll Section
Scroll vertically → products move horizontally. Apple-style.

```css
.horizontal-track { display: flex; width: 400vw; }
.sticky-container { position: sticky; top: 0; height: 100vh; overflow: hidden; }
```

Impact: Very High | Effort: Medium-High

---

### 14. Morphing SVG Brand Mark
Snoov logo paths animate subtly on load. Pure SVG.

```svg
<animate attributeName="d"
  values="path1; path2; path1"
  dur="3s" repeatCount="indefinite" />
```

Impact: Medium | Effort: Medium

---

### 15. Colour Palette Reactive UI ✅ Already Built!
The Palette Studio already does something most sites never attempt.
This IS one of the crazy things — and it's already live.

---

## 🎯 Recommended Implementation Order for Snoov

1. Lenis smooth scroll — changes entire feel in 30 minutes
2. Staggered hero text reveal — first impression, very editorial
3. Clip-path image wipes — feels like a magazine
4. Image cursor follower on collection grid — people share it
5. CSS variable font animation on headline — unique in Indian fashion
6. Marquee ticker strip — fills dead space, adds brand voice
7. CSS grain overlay on hero — makes photos feel luxury
8. Horizontal scroll collection section — premium, later milestone

---

## Reference Sites

| Site          | What to study                                |
|---------------|----------------------------------------------|
| lusion.co     | The benchmark — WebGL + GSAP mastery         |
| stripe.com    | Animated gradients + scroll reveals, clean   |
| linear.app    | Clip-path reveals + staggered text           |
| 14islands.com | Heavy Three.js + scroll                      |
| braun.com     | 3D product scroll, direct product page inspo |

---

## Rules to Never Break

1. Always add `prefers-reduced-motion` fallback — accessibility requirement
2. Never animate layout properties (width, height, margin) — use transform + opacity only
3. `once: true` on whileInView — don't re-animate on scroll back
4. Test on a real mid-range Android before shipping anything
5. Keep hero image as a static <img> tag for LCP score

```css
/* Always include this */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

*Last updated: August 2026 — Snoov SS 2026 build*
