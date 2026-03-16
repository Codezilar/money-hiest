import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <header className="nav">
        <div className="nav_container">
            <div className="logo">
                JECKS
            </div>
            <ul>
                <Link href={""} className='nav-item button'>
                    <button className='button'>
                        HOME
                    </button>
                </Link>
                <Link href={""} className='nav-item button'>
                    <button className='button'>
                        ABOUT
                    </button>
                </Link>
                <Link href={""} className='nav-item button'>
                    <button className='button'>
                        AIRDROP
                    </button>
                </Link>
                <Link href={""} className='nav-item button'>
                    <button className='button'>
                        PRIVACY
                    </button>
                </Link>
            </ul>
            <WalletMultiButton />
        </div>
    </header >
  )
}

export default Nav