"use client"
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import React from 'react'

const Nav = () => {
    return (
        <div className="bg-[#0D1117] border-b w-full h-20 px-4 md:px-10 flex justify-between items-center">
            <div className="text-white text-[20px] md:text-3xl font-semibold">
                Solana Faucet
            </div>
            <div className="flex-shrink-0">
                <WalletMultiButton />
            </div>
        </div>
    )
}

export default Nav
