import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <header className="nav">
        <div className="nav_container">
            <Link href={"/"}>
            <div className="logo">
                $JECKS
            </div>
            </Link>
            <ul>
                <Link href={"/"} className='nav-item'>
                    <button>
                        HOME
                    </button>
                </Link>
                <Link href={"/about"} className='nav-item'>
                    <button>
                        ABOUT
                    </button>
                </Link>
                <Link href={"/airdrop"} className='nav-item'>
                    <button>
                        AIRDROP
                    </button>
                </Link>
                <Link href={"/terms"} className='nav-item'>
                    <button>
                        TERMS
                    </button>
                </Link>
                <Link href={"/privacy"} className='nav-item'>
                    <button>
                        PRIVACY
                    </button>
                </Link>
                <Link href={"/contact"} className='nav-item'>
                    <button>
                        CONTACT
                    </button>
                </Link>
            </ul>
            <WalletMultiButton />
        </div>
    </header >
  )
}

export default Nav