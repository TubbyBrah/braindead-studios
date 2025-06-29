import React from 'react'

const NFTPreview = () => (
  <section className="bg-black py-16 px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-200 drop-shadow">Lucid Echoes (NFT Preview)</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center max-w-6xl mx-auto">
      {[1, 2, 3, 4].map((id) => (
        <div key={id} className="bg-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transition">
          <img
            src={`src/public/images/nft-preview-${id}.png`}
            alt={`Lucid Echo ${id}`}
            className="rounded-lg mb-2"
          />
          <p className="text-sm text-purple-300">Lucid Echo #{id}</p>
        </div>
      ))}
    </div>
  </section>
)

export default NFTPreview
