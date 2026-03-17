"use client"
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset'
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav_container">
        <Link href={"/"} onClick={closeMenu} className="logo-link">
          <div className="logo">
            <span className="logo-text">$JECKS</span>
            <span className="logo-dot"></span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-menu-desktop">
          <li>
            <Link href={"/"} className='nav-item'>
              <span className="nav-item-text">HOME</span>
              <span className="nav-item-indicator"></span>
            </Link>
          </li>
          <li>
            <Link href={"/about"} className='nav-item'>
              <span className="nav-item-text">ABOUT</span>
              <span className="nav-item-indicator"></span>
            </Link>
          </li>
          <li>
            <Link href={"/airdrop"} className='nav-item'>
              <span className="nav-item-text">AIRDROP</span>
              <span className="nav-item-indicator"></span>
            </Link>
          </li>
          <li>
            <Link href={"/terms"} className='nav-item'>
              <span className="nav-item-text">TERMS</span>
              <span className="nav-item-indicator"></span>
            </Link>
          </li>
          <li>
            <Link href={"/privacy"} className='nav-item'>
              <span className="nav-item-text">PRIVACY</span>
              <span className="nav-item-indicator"></span>
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className='nav-item'>
              <span className="nav-item-text">CONTACT</span>
              <span className="nav-item-indicator"></span>
            </Link>
          </li>
        </ul>

        <div className="nav-actions">
          <div className="wallet-button-wrapper">
            <WalletMultiButton />
          </div>
          {/* Hamburger Menu Button */}
          <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`nav-menu-mobile ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-header">
            <div className="mobile-logo">$JECKS</div>
            <button className="close-menu" onClick={closeMenu}>×</button>
          </div>
          <ul className="mobile-nav-items">
            <li>
              <Link href={"/"} className='mobile-nav-item' onClick={closeMenu}>
                <span className="mobile-nav-icon">🏠</span>
                <span>HOME</span>
              </Link>
            </li>
            <li>
              <Link href={"/about"} className='mobile-nav-item' onClick={closeMenu}>
                <span className="mobile-nav-icon">ℹ️</span>
                <span>ABOUT</span>
              </Link>
            </li>
            <li>
              <Link href={"/airdrop"} className='mobile-nav-item' onClick={closeMenu}>
                <span className="mobile-nav-icon">🪂</span>
                <span>AIRDROP</span>
              </Link>
            </li>
            <li>
              <Link href={"/terms"} className='mobile-nav-item' onClick={closeMenu}>
                <span className="mobile-nav-icon">📜</span>
                <span>TERMS</span>
              </Link>
            </li>
            <li>
              <Link href={"/privacy"} className='mobile-nav-item' onClick={closeMenu}>
                <span className="mobile-nav-icon">🔒</span>
                <span>PRIVACY</span>
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className='mobile-nav-item' onClick={closeMenu}>
                <span className="mobile-nav-icon">📧</span>
                <span>CONTACT</span>
              </Link>
            </li>
          </ul>
          <div className="mobile-menu-footer">
            <div className="mobile-wallet">
              <WalletMultiButton />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </header>
  )
}

export default Nav