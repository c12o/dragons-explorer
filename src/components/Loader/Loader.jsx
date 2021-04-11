import React from 'react'
import PropTypes from 'prop-types'
import styles from './Loader.module.scss'

function Loader({ primaryColor, ...props }) {
  console.log(styles)
  return (
    <svg viewBox="25 25 50 50" className={styles.loader} {...props}>
      <circle
        cx="50"
        cy="50"
        r="20"
        fill="none"
        strokeWidth="3"
        strokeMiterlimit="10"
        className={styles[primaryColor ? 'primary' : 'regular']}
      />
    </svg>
  )
}

Loader.propTypes = {
  primaryColor: PropTypes.bool
}

Loader.defaultProps = {
  primaryColor: false
}

export default Loader
