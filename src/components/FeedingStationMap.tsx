'use client'

import { useEffect, useState } from 'react'

interface Station {
  name: string
  caretaker: string
  location: string
  lat: number
  lng: number
}

interface FeedingStationMapProps {
  stations: Station[]
}

export default function FeedingStationMap({ stations }: FeedingStationMapProps) {
  const [mapReady, setMapReady] = useState(false)

  useEffect(() => {
    setMapReady(true)
  }, [])

  if (!mapReady) {
    return (
      <div className="w-full h-[500px] bg-leaf-pale/30 rounded-xl flex items-center justify-center">
        <p className="text-text-muted">Loading map...</p>
      </div>
    )
  }

  return <MapInner stations={stations} />
}

function MapInner({ stations }: FeedingStationMapProps) {
  const [components, setComponents] = useState<{
    MapContainer: any
    TileLayer: any
    Marker: any
    Popup: any
    L: any
  } | null>(null)

  useEffect(() => {
    async function loadLeaflet() {
      const L = await import('leaflet')
      const RL = await import('react-leaflet')
      await import('leaflet/dist/leaflet.css')

      // Fix default marker icon
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      })

      setComponents({
        MapContainer: RL.MapContainer,
        TileLayer: RL.TileLayer,
        Marker: RL.Marker,
        Popup: RL.Popup,
        L,
      })
    }
    loadLeaflet()
  }, [])

  if (!components) {
    return (
      <div className="w-full h-[500px] bg-leaf-pale/30 rounded-xl flex items-center justify-center">
        <p className="text-text-muted">Loading map...</p>
      </div>
    )
  }

  const { MapContainer, TileLayer, Marker, Popup } = components

  // Center map on Pithoragarh region
  const center: [number, number] = [29.57, 80.19]

  return (
    <MapContainer
      center={center}
      zoom={10}
      scrollWheelZoom={false}
      className="w-full h-[500px] rounded-xl z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stations.map((station, index) => (
        <Marker key={index} position={[station.lat, station.lng] as [number, number]}>
          <Popup>
            <div className="text-sm">
              <p className="font-bold text-forest-primary">{station.name}</p>
              <p className="text-text-secondary">{station.location}</p>
              <p className="text-xs text-text-muted mt-1">Managed by: {station.caretaker}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
