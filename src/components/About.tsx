'use client'

import Image from 'next/image'
import siteContent from '@/data/siteContent.json'

export default function About() {
  const { about } = siteContent

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="organic-shape absolute -top-24 -right-12 w-72 h-72 bg-leaf-green opacity-10" />
      <div className="organic-shape absolute -bottom-12 -left-12 w-48 h-48 bg-sky-light opacity-10 animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <span className="section-subtitle">{about.subtitle}</span>
            <h2 className="section-title">{about.title}</h2>

            {about.description.map((para, index) => (
              <p key={index} className="text-text-secondary mb-4 leading-relaxed">
                {para}
              </p>
            ))}

            {/* Mission Quote */}
            <blockquote className="font-heading text-xl md:text-2xl italic text-forest-primary p-6 bg-cream-soft border-l-4 border-leaf-green rounded-r-lg my-8 shadow-soft">
              &ldquo;{about.mission}&rdquo;
            </blockquote>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {about.badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-soft border border-leaf-pale text-sm text-text-secondary"
                >
                  <svg className="w-4 h-4 fill-leaf-green" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Main Image */}
            <div className="absolute top-0 left-0 w-[65%] aspect-[3/4] rounded-lg overflow-hidden shadow-medium z-10">
              <Image
                src={about.images[0]}
                alt="Bird rescue work"
                fill
                className="object-cover"
              />
            </div>

            {/* Second Image */}
            <div className="absolute bottom-0 right-0 w-[55%] aspect-[4/3] rounded-lg overflow-hidden shadow-medium z-20">
              <Image
                src={about.images[1]}
                alt="Bird care"
                fill
                className="object-cover"
              />
            </div>

            {/* Circular Image */}
            <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-large z-30 border-4 border-white">
              <Image
                src={about.images[2]}
                alt="Bird conservation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
