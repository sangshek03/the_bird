'use client'

import { useEffect, useState } from 'react'

interface Station {
  name: string
  caretaker: string
  location: string
  lat: number
  lng: number
  image: string
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

  const { MapContainer, TileLayer, Marker, Popup, L } = components

  // Center map on Pithoragarh region
  const center: [number, number] = [29.57, 80.19]

  const createImageIcon = (imageUrl: string) => {
    return L.divIcon({
      className: '',
      html: `
        <div style="
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 3px solid #2d6a4f;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          overflow: hidden;
          background: white;
        ">
          <img src="${imageUrl}" style="width:100%;height:100%;object-fit:cover;" />
        </div>
        <div style="
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 10px solid #2d6a4f;
          margin: -2px auto 0;
        "></div>
      `,
      iconSize: [56, 68],
      iconAnchor: [28, 68],
      popupAnchor: [0, -68],
    })
  }

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
        <Marker
          key={index}
          position={[station.lat, station.lng] as [number, number]}
          icon={createImageIcon(station.image)}
        >
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
