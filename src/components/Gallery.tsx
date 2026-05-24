'use client'

import { useState } from 'react'
import Image from 'next/image'
import siteContent from '@/data/siteContent.json'

type LightboxMedia =
  | { type: 'photo'; src: string }
  | { type: 'video'; src: string; caption?: string }

export default function Gallery() {
  const { gallery } = siteContent
  const [lightbox, setLightbox] = useState<LightboxMedia | null>(null)
  const [showAll, setShowAll] = useState(false)
  const [showAllVideos, setShowAllVideos] = useState(false)

  const displayPhotos = showAll ? gallery.photos : gallery.photos.slice(0, 12)
  const displayVideos = showAllVideos ? gallery.videos : gallery.videos.slice(0, 8)

  const openPhoto = (src: string) => setLightbox({ type: 'photo', src })
  const openVideo = (src: string, caption?: string) =>
    setLightbox({ type: 'video', src, caption })
  const closeLightbox = () => setLightbox(null)

  return (
    <section id="gallery" className="py-20 md:py-28 bg-cream-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-subtitle">{gallery.subtitle}</span>
          <h2 className="section-title">{gallery.title}</h2>
          <p className="section-description">{gallery.description}</p>
        </div>

        {/* Videos Grid */}
        {gallery.videos.length > 0 && (
          <div className="mb-16">
            <h3 className="font-heading text-2xl font-semibold text-text-primary mb-6 text-center">
              Our Videos
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {displayVideos.map((video, index) => (
                <div
                  key={`video-${index}`}
                  className="relative aspect-square rounded-lg overflow-hidden shadow-soft group cursor-pointer hover:shadow-large transition-all duration-300 bg-black"
                  onClick={() => openVideo(video.src, video.caption)}
                >
                  <video
                    src={video.src}
                    className="absolute inset-0 w-full h-full object-cover"
                    preload="metadata"
                    muted
                    playsInline
                  />
                  {/* Dark overlay for legibility */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 fill-forest-primary ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Caption */}
                  {video.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white text-sm font-medium line-clamp-2">
                        {video.caption}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Show More Button */}
            {gallery.videos.length > 8 && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAllVideos(!showAllVideos)}
                  className="btn btn-secondary"
                >
                  {showAllVideos ? 'Show Less' : `Show All ${gallery.videos.length} Videos`}
                </button>
              </div>
            )}
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
                onClick={() => openPhoto(photo)}
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
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            aria-label="Close"
          >
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
          <div
            className="relative max-w-5xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.type === 'photo' ? (
              <Image
                src={lightbox.src}
                alt="Gallery image"
                fill
                className="object-contain"
              />
            ) : (
              <>
                <video
                  src={lightbox.src}
                  className="max-w-full max-h-[80vh] object-contain"
                  controls
                  autoPlay
                  playsInline
                />
                {lightbox.caption && (
                  <p className="text-white text-center mt-4 text-lg font-medium">
                    {lightbox.caption}
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
