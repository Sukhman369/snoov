"use client"

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"
import { clx } from "@medusajs/ui"
import { Button } from "@modules/common/components/ui"
import DeleteButton from "@modules/common/components/delete-button"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "@modules/products/components/thumbnail"
import { usePathname } from "next/navigation"
import { Fragment, useEffect, useRef, useState } from "react"

const CartDropdown = ({
  cart: cartState,
}: {
  cart?: HttpTypes.StoreCart | null
}) => {
  const [activeTimer, setActiveTimer] = useState<NodeJS.Timer | undefined>(
    undefined
  )
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false)

  const open = () => setCartDropdownOpen(true)
  const close = () => setCartDropdownOpen(false)

  const totalItems =
    cartState?.items?.reduce((acc, item) => {
      return acc + item.quantity
    }, 0) || 0

  const subtotal = cartState?.subtotal ?? 0
  const itemRef = useRef<number>(totalItems || 0)

  const timedOpen = () => {
    open()

    const timer = setTimeout(close, 5000)

    setActiveTimer(timer)
  }

  const openAndCancel = () => {
    if (activeTimer) {
      clearTimeout(activeTimer)
    }

    open()
  }

  // Clean up the timer when the component unmounts
  useEffect(() => {
    return () => {
      if (activeTimer) {
        clearTimeout(activeTimer)
      }
    }
  }, [activeTimer])

  const pathname = usePathname()

  // open cart dropdown when modifying the cart items, but only if we're not on the cart page
  useEffect(() => {
    if (itemRef.current !== totalItems && !pathname.includes("/cart")) {
      timedOpen()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalItems, itemRef.current])

  return (
    <div
      className="h-full z-50"
      onMouseEnter={openAndCancel}
      onMouseLeave={close}
    >
      <Popover className="relative h-full">
        <PopoverButton className="h-full py-2">
          <LocalizedClientLink
            className="flex items-center gap-2 text-snoov-charcoal hover:text-snoov-green transition-colors font-medium tracking-editorial text-xs"
            href="/cart"
            data-testid="nav-cart-link"
          >
            <span>BAG</span>
            <span
              className={clx(
                "inline-flex items-center justify-center min-w-[20px] h-5 px-1 text-[10px] font-mono rounded-[2px] transition-colors",
                totalItems > 0
                  ? "bg-snoov-green text-white font-semibold"
                  : "bg-snoov-sand text-snoov-charcoal border border-snoov-border"
              )}
            >
              {totalItems}
            </span>
          </LocalizedClientLink>
        </PopoverButton>
        <Transition
          show={cartDropdownOpen}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <PopoverPanel
            static
            className="hidden small:block absolute top-[calc(100%+1px)] right-0 bg-snoov-canvas border border-snoov-border w-[400px] text-snoov-charcoal shadow-lg z-50 rounded-[2px]"
            data-testid="nav-cart-dropdown"
          >
            <div className="p-4 border-b border-snoov-border flex items-center justify-between">
              <h3 className="font-serif text-lg tracking-wider text-snoov-charcoal">
                Shopping Bag ({totalItems})
              </h3>
              <span className="text-[10px] uppercase tracking-widest text-snoov-green font-medium">
                Complimentary Shipping
              </span>
            </div>
            {cartState && cartState.items?.length ? (
              <>
                <div className="overflow-y-scroll max-h-[380px] p-4 grid grid-cols-1 gap-y-4 no-scrollbar divide-y divide-snoov-border/60">
                  {cartState.items
                    .sort((a, b) => {
                      return (a.created_at ?? "") > (b.created_at ?? "")
                        ? -1
                        : 1
                    })
                    .map((item) => (
                      <div
                        className="pt-4 first:pt-0 grid grid-cols-[80px_1fr] gap-x-4"
                        key={item.id}
                        data-testid="cart-item"
                      >
                        <LocalizedClientLink
                          href={`/products/${item.product_handle}`}
                          className="w-20 aspect-[3/4] bg-snoov-sand border border-snoov-border overflow-hidden rounded-[2px]"
                        >
                          <Thumbnail
                            thumbnail={item.thumbnail}
                            images={item.variant?.product?.images}
                            size="square"
                          />
                        </LocalizedClientLink>
                        <div className="flex flex-col justify-between flex-1">
                          <div className="flex flex-col flex-1">
                            <div className="flex items-start justify-between">
                              <div className="flex flex-col overflow-ellipsis whitespace-nowrap mr-2 w-[180px]">
                                <h4 className="text-xs font-serif font-medium text-snoov-charcoal overflow-hidden text-ellipsis">
                                  <LocalizedClientLink
                                    href={`/products/${item.product_handle}`}
                                    data-testid="product-link"
                                  >
                                    {item.title}
                                  </LocalizedClientLink>
                                </h4>
                                <LineItemOptions
                                  variant={item.variant}
                                  data-testid="cart-item-variant"
                                  data-value={item.variant}
                                />
                                <span
                                  data-testid="cart-item-quantity"
                                  data-value={item.quantity}
                                  className="text-[10px] text-snoov-muted mt-1"
                                >
                                  Qty: {item.quantity}
                                </span>
                              </div>
                              <LineItemPrice
                                item={item}
                                style="tight"
                                currencyCode={cartState.currency_code}
                              />
                            </div>
                          </div>
                          <DeleteButton
                            id={item.id}
                            className="mt-1 text-[10px] text-snoov-muted hover:text-red-700 transition-colors uppercase tracking-wider"
                            data-testid="cart-item-remove-button"
                          >
                            Remove
                          </DeleteButton>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="p-4 border-t border-snoov-border bg-snoov-sand/50 flex flex-col gap-y-3">
                  <div className="flex items-center justify-between text-xs tracking-wider uppercase">
                    <span className="text-snoov-muted">Subtotal</span>
                    <span
                      className="font-medium text-snoov-charcoal"
                      data-testid="cart-subtotal"
                      data-value={subtotal}
                    >
                      {convertToLocale({
                        amount: subtotal,
                        currency_code: cartState.currency_code,
                      })}
                    </span>
                  </div>
                  <LocalizedClientLink href="/cart" passHref>
                    <button
                      className="w-full btn-primary py-3"
                      data-testid="go-to-cart-button"
                    >
                      PROCEED TO CHECKOUT
                    </button>
                  </LocalizedClientLink>
                </div>
              </>
            ) : (
              <div className="py-12 px-6 flex flex-col items-center justify-center text-center">
                <p className="font-serif italic text-base text-snoov-charcoal">
                  Your shopping bag is empty
                </p>
                <p className="text-xs text-snoov-muted mt-1 max-w-[240px]">
                  Explore our seasonal capsule of organic linen and tailored essentials.
                </p>
                <LocalizedClientLink
                  href="/store"
                  className="btn-secondary py-2.5 text-[10px] mt-4"
                  onClick={close}
                >
                  DISCOVER COLLECTION
                </LocalizedClientLink>
              </div>
            )}
          </PopoverPanel>
        </Transition>
      </Popover>
    </div>
  )
}

export default CartDropdown
