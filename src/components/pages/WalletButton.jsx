import React from "react";

const WalletButton = ({ account, connectWallet, disconnectWallet }) => {
  return (
    <div className="absolute top-6 right-6 z-20 flex items-center gap-2">
      <button
        onClick={account ? disconnectWallet : connectWallet}
        className="flex items-center gap-2 bg-black bg-opacity-80 px-4 py-2 rounded-full border border-cyan-400 hover:bg-cyan-600 hover:text-white transition text-cyan-300 shadow-md"
      >
        <img
          src="/images/metamask-icon.svg"
          alt="MetaMask"
          className="w-6 h-6"
        />
        {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : "Connect"}
      </button>
    </div>
  );
};

export default WalletButton;
