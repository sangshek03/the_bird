'use client'

import siteContent from '@/data/siteContent.json'

const iconMap: Record<string, JSX.Element> = {
  firstaid: (
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
  ),
  garden: (
    <path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 4.12 13.38 3 12 3S9.5 4.12 9.5 5.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z" />
  ),
  window: (
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2v-4h4v-2h-4V7h-2v4H8v2h4z" />
  ),
  feeding: (
    <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
  ),
}

export default function Knowledge() {
  const { knowledge } = siteContent

  return (
    <section id="knowledge" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-subtitle">{knowledge.subtitle}</span>
          <h2 className="section-title">{knowledge.title}</h2>
          <p className="section-description">{knowledge.description}</p>
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {knowledge.tips.map((tip, index) => (
            <div
              key={index}
              className="flex gap-5 p-6 rounded-xl bg-gradient-to-br from-cream-soft to-white border border-leaf-pale hover:border-leaf-green hover:shadow-medium transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-leaf-green to-forest-primary rounded-xl flex items-center justify-center shadow-soft">
                <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                  {iconMap[tip.icon] || iconMap.firstaid}
                </svg>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
                  {tip.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {tip.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
