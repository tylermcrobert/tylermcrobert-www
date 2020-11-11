import { useState, useRef, useEffect } from 'react'

function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect()
  const html = document.documentElement
  const windowHeight = window.innerHeight || html.clientHeight
  const isAboveBottom = rect.top <= windowHeight
  const isBelowTop = rect.bottom >= 0
  return isAboveBottom && isBelowTop
}

const Video: React.FC<{ src: string }> = ({ src }) => {
  const [isInView, setInView] = useState<boolean>(false)
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const $vid = ref.current
    if (!$vid) return

    const calc = () => {
      setInView(isInViewport($vid))
    }

    calc()

    document.addEventListener('scroll', calc)

    return () => {
      document.removeEventListener('scroll', calc)
    }
  }, [])

  /**
   * Watch for video in view and toggle play/pause
   */
  useEffect(() => {
    if (!ref.current) return

    if (isInView) {
      ref.current.play()
    } else {
      ref.current.pause()
    }
  }, [isInView])
  return <video ref={ref} muted playsInline loop src={src} />
}

export default Video
