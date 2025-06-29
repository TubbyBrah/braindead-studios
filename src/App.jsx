import React, { useState } from "react"
import "./index.css"
import WalletButton from "./components/pages/WalletButton"
import Hero from "./components/pages/Hero"
import NFTGallery from "./components/pages/NFTGallery"
import Footer from "./components/pages/Footer"
import InductionModal from "./components/pages/InductionModal"
import { getDatabase, ref, push } from "firebase/database"
import { app } from "./firebase"
import { ethers } from "ethers"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  const [account, setAccount] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState("")

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        const address = await signer.getAddress()
        setAccount(address)
        toast.success("Wallet connected!")
      } else {
        alert("MetaMask not detected")
      }
    } catch (err) {
      console.error(err)
      toast.error("Failed to connect wallet")
    }
  }

  const disconnectWallet = () => {
    setAccount(null)
    toast.info("Wallet disconnected")
  }

  const handleInductionSubmit = () => {
    if (email.trim()) {
      const db = getDatabase(app)
      const emailRef = ref(db, "inductionEmails")
      push(emailRef, { email })
      toast.success("Signal received. You’re now on the path.")
      setShowModal(false)
      setEmail("")
    } else {
      toast.warn("Enter a valid address into the Echo.")
    }
  }

  return (
    <div className="bg-black text-white font-sans relative">
      <ToastContainer />
      <WalletButton
        account={account}
        connectWallet={connectWallet}
        disconnectWallet={disconnectWallet}
      />
      <Hero setShowModal={setShowModal} />
      {/* <NFTGallery /> */}
      <Footer />
      <InductionModal
        show={showModal}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleInductionSubmit}
        onClose={() => setShowModal(false)}
      />
    </div>
  )
}

export default App