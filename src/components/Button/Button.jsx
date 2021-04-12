import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'

function Button({ children, type, onClick, disabled, variant, ...props }) {
  return (
    <button
      className={styles[variant]}
      disabled={disabled}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['outlined', 'solid'])
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  variant: 'solid'
}

export default Button
