import React from 'react'
import PropTypes from 'prop-types'

function Grid({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 3H2.83333C2.3731 3 2 3.3731 2 3.83333V8C2 8.46024 2.3731 8.83333 2.83333 8.83333H7C7.46024 8.83333 7.83333 8.46024 7.83333 8V3.83333C7.83333 3.3731 7.46024 3 7 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 12.1667H2.83333C2.3731 12.1667 2 12.5398 2 13V17.1667C2 17.6269 2.3731 18 2.83333 18H7C7.46024 18 7.83333 17.6269 7.83333 17.1667V13C7.83333 12.5398 7.46024 12.1667 7 12.1667Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.1667 3H12C11.5398 3 11.1667 3.3731 11.1667 3.83333V8C11.1667 8.46024 11.5398 8.83333 12 8.83333H16.1667C16.6269 8.83333 17 8.46024 17 8V3.83333C17 3.3731 16.6269 3 16.1667 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.1667 12.1667H12C11.5398 12.1667 11.1667 12.5398 11.1667 13V17.1667C11.1667 17.6269 11.5398 18 12 18H16.1667C16.6269 18 17 17.6269 17 17.1667V13C17 12.5398 16.6269 12.1667 16.1667 12.1667Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

Grid.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Grid
