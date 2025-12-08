'use client'

import { useEffect, useState, useRef } from 'react'

export function useCountUp(end: number, duration: number = 2000, start: number = 0, shouldStart: boolean = false) {
  const [count, setCount] = useState(start)
  const hasStartedRef = useRef(false)

  useEffect(() => {
    if (!shouldStart || hasStartedRef.current) return
    hasStartedRef.current = true

    let startTime: number | null = null
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(start + (end - start) * easeOutQuart))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, start, shouldStart])

  return count
}

