'use client'

import siteContent from '@/data/siteContent.json'

const iconMap: Record<string, JSX.Element> = {
  volunteer: (
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  ),
  donate: (
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  ),
  report: (
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  ),
  share: (
    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
  ),
}

export default function GetInvolved() {
  const { getInvolved } = siteContent

  return (
    <section id="get-involved" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-subtitle">{getInvolved.subtitle}</span>
          <h2 className="section-title">{getInvolved.title}</h2>
          <p className="section-description">{getInvolved.description}</p>
        </div>

        {/* Options Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {getInvolved.options.map((option, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-xl bg-gradient-to-b from-white to-cream-soft border border-leaf-pale hover:border-leaf-green hover:shadow-large transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-leaf-green to-forest-primary rounded-full flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
                  {iconMap[option.icon] || iconMap.volunteer}
                </svg>
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                {option.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {option.description}
              </p>

              {/* CTA */}
              <a
                href="#contact"
                className="btn btn-secondary text-sm px-6 py-2"
              >
                {option.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
