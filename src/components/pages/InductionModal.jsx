import React from "react"
// import GlitchTagline from "./GlitchTagline"

const InductionModal = ({ show, email, setEmail, handleSubmit, onClose }) => {
  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-gray-900 border border-cyan-400 rounded-xl p-6 w-full max-w-md text-center shadow-2xl">
        <h2 className="text-2xl font-bold text-cyan-300 mb-4">Join the Cult</h2>
        {/* <GlitchTagline /> */}
        <p className="text-sm text-purple-300 mb-6">
          Transmission portal active. Enter your signal for future contact.
        </p>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 rounded bg-black text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <div className="flex justify-center gap-4">
          <button
            onClick={handleSubmit}
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
          >
            Transmit
          </button>
          <button
            onClick={onClose}
            className="text-sm text-gray-400 hover:text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default InductionModal
