'use client'

import Image from 'next/image'
import siteContent from '@/data/siteContent.json'

export default function Timeline() {
  const { timeline } = siteContent

  return (
    <section id="timeline" className="py-20 md:py-28 bg-gradient-to-b from-off-white to-cream-soft relative overflow-hidden">
      {/* Top gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-forest-deep/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-subtitle">{timeline.subtitle}</span>
          <h2 className="section-title">{timeline.title}</h2>
          <p className="section-description">{timeline.description}</p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-leaf-green to-forest-primary -translate-x-1/2 rounded-full hidden md:block">
            {/* Top dot */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-5 bg-leaf-green rounded-full border-4 border-off-white shadow-soft" />
            {/* Bottom dot */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 bg-forest-primary rounded-full border-4 border-off-white shadow-soft" />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-20">
            {timeline.milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-0 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-60px)] ${index % 2 === 1 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                  <div className="bg-white rounded-lg p-6 shadow-medium hover:-translate-y-1 hover:shadow-large transition-all duration-300 relative">
                    {/* Arrow */}
                    <div
                      className={`hidden md:block absolute top-1/2 -translate-y-1/2 border-[10px] border-transparent ${
                        index % 2 === 0
                          ? '-right-5 border-l-white'
                          : '-left-5 border-r-white'
                      }`}
                    />

                    {/* Image */}
                    <div className="relative h-36 rounded-lg overflow-hidden mb-4">
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Year Badge */}
                    <span className="inline-block px-3 py-1 bg-leaf-pale text-forest-primary text-sm font-bold rounded-full mb-3">
                      {milestone.year}
                    </span>

                    {/* Title & Description */}
                    <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {milestone.description}
                    </p>

                    {/* Stat */}
                    <div className="inline-flex items-center gap-2 px-3 py-2 bg-cream-soft rounded-lg text-sm text-text-secondary">
                      <span className="font-heading font-bold text-forest-primary text-lg">
                        {milestone.stat.number}
                      </span>
                      <span>{milestone.stat.label}</span>
                    </div>
                  </div>
                </div>

                {/* Center Marker */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-leaf-green to-forest-primary rounded-full items-center justify-center shadow-[0_4px_20px_rgba(45,106,79,0.3)] border-4 border-off-white z-10">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    {index === 0 && (
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    )}
                    {index === 1 && (
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" />
                    )}
                    {index === 2 && (
                      <path d="M12 2C9.5 2 7.5 3.5 7 5.5C5 6 3.5 8 3.5 10.5C3.5 13 5 15 7 15.5V17C7 18.1 7.9 19 9 19H15C16.1 19 17 18.1 17 17V15.5C19 15 20.5 13 20.5 10.5C20.5 8 19 6 17 5.5C16.5 3.5 14.5 2 12 2Z" />
                    )}
                    {index === 3 && (
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                    )}
                    {index > 3 && (
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    )}
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
