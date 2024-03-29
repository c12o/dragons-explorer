import React from 'react'
import PropTypes from 'prop-types'

function DarkMode({ size, className }) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0002 9.807C8.74201 8.54828 7.88513 6.94484 7.53787 5.1993C7.19061 3.45375 7.36856 1.64444 8.04924 0C6.1085 0.382051 4.32584 1.33431 2.92924 2.735C-0.975762 6.64 -0.975762 12.972 2.92924 16.877C6.83524 20.783 13.1662 20.782 17.0722 16.877C18.4726 15.4805 19.4248 13.6983 19.8072 11.758C18.1628 12.4385 16.3535 12.6164 14.608 12.2692C12.8625 11.9219 11.259 11.0651 10.0002 9.807Z"
        fill="currentColor"
      />
    </svg>
  )
}

DarkMode.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string
}

export default DarkMode
