import React, { useState } from 'react'
import { NavBar } from 'components'
import { IconButton } from 'components'
import { Close, Menu as MenuIcon } from 'assets/icons'
import styles from './Menu.module.scss'

function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(!isOpen)

  return isOpen ? (
    <menu className={styles.menu} aria-hidden={isOpen}>
      <IconButton
        onClick={() => handleOpen()}
        icon={<Close size="50" />}
        tooltipMessage="Fechar menu"
      />
      <NavBar onClick={() => setIsOpen(false)} />
    </menu>
  ) : (
    <IconButton
      onClick={() => handleOpen()}
      icon={<MenuIcon size="30" />}
      tooltipMessage="Abrir menu"
    />
  )
}

export default Menu
