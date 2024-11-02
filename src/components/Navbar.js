'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <img src="/images/logo_with_word.png" alt="SuiSeidon Logo" className={styles.logo} />
        </Link>
      </div>
      <div className={styles.centerSection}>
        <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <Link href="#about" onClick={toggleMobileMenu}>About</Link>
          <Link href="#tokenomics" onClick={toggleMobileMenu}>Tokenomics</Link>
          <Link href="#roadmap" onClick={toggleMobileMenu}>Roadmap</Link>
          <Link href="#network" onClick={toggleMobileMenu}>Community</Link>
        </div>
      </div>
      <div className={styles.rightSection}>
        <a href="#" className={styles.stakeButton}>Get SDN</a>
        <div className={`${styles.mobileMenuToggle} ${isMobileMenuOpen ? styles.open : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar