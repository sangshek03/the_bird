import Image from 'next/image'
import Link from 'next/link'
import siteContent from '@/data/siteContent.json'
import FeedingStationMap from '@/components/FeedingStationMap'

export default function FeedingStationsPage() {
  const { feedingStations } = siteContent

  return (
    <main className="min-h-screen bg-off-white">
      {/* Header Bar */}
      <div className="bg-gradient-to-br from-forest-deep to-forest-primary text-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <Image
                src={siteContent.siteInfo.logo}
                alt={siteContent.siteInfo.name}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-heading text-lg font-bold">{siteContent.siteInfo.name}</span>
          </Link>
          <Link href="/" className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>

      {/* Page Title */}
      <div className="bg-gradient-to-br from-forest-deep to-forest-primary text-white py-16 px-6 text-center">
        <span className="font-heading text-lg italic text-leaf-light tracking-wide mb-2 block">
          {feedingStations.subtitle}
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {feedingStations.title}
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          {feedingStations.description}
        </p>
      </div>

      {/* Map Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-text-primary mb-2">
              Our Locations
            </h2>
            <p className="text-text-secondary">Click on markers to see station details</p>
            <div className="w-20 h-1 bg-leaf-green rounded-full mx-auto mt-4" />
          </div>
          <div className="shadow-medium rounded-xl overflow-hidden">
            <FeedingStationMap stations={feedingStations.stations} />
          </div>
        </div>
      </section>

      {/* Stations Detail Cards */}
      <section className="py-12 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-text-primary mb-2">
              Station Details
            </h2>
            <div className="w-20 h-1 bg-leaf-green rounded-full mx-auto" />
          </div>
          <div className="space-y-12">
            {feedingStations.stations.map((station, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-soft overflow-hidden md:flex ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className="md:w-1/2 relative">
                  <div className={`${station.portrait ? 'aspect-[3/4]' : 'aspect-[4/3]'} relative`}>
                    <Image
                      src={station.image}
                      alt={station.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-leaf-pale rounded-full mb-4 w-fit">
                    <svg className="w-4 h-4 text-forest-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span className="text-xs font-semibold text-forest-primary">
                      {station.location.split(',').slice(-2).join(',').trim()}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-2">
                    {station.name}
                  </h3>

                  <p className="text-forest-primary font-medium mb-4">
                    Managed by: {station.caretaker}
                  </p>

                  <div className="w-12 h-0.5 bg-leaf-green rounded-full mb-4" />

                  <p className="text-text-secondary leading-relaxed mb-4">
                    {station.description}
                  </p>

                  <p className="text-text-muted text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    {station.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
