'use client'

import Image from 'next/image'
import siteContent from '@/data/siteContent.json'

const iconMap: Record<string, JSX.Element> = {
  rescue: (
    <path d="M12 2C9.5 2 7.5 3.5 7 5.5C5 6 3.5 8 3.5 10.5C3.5 13 5 15 7 15.5V17C7 18.1 7.9 19 9 19H15C16.1 19 17 18.1 17 17V15.5C19 15 20.5 13 20.5 10.5C20.5 8 19 6 17 5.5C16.5 3.5 14.5 2 12 2ZM10 9C9.4 9 9 9.4 9 10S9.4 11 10 11 11 10.6 11 10 10.6 9 10 9ZM14 9C13.4 9 13 9.4 13 10S13.4 11 14 11 15 10.6 15 10 14.6 9 14 9Z" />
  ),
  medical: (
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
  ),
  rehab: (
    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
  ),
  feeding: (
    <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
  ),
}

export default function Services() {
  const { services } = siteContent

  return (
    <section id="services" className="py-20 md:py-28 bg-cream-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-subtitle">{services.subtitle}</span>
          <h2 className="section-title">{services.title}</h2>
          <p className="section-description">{services.description}</p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.items.map((service, index) => (
            <div
              key={index}
              className="card group"
            >
              {/* Image */}
              <div className={`relative ${service.portrait ? 'h-64' : 'h-44'} overflow-hidden`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Icon Overlay */}
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-leaf-green to-forest-primary rounded-full flex items-center justify-center shadow-medium">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    {iconMap[service.icon] || iconMap.rescue}
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
