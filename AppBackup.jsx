import React, { useState } from 'react'
import './index.css'
import GlitchTagline from './components/GlitchTagline'
import { ethers } from 'ethers'

const App = () => {
  const [account, setAccount] = useState(null)

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        const address = await signer.getAddress()
        setAccount(address)
      } else {
        alert('MetaMask not detected')
      }
    } catch (err) {
      console.error(err)
      alert('Failed to connect wallet')
    }
  }

  return (
    <div className="bg-black text-white font-sans">
      {/* Wallet Button in Top-Right */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={connectWallet}
          className="flex items-center gap-2 bg-black bg-opacity-80 px-4 py-2 rounded-full border border-cyan-400 hover:bg-cyan-600 hover:text-white transition text-cyan-300 shadow-md"
        >
          <img
            src="src/public/images/MetaMask-icon-fox.svg"
            alt="MetaMask"
            className="w-6 h-6"
          />
          {account ? 'Connected' : 'Connect'}
        </button>
      </div>

      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover bg-center relative flex flex-col justify-center items-center text-center px-4"
        style={{ backgroundImage: "url('src/public/images/bg-wall.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-0" />

        {/* Top-left High or Die Logo */}
        <img
          src="src/public/images/highordie-logo.png"
          alt="High or Die"
          className="absolute top-6 left-6 w-40 md:w-48 opacity-90 drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]"
        />

        {/* Main Hero Content */}
        <div className="relative z-10 flex flex-col items-center gap-6">
          <img
            src="src/public/images/hodg-powered.png"
            alt="H Logo"
            className="w-[24rem] md:w-[32rem] lg:w-[42rem] animate-pulse drop-shadow-[0_0_60px_rgba(0,255,255,0.7)]"
          />

          <GlitchTagline />

          <div className="mt-4 flex gap-4 justify-center flex-wrap">
            <a
              href="#play"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-transform hover:scale-105 shadow-lg"
            >
              Begin Your Induction
            </a>
            <a
              href="#whitepaper"
              className="border border-purple-500 text-purple-300 hover:text-white hover:bg-purple-500 font-bold py-3 px-6 rounded-full transition-transform hover:scale-105 shadow-md"
            >
              Whitepaper
            </a>
          </div>

          {account && (
            <p className="mt-2 text-sm text-cyan-300">Connected: {account}</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 px-6 text-center border-t border-gray-800">
        <div className="flex justify-center gap-8 mb-4 flex-wrap">
          <a href="https://discord.gg/yk3aDCXe" className="text-purple-400 hover:underline">Discord</a>
          <a href="#" className="text-purple-400 hover:underline">Whitepaper</a>
          <a href="#" className="text-purple-400 hover:underline">Market</a>
        </div>
        <p className="text-sm text-gray-600">&copy; 2025 High or Die. For Those Who Don’t Come Down. Powered by $HODG.</p>
      </footer>
    </div>
  )
}

export default App
