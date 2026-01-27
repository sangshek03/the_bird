'use client'

import { useEffect, useRef, useState } from 'react'
import siteContent from '@/data/siteContent.json'

export default function Hero() {
    const { hero } = siteContent
    const audioRef = useRef<HTMLAudioElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const toggleAudio = () => {
        const audio = audioRef.current
        if (!audio) return

        if (isPlaying) {
            audio.pause()
            setIsPlaying(false)
        } else {
            audio.play().catch(() => {})
            setIsPlaying(true)
        }
    }

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        // Function to pause audio when any video plays
        const handleVideoPlay = () => {
            audio.pause()
            setIsPlaying(false)
        }

        // Function to resume audio when video pauses/ends
        const handleVideoPause = () => {
            // Check if any video is still playing
            const videos = document.querySelectorAll('video')
            const anyPlaying = Array.from(videos).some(
                (video) => !video.paused && !video.muted
            )
            if (!anyPlaying) {
                audio.play().catch(() => {})
                setIsPlaying(true)
            }
        }

        // Add event listeners to all videos on the page
        const addVideoListeners = () => {
            const videos = document.querySelectorAll('video')
            videos.forEach((video) => {
                video.addEventListener('play', handleVideoPlay)
                video.addEventListener('pause', handleVideoPause)
                video.addEventListener('ended', handleVideoPause)
            })
        }

        // Initial setup
        addVideoListeners()

        // Observe for new videos added to the DOM
        const observer = new MutationObserver(() => {
            addVideoListeners()
        })
        observer.observe(document.body, { childList: true, subtree: true })

        // Try to play audio on user interaction (browser autoplay policy)
        const playOnInteraction = () => {
            audio.play().then(() => {
                setIsPlaying(true)
            }).catch(() => {})
            document.removeEventListener('click', playOnInteraction)
            document.removeEventListener('scroll', playOnInteraction)
        }
        document.addEventListener('click', playOnInteraction)
        document.addEventListener('scroll', playOnInteraction)

        return () => {
            const videos = document.querySelectorAll('video')
            videos.forEach((video) => {
                video.removeEventListener('play', handleVideoPlay)
                video.removeEventListener('pause', handleVideoPause)
                video.removeEventListener('ended', handleVideoPause)
            })
            observer.disconnect()
            document.removeEventListener('click', playOnInteraction)
            document.removeEventListener('scroll', playOnInteraction)
        }
    }, [])

    return (
        <section
            id="home"
            className="min-h-screen flex items-center relative overflow-hidden"
        >
            {/* Background Audio */}
            <audio ref={audioRef} src="/audio/audio.mp3" loop preload="auto" />

            {/* Audio Toggle Button */}
            <button
                onClick={toggleAudio}
                className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
                aria-label={isPlaying ? 'Mute audio' : 'Play audio'}
            >
                {isPlaying ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                    </svg>
                )}
            </button>

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
