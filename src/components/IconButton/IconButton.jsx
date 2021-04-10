import React from 'react'
import PropTypes from 'prop-types'
import styles from './IconButton.module.scss'

function IconButton({ icon, onClick }) {
  return (
    <button onClick={onClick} className={styles.iconButton}>
      {icon}
    </button>
  )
}

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default IconButton
