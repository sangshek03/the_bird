'use client'

import { useEffect } from 'react'

export default function ContentProtection() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && (e.key === 'u' || e.key === 'U')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I')) ||
        (e.ctrlKey && (e.key === 's' || e.key === 'S')) ||
        (e.ctrlKey && (e.key === 'c' || e.key === 'C'))
      ) {
        e.preventDefault()
      }
    }

    const handleDragStart = (e: DragEvent) => {
      e.preventDefault()
    }

    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('dragstart', handleDragStart)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('dragstart', handleDragStart)
    }
  }, [])

  return null
}
