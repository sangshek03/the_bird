'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import siteContent from '@/data/siteContent.json'

export default function Gallery() {
  const { gallery } = siteContent
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState('')
  const [showAll, setShowAll] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const displayPhotos = showAll ? gallery.photos : gallery.photos.slice(0, 12)

  const openLightbox = (src: string) => {
    setCurrentImage(src)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setCurrentImage('')
  }

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % gallery.videos.length)
    setIsVideoPlaying(false)
  }

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + gallery.videos.length) % gallery.videos.length)
    setIsVideoPlaying(false)
  }

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  return (
    <section id="gallery" className="py-20 md:py-28 bg-cream-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-subtitle">{gallery.subtitle}</span>
          <h2 className="section-title">{gallery.title}</h2>
          <p className="section-description">{gallery.description}</p>
        </div>

        {/* Video Carousel Section */}
        {gallery.videos.length > 0 && (
          <div className="mb-16">
            <h3 className="font-heading text-2xl font-semibold text-text-primary mb-6 text-center">
              Our Videos
            </h3>

            <div className="relative max-w-4xl mx-auto">
              {/* Main Video Display */}
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-large bg-black">
                <video
                  ref={videoRef}
                  key={gallery.videos[currentVideoIndex].src}
                  src={gallery.videos[currentVideoIndex].src}
                  className="w-full h-full object-contain"
                  controls={isVideoPlaying}
                  onEnded={() => setIsVideoPlaying(false)}
                  onPause={() => setIsVideoPlaying(false)}
                  onPlay={() => setIsVideoPlaying(true)}
                />

                {/* Play Button Overlay (when not playing) */}
                {!isVideoPlaying && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
                    onClick={toggleVideoPlay}
                  >
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-large hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 fill-forest-primary ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Video Label */}
                <span className="absolute top-4 left-4 px-3 py-1.5 bg-coral-soft text-white text-sm font-semibold rounded-full">
                  Video {currentVideoIndex + 1} of {gallery.videos.length}
                </span>
              </div>

              {/* Caption */}
              <div className="text-center mt-4">
                <p className="text-text-primary font-medium text-lg">
                  {gallery.videos[currentVideoIndex].caption}
                </p>
              </div>

              {/* Navigation Arrows */}
              {gallery.videos.length > 1 && (
                <>
                  <button
                    onClick={prevVideo}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 w-12 h-12 bg-white rounded-full shadow-medium flex items-center justify-center hover:bg-leaf-pale hover:scale-110 transition-all z-10"
                    aria-label="Previous video"
                  >
                    <svg className="w-6 h-6 fill-forest-primary" viewBox="0 0 24 24">
                      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    </svg>
                  </button>
                  <button
                    onClick={nextVideo}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 w-12 h-12 bg-white rounded-full shadow-medium flex items-center justify-center hover:bg-leaf-pale hover:scale-110 transition-all z-10"
                    aria-label="Next video"
                  >
                    <svg className="w-6 h-6 fill-forest-primary" viewBox="0 0 24 24">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </svg>
                  </button>
                </>
              )}

              {/* Dot Indicators */}
              {gallery.videos.length > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                  {gallery.videos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentVideoIndex(index)
                        setIsVideoPlaying(false)
                      }}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentVideoIndex
                          ? 'bg-forest-primary w-8'
                          : 'bg-leaf-light hover:bg-leaf-green'
                      }`}
                      aria-label={`Go to video ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Photos Section */}
        <div>
          <h3 className="font-heading text-2xl font-semibold text-text-primary mb-6 text-center">
            Photo Gallery
          </h3>

          {/* Photos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayPhotos.map((photo, index) => (
              <div
                key={`photo-${index}`}
                className="relative aspect-square rounded-lg overflow-hidden shadow-soft group cursor-pointer hover:shadow-large transition-all duration-300"
                onClick={() => openLightbox(photo)}
              >
                <Image
                  src={photo}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-medium">
                    <svg className="w-5 h-5 fill-forest-primary" viewBox="0 0 24 24">
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                      <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {gallery.photos.length > 12 && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="btn btn-secondary"
              >
                {showAll ? 'Show Less' : `Show All ${gallery.photos.length} Photos`}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={currentImage}
              alt="Gallery image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
