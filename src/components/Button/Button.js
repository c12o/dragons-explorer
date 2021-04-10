import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'

function Button({ children, type, onClick }) {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
  type: 'button'
}

export default Button
