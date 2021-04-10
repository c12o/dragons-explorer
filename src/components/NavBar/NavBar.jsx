import { Button } from 'components'
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './NavBar.module.scss'

function NavBar({ onClick }) {
  return (
    <nav className={styles.navBar} aria-hidden="true">
      <ul>
        <li>
          <Link className={styles.link}>Cadastrar</Link>
        </li>
        <li>
          <Link className={styles.link}>Ver dragões</Link>
        </li>
        <li>
          <button className={styles.logoutButton} onClick={onClick}>
            Sair
          </button>
        </li>
      </ul>
    </nav>
  )
}

NavBar.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default NavBar
