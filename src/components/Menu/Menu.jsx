import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Menu.module.scss'
import { NavBar } from 'components'
import { IconButton } from 'components'
import { Close, Menu as MenuIcon } from 'assets/icons'

function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(!isOpen)

  return isOpen ? (
    <menu className={styles.menu} aria-hidden={isOpen}>
      <IconButton onClick={() => handleOpen()} icon={<Close size="50" />} />
      <NavBar />
    </menu>
  ) : (
    <IconButton onClick={() => handleOpen()} icon={<MenuIcon size="30" />} />
  )
}

export default Menu
