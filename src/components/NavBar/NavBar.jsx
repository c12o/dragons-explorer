import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './NavBar.module.scss'
import { useSession } from 'context'

function NavBar({ onClick }) {
  const { logout } = useSession()

  return (
    <nav className={styles.navBar} aria-hidden="true">
      <ul>
        <li>
          <Link onClick={onClick} to="/create-dragon" className={styles.link}>
            Cadastrar
          </Link>
        </li>
        <li>
          <Link onClick={onClick} to="/list-dragons" className={styles.link}>
            Ver dragões
          </Link>
        </li>
        <li>
          <button className={styles.logoutButton} onClick={() => logout()}>
            Sair
          </button>
        </li>
      </ul>
    </nav>
  )
}

NavBar.propTypes = {
  onClick: PropTypes.func
}

export default NavBar
