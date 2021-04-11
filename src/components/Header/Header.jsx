import React from 'react'
import { Menu, NavBar, Switch as ThemeSwitch, Logo } from 'components'
import { useIsMobile } from 'helpers'
import styles from './Header.module.scss'
import { useSession } from 'context'

function Header() {
  const { logout } = useSession()
  const isMobile = useIsMobile()
  const renderNavigation = isMobile ? (
    <Menu />
  ) : (
    <NavBar onClick={() => logout()} />
  )

  return (
    <header className={styles.header}>
      <Logo />
      <ThemeSwitch />
      {renderNavigation}
    </header>
  )
}

export default Header
