import React, { useState, useEffect } from 'react'

const taglines = [
  "404: Your soul not found.",
  "Lag spikes? That’s just withdrawal.",
  "Powered by $HODG.",
  "Spoken in Tongues. Compiled in Pain.",
  "You don’t play. You submit.",
  "Tripping isn’t a feature. It’s required.",
  "Escape is not in the settings menu.",
  "Powered by $HODG.",
  "You’re Not Hallucinating. It’s Real Now.",
]

const GlitchTagline = () => {
  const [index, setIndex] = useState(0)
  const [glitching, setGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitching(true)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % taglines.length)
        setGlitching(false)
      }, 400)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`text-lg md:text-xl text-cyan-100 mt-2 drop-shadow-md transition duration-300 ease-in-out ${glitching ? 'animate-glitch' : ''}`}>
      {taglines[index]}
    </div>
  )
}

export default GlitchTagline
