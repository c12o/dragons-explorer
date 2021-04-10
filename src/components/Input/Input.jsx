import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.scss'
import { HidePassword, ShowPassword } from 'assets/icons'

function Input({ id, placeholder, type, ...props }) {
  const [showPassword, toggleShowPassword] = useState(false)

  const inputClass = type === 'password' ? 'passwordInput' : 'input'

  const handleInputType = () => {
    if (type !== 'password') {
      return type
    }
    return showPassword ? 'text' : 'password'
  }

  const renderPasswordIcon = () =>
    showPassword ? <HidePassword size="20" /> : <ShowPassword size="20" />

  return (
    <div className={styles.container}>
      <input
        id={id}
        className={styles[inputClass]}
        type={handleInputType()}
        {...props}
      />
      <label className={styles.label} htmlFor={id}>
        {placeholder}
      </label>
      {type === 'password' && (
        <button
          className={styles.iconButton}
          aria-label={showPassword ? 'Esconder senha' : 'Mostrar senha'}
          type="button"
          onClick={() => toggleShowPassword(!showPassword)}
        >
          {renderPasswordIcon()}
        </button>
      )}
    </div>
  )
}

Input.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string
}

Input.defaultProps = {
  id: '',
  type: 'text'
}

export default Input
