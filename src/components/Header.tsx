'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import siteContent from '@/data/siteContent.json'
import { openDonateModal } from '@/lib/donate'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-off-white/95 backdrop-blur-lg shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-soft">
              <Image
                src={siteContent.siteInfo.logo}
                alt={siteContent.siteInfo.name}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-heading text-xl font-bold transition-colors ${
                  isScrolled ? 'text-text-primary' : 'text-white'
                }`}
              >
                {siteContent.siteInfo.name}
              </span>
              <span
                className={`text-xs tracking-wide ${
                  isScrolled ? 'text-text-muted' : 'text-white/80'
                }`}
              >
                {siteContent.siteInfo.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {siteContent.navigation.map((item) => (
                <li key={item.href}>
                  {item.href.startsWith('/') ? (
                    <Link
                      href={item.href}
                      className={`text-sm font-medium relative py-2 transition-colors hover:text-leaf-green ${
                        isScrolled ? 'text-text-primary' : 'text-white/90'
                      } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-leaf-green after:rounded-full after:transition-all hover:after:w-full`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className={`text-sm font-medium relative py-2 transition-colors hover:text-leaf-green ${
                        isScrolled ? 'text-text-primary' : 'text-white/90'
                      } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-leaf-green after:rounded-full after:transition-all hover:after:w-full`}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <button
                onClick={openDonateModal}
                className="btn btn-primary text-sm px-5 py-2"
              >
                Donate
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 rounded-full transition-all ${
                isScrolled ? 'bg-forest-primary' : 'bg-white'
              } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`w-6 h-0.5 rounded-full transition-all ${
                isScrolled ? 'bg-forest-primary' : 'bg-white'
              } ${isMobileMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`w-6 h-0.5 rounded-full transition-all ${
                isScrolled ? 'bg-forest-primary' : 'bg-white'
              } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <nav className="bg-white rounded-lg shadow-medium p-4">
            <ul className="flex flex-col gap-2">
              {siteContent.navigation.map((item) => (
                <li key={item.href}>
                  {item.href.startsWith('/') ? (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 px-4 text-text-primary hover:bg-leaf-pale rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 px-4 text-text-primary hover:bg-leaf-pale rounded-lg transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
              <li className="pt-2 border-t border-leaf-pale mt-2">
                <button
                  className="btn btn-primary w-full justify-center"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    openDonateModal()
                  }}
                >
                  Donate Now
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
