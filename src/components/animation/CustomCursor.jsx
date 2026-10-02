import {useEffect, useState} from 'react'
import './CustomCursor.css'

const CustomCursor = () => {
  const [position, setPosition] = useState({x: -100, y: -100})
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = event => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      })
    }

    const handleMouseOver = event => {
      const interactiveElement = event.target.closest(
        'a, button, input, textarea, select',
      )

      setIsHovering(Boolean(interactiveElement))
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <div
      className={`custom-cursor ${isHovering ? 'custom-cursor-hover' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      aria-hidden="true"
    />
  )
}

export default CustomCursor