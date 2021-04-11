import React from 'react'
import PropTypes from 'prop-types'
import styles from './IconButton.module.scss'

function IconButton({ icon, onClick, tooltipMessage }) {
  return (
    <button
      onClick={onClick}
      className={styles.iconButton}
      aria-label={tooltipMessage}
    >
      {icon}
    </button>
  )
}

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  tooltipMessage: PropTypes.string
}

export default IconButton
