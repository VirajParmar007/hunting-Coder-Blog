import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'


const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <ul>
          <li><Link href='/'>home</Link></li>
          <li><Link href='/blog'>blog</Link></li>
          <li><Link href='/about'>about</Link></li>
          <li><Link href='/contactus'>contact us</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar