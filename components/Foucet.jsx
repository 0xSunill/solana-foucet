"use client";
import React, { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

const Faucet = () => {
    const { publicKey, connected } = useWallet();
    const [walletAddress, setWalletAddress] = useState('');

   
    useEffect(() => {
        if (connected && publicKey) {
            setWalletAddress(publicKey.toBase58());
        }
    }, [connected, publicKey]);

    return (
        <div className="px-4 md:px-10 flex justify-center items-center h-screen flex-col gap-10 bg-black">
            <h1 className="font-bold text-5xl text-center text-white">Enter your wallet Address</h1>
            
            <input 
                type="text" 
                placeholder="Enter wallet address"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="w-full max-w-md px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
            
            <button className="mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
                Request Airdrop
            </button>
        </div>
    );
};

export default Faucet;
