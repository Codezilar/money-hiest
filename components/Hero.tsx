import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import React from 'react'
import { SendTokens } from './contract'

const Hero = () => {
  return (
    <div className='hero'>
        <h1>
            Claim Your <span>$JECKS</span> Tokens
        </h1>
        <p>Connect your wallet and claim your exclusive airdrop tokens from the Phantom ecosystem</p>
        <div className="hero-button">
            <WalletMultiButton />
            <SendTokens />
        </div>
    </div>
  )
}

export default Hero