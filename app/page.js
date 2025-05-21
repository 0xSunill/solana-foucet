"use client";
import Foucet from "@/components/Foucet";
import Nav from "@/components/Nav";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-3xl ">
      <Nav />
      <Foucet />
      
    </div>
  );
}
