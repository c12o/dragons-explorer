import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, NavBar, Switch as ThemeSwitch, Logo } from 'components'
import { useIsMobile } from 'helpers'
import styles from './Header.module.scss'

function Header() {
  const isMobile = useIsMobile()
  console.log(isMobile)
  const renderNavigation = isMobile ? <Menu /> : <NavBar />

  return (
    <header className={styles.header}>
      <Link to="/home">
        <Logo />
      </Link>
      <ThemeSwitch />
      {renderNavigation}
    </header>
  )
}

export default Header
