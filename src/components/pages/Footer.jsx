import React from "react"

const Footer = () => {
  return (
    <footer className="bg-black text-purple-300 text-center py-6">
      {/* Icon Row */}
      <div className="flex justify-center gap-8 text-3xl mb-4">
        <a
          href="https://discord.gg/yk3aDCXe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <i className="fab fa-discord"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UC7SHPD9kWLc2LhkOiw1VK8g"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          href="https://x.com/HighOrDieGame"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <i className="fab fa-x-twitter"></i>
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm">
        © 2025 High or Die. For Those Who Don’t Come Down. 
        <p>Powered by $HODG.</p>
      </p>
    </footer>
  )
}

export default Footer
