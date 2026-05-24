'use client'

import siteContent from '@/data/siteContent.json'
import { resolveStatNumber } from '@/lib/siteStats'

const iconMap: Record<string, JSX.Element> = {
  bird: (
    <path d="M12 2C9.5 2 7.5 3.5 7 5.5C5 6 3.5 8 3.5 10.5C3.5 13 5 15 7 15.5V17C7 18.1 7.9 19 9 19H15C16.1 19 17 18.1 17 17V15.5C19 15 20.5 13 20.5 10.5C20.5 8 19 6 17 5.5C16.5 3.5 14.5 2 12 2Z" />
  ),
  station: (
    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
  ),
  volunteer: (
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  ),
  species: (
    <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z" />
  ),
}

export default function Impact() {
  const { impact } = siteContent

  return (
    <section id="impact" className="py-20 md:py-28 bg-gradient-to-br from-forest-deep via-forest-primary to-forest-deep relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-full" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-leaf-light font-heading text-lg italic tracking-wide mb-2 block">
            {impact.subtitle}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            {impact.title}
          </h2>
          <p className="max-w-2xl mx-auto text-white/80">{impact.description}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {impact.stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-leaf-green to-leaf-light rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                  {iconMap[stat.icon] || iconMap.bird}
                </svg>
              </div>
              <div className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">
                {resolveStatNumber(stat)}
              </div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
