'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import siteContent from '@/data/siteContent.json'
import { DONATE_MODAL_EVENT } from '@/lib/donate'

export default function DonateModal() {
  const [open, setOpen] = useState(false)
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const { donate } = siteContent

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener(DONATE_MODAL_EVENT, handler)
    return () => window.removeEventListener(DONATE_MODAL_EVENT, handler)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const handleCopy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedField(label)
      setTimeout(() => setCopiedField(null), 1500)
    } catch {
      // clipboard blocked — ignore silently
    }
  }

  if (!open) return null

  const rows: { label: string; value: string }[] = [
    { label: 'Account Name', value: donate.bank.accountName },
    { label: 'Bank Name', value: donate.bank.bankName },
    { label: 'Branch', value: donate.bank.branch },
    { label: 'Account Number', value: donate.bank.accountNumber },
    { label: 'IFSC Code', value: donate.bank.ifsc },
  ]

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-br from-forest-deep to-forest-primary text-white p-8 rounded-t-2xl">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
            aria-label="Close donate modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/40 bg-white shrink-0">
              <Image
                src={donate.image}
                alt={donate.bank.accountName}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="font-heading text-sm italic text-leaf-light tracking-wide block">
                {donate.subtitle}
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold">
                {donate.title}
              </h2>
            </div>
          </div>

          <p className="text-white/85 text-sm leading-relaxed">
            {donate.description}
          </p>
        </div>

        {/* Bank Details */}
        <div className="p-8">
          <div className="flex items-center gap-2 mb-5">
            <svg className="w-5 h-5 text-forest-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 10h3v7H4zm6.5 0h3v7h-3zM2 19h20v3H2zm15-9h3v7h-3zM12 1L2 6v2h20V6z" />
            </svg>
            <h3 className="font-heading text-xl font-semibold text-text-primary">
              Bank Account Details
            </h3>
          </div>

          <div className="space-y-3">
            {rows.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between gap-4 p-4 rounded-lg bg-cream-soft border border-leaf-pale"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wide text-text-muted font-semibold mb-1">
                    {row.label}
                  </p>
                  <p className="text-text-primary font-medium break-all">
                    {row.value}
                  </p>
                </div>
                <button
                  onClick={() => handleCopy(row.label, row.value)}
                  className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-md bg-white border border-leaf-pale hover:border-leaf-green hover:bg-leaf-pale/40 transition-colors text-xs font-semibold text-forest-primary"
                  aria-label={`Copy ${row.label}`}
                >
                  {copiedField === row.label ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      Copied
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-2M8 5a2 2 0 002 2h6a2 2 0 002-2M8 5a2 2 0 012-2h6a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                      Copy
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-6 p-4 rounded-lg bg-sun-warm/10 border border-sun-warm/30 flex gap-3">
            <svg className="w-5 h-5 text-earth-deep shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
            <p className="text-sm text-text-secondary leading-relaxed">
              {donate.note}
            </p>
          </div>

          {/* Contact footer */}
          <div className="mt-6 pt-6 border-t border-leaf-pale text-center">
            <p className="text-xs text-text-muted mb-2">
              Questions about donating? Reach us at
            </p>
            <a
              href={`mailto:${siteContent.contact.email}`}
              className="text-sm font-semibold text-forest-primary hover:text-leaf-green transition-colors"
            >
              {siteContent.contact.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
