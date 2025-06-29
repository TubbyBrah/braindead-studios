import React from "react"
import GlitchTagline from "./GlitchTagline"


const Hero = ({ setShowModal }) => {
  return (
    <section
      className="min-h-screen bg-cover bg-center relative flex flex-col justify-center items-center text-center px-4 bg-black text-white font-sans"
      style={{ backgroundImage: "url('/images/bg-wall.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-0" />

      <img
        src="/images/highordie-logo.png"
        alt="High or Die"
        className="absolute top-6 left-6 w-40 md:w-48 opacity-90 drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]"
      />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <img
          src="/images/hodg-powered.png"
          alt="H Logo"
          className="w-[24rem] md:w-[32rem] lg:w-[42rem] animate-pulse drop-shadow-[0_0_60px_rgba(0,255,255,0.7)]"
        />
        <GlitchTagline />
        <div className="mt-4 flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => setShowModal(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-transform hover:scale-105 shadow-lg"
          >
            Begin Your Induction
          </button>
          <a
            href="#whitepaper"
            className="border border-purple-500 text-purple-300 hover:text-white hover:bg-purple-500 font-bold py-3 px-6 rounded-full transition-transform hover:scale-105 shadow-md"
          >
            Whitepaper
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero