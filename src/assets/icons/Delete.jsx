import React from 'react'
import PropTypes from 'prop-types'

function Delete({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7667 8.725L10 10.4917L8.22502 8.725L7.05002 9.9L8.82502 11.6667L7.05835 13.4333L8.23335 14.6083L10 12.8417L11.7667 14.6083L12.9417 13.4333L11.175 11.6667L12.9417 9.9L11.7667 8.725ZM12.9167 3.33333L12.0834 2.5H7.91669L7.08335 3.33333H4.16669V5H15.8334V3.33333H12.9167ZM5.00002 15.8333C5.00002 16.75 5.75002 17.5 6.66669 17.5H13.3334C14.25 17.5 15 16.75 15 15.8333V5.83333H5.00002V15.8333ZM6.66669 7.5H13.3334V15.8333H6.66669V7.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

Delete.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Delete
