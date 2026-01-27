'use client'

import siteContent from '@/data/siteContent.json'

export default function Hero() {
    const { hero } = siteContent

    return (
        <section
            id="home"
            className="min-h-screen flex items-center relative overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/photos/Picsart_25-03-07_15-33-34-525.jpg"
                    alt="Hero background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Fallback background */}
                <div className="absolute inset-0 bg-forest-deep -z-10" />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-br from-forest-deep/85 via-forest-primary/75 to-forest-deep/80" />

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-3xl mx-auto text-center pt-24">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 border border-white/25 rounded-full mb-6 backdrop-blur-sm animate-fade-in-up">
                        <span className="w-2 h-2 bg-leaf-green rounded-full animate-pulse-slow" />
                        <span className="text-sm font-semibold text-white tracking-wide">
                            {hero.badge} &bull; Est.{' '}
                            {siteContent.siteInfo.established}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up delay-100 opacity-0">
                        {hero.title.map((line, index) => (
                            <span key={index} className="block">
                                {line.includes(hero.highlight) ? (
                                    <>
                                        {line.split(hero.highlight)[0]}
                                        <span className="text-sun-warm">
                                            {hero.highlight}
                                        </span>
                                        {line.split(hero.highlight)[1]}
                                    </>
                                ) : (
                                    line
                                )}
                            </span>
                        ))}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200 opacity-0">
                        {hero.subtitle}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in-up delay-300 opacity-0">
                        <a
                            href={hero.primaryCta.href}
                            className="btn btn-white text-base px-8 py-4"
                        >
                            <svg
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            {hero.primaryCta.text}
                        </a>
                        <a
                            href={hero.secondaryCta.href}
                            className="btn btn-outline-white text-base px-8 py-4"
                        >
                            <svg
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                            </svg>
                            {hero.secondaryCta.text}
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-8 md:gap-16 justify-center animate-fade-in-up delay-400 opacity-0">
                        {hero.stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="font-heading text-3xl md:text-4xl font-bold text-white mb-1">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-white/70">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/70 animate-bounce-slow">
        <div className="w-7 h-12 border-2 border-white/50 rounded-full relative">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-2.5 bg-white/70 rounded-full animate-[scrollDown_2s_ease-in-out_infinite]" />
        </div>
        <span className="text-xs">Scroll to explore</span>
      </div> */}
        </section>
    )
}
