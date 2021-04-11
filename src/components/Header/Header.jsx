import React from 'react'
import { Menu, NavBar, Switch as ThemeSwitch, Logo } from 'components'
import { useIsMobile } from 'helpers'
import styles from './Header.module.scss'

function Header() {
  const isMobile = useIsMobile()
  const renderNavigation = isMobile ? <Menu /> : <NavBar />

  return (
    <header className={styles.header}>
      <Logo />
      <ThemeSwitch />
      {renderNavigation}
    </header>
  )
}

export default Header
