import { useState, useLayoutEffect } from 'react'

const LARGE_MOBILE_BREAKPOINT = '425' // valor em pixels

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0])
  useLayoutEffect(() => {
    function updateSize() {
      const { width, height } = window.screen
      setSize([width, height])
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size
}

export const useIsMobile = () => {
  const [width] = useWindowSize()
  return width < LARGE_MOBILE_BREAKPOINT
}
