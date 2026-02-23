import Image from 'next/image'
import Link from 'next/link'
import siteContent from '@/data/siteContent.json'

export default function TeamPage() {
  const { team } = siteContent
  const { founder, foundingMembers, teamMembers } = team

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
        <span className="font-heading text-lg italic text-leaf-light tracking-wide mb-2 block">The People Behind the Mission</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Team</h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          Meet the dedicated individuals who work tirelessly to rescue, rehabilitate, and protect birds across the region.
        </p>
      </div>

      {/* Founder Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 bg-sun-warm/20 text-earth-deep rounded-full text-sm font-semibold tracking-wide">
              Founder & President
            </span>
          </div>
          <div className="bg-white rounded-xl shadow-medium overflow-hidden">
            <div className="md:flex items-center">
              <div className="md:w-1/3 relative">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-8 md:p-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-2">
                  {founder.name}
                </h2>
                <p className="text-forest-primary font-semibold text-lg mb-4">{founder.role}</p>
                <div className="w-16 h-1 bg-leaf-green rounded-full mb-6" />
                <p className="text-text-secondary leading-relaxed text-lg">{founder.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Members */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-text-primary mb-2">Founding Members</h2>
            <div className="w-20 h-1 bg-leaf-green rounded-full mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {foundingMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-large border border-transparent hover:border-leaf-light"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-xl font-bold text-text-primary mb-1">{member.name}</h3>
                  <p className="text-forest-primary font-medium text-sm mb-3">{member.role}</p>
                  <div className="w-10 h-0.5 bg-leaf-green rounded-full mx-auto mb-3" />
                  <p className="text-text-muted text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-12 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-text-primary mb-2">Team Members</h2>
            <div className="w-20 h-1 bg-leaf-green rounded-full mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-large border border-transparent hover:border-leaf-light"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-xl font-bold text-text-primary mb-1">{member.name}</h3>
                  <p className="text-forest-primary font-medium text-sm mb-3">{member.role}</p>
                  <div className="w-10 h-0.5 bg-leaf-green rounded-full mx-auto mb-3" />
                  <p className="text-text-muted text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
