import React from 'react'
import PropTypes from 'prop-types'

function Menu({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M39.6 0H0.4C0.18 0 0 0.204545 0 0.454545V4.09091C0 4.34091 0.18 4.54545 0.4 4.54545H39.6C39.82 4.54545 40 4.34091 40 4.09091V0.454545C40 0.204545 39.82 0 39.6 0ZM39.6 35.4545H0.4C0.18 35.4545 0 35.6591 0 35.9091V39.5455C0 39.7955 0.18 40 0.4 40H39.6C39.82 40 40 39.7955 40 39.5455V35.9091C40 35.6591 39.82 35.4545 39.6 35.4545ZM39.6 17.7273H0.4C0.18 17.7273 0 17.9318 0 18.1818V21.8182C0 22.0682 0.18 22.2727 0.4 22.2727H39.6C39.82 22.2727 40 22.0682 40 21.8182V18.1818C40 17.9318 39.82 17.7273 39.6 17.7273Z"
        fill="#5F6368"
      />
    </svg>
  )
}

Menu.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Menu
