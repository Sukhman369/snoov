"use client"

import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react"
import useToggleState from "@lib/hooks/use-toggle-state"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { HttpTypes } from "@medusajs/types"
import BrandLogo from "@modules/common/components/brand-logo"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Text, clx } from "@modules/common/components/ui"
import { Fragment } from "react"
import CountrySelect from "../country-select"
import LanguageSelect from "../language-select"
import { Locale } from "@lib/data/locales"


const SideMenuItems = {
  "All Collections": "/store",
  "New Arrivals": "/store?filter=new",
  "Tailoring & Blazers": "/store?category=tailoring",
  "Fine Knitwear": "/store?category=knitwear",
  "Essentials & Tees": "/store?category=essentials",
  "Leather & Accessories": "/store?category=accessories",
  "Customer Account": "/account",
  "Shopping Bag": "/cart",
}

type SideMenuProps = {
  regions: HttpTypes.StoreRegion[] | null
  locales: Locale[] | null
  currentLocale: string | null
}

const SideMenu = ({ regions, locales, currentLocale }: SideMenuProps) => {
  const countryToggleState = useToggleState()
  const languageToggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full items-center">
                <PopoverButton
                  data-testid="nav-menu-button"
                  className="flex items-center gap-2 text-xs uppercase tracking-editorial font-medium text-snoov-charcoal hover:text-snoov-green transition-colors focus:outline-none"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                  <span>Menu</span>
                </PopoverButton>
              </div>

              {open && (
                <div
                  className="fixed inset-0 z-[50] bg-snoov-charcoal/20 backdrop-blur-sm pointer-events-auto"
                  onClick={close}
                  data-testid="side-menu-backdrop"
                />
              )}

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 -translate-x-full"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 -translate-x-full"
              >
                <PopoverPanel className="flex flex-col fixed left-0 top-0 w-full sm:w-[380px] h-screen z-[55] bg-snoov-canvas border-r border-snoov-border shadow-2xl p-6 sm:p-8 justify-between">
                  <div data-testid="nav-menu-popup" className="flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-snoov-border" id="xmark">
                        <BrandLogo variant="gold" width={120} height={42} />
                        <button
                          data-testid="close-menu-button"
                          onClick={close}
                          className="p-1 text-snoov-muted hover:text-snoov-charcoal transition-colors"
                        >
                          <XMark />
                        </button>
                      </div>

                      <ul className="flex flex-col gap-4 items-start justify-start pt-8">
                        {Object.entries(SideMenuItems).map(([name, href]) => {
                          return (
                            <li key={name}>
                              <LocalizedClientLink
                                href={href}
                                className="font-serif text-xl sm:text-2xl text-snoov-charcoal hover:text-snoov-green transition-colors block py-1"
                                onClick={close}
                                data-testid={`${name.toLowerCase()}-link`}
                              >
                                {name}
                              </LocalizedClientLink>
                            </li>
                          )
                        })}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-y-4 pt-6 border-t border-snoov-border text-xs text-snoov-muted">
                      {!!locales?.length && (
                        <div
                          className="flex justify-between items-center"
                          onMouseEnter={languageToggleState.open}
                          onMouseLeave={languageToggleState.close}
                        >
                          <LanguageSelect
                            toggleState={languageToggleState}
                            locales={locales}
                            currentLocale={currentLocale}
                          />
                          <ArrowRightMini
                            className={clx(
                              "transition-transform duration-150",
                              languageToggleState.state ? "-rotate-90" : ""
                            )}
                          />
                        </div>
                      )}
                      <div
                        className="flex justify-between items-center"
                        onMouseEnter={countryToggleState.open}
                        onMouseLeave={countryToggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={countryToggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150",
                            countryToggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <Text className="text-[10px] text-snoov-lightMuted tracking-wider uppercase pt-2">
                        © {new Date().getFullYear()} SNOOV ATELIER. All rights reserved.
                      </Text>
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
