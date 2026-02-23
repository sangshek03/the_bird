'use client'

import siteContent from '@/data/siteContent.json'

export default function Emergency() {
  const { emergency } = siteContent

  return (
    <section className="py-12 bg-gradient-to-r from-coral-soft to-sun-golden relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-10 w-24 h-24 border-2 border-white rounded-full" />
        <div className="absolute bottom-0 right-20 w-32 h-32 border-2 border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Content */}
          <div className="flex items-center gap-5">
            {/* Icon */}
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                <path d="M12 2C9.5 2 7.5 3.5 7 5.5C5 6 3.5 8 3.5 10.5C3.5 13 5 15 7 15.5V17C7 18.1 7.9 19 9 19H15C16.1 19 17 18.1 17 17V15.5C19 15 20.5 13 20.5 10.5C20.5 8 19 6 17 5.5C16.5 3.5 14.5 2 12 2ZM10 9C9.4 9 9 9.4 9 10S9.4 11 10 11 11 10.6 11 10 10.6 9 10 9ZM14 9C13.4 9 13 9.4 13 10S13.4 11 14 11 15 10.6 15 10 14.6 9 14 9Z" />
              </svg>
            </div>

            {/* Text */}
            <div>
              <h3 className="font-heading text-2xl font-bold text-white mb-1">
                {emergency.title}
              </h3>
              <p className="text-white/90">{emergency.description}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            {emergency.phone.map((num: string, i: number) => (
              <a
                key={i}
                href={`tel:${num.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-coral-soft font-semibold rounded-full shadow-large hover:-translate-y-0.5 transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                {num}
              </a>
            ))}

            <a
              href={`https://wa.me/${emergency.whatsapp[0].replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-full shadow-large hover:-translate-y-0.5 transition-all"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
