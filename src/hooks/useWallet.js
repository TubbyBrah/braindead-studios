// src/hooks/useWallet.js
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'

const useWallet = () => {
  const [account, setAccount] = useState(null)

  const connect = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum)
      const signer = await provider.getSigner()
      const address = await signer.getAddress()
      setAccount(address)
    } else {
      alert("MetaMask not detected.")
    }
  }

  return { account, connect }
}

export default useWallet
