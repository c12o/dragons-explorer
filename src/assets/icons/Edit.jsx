import React from 'react'
import PropTypes from 'prop-types'

function Edit({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.83331 14.1775L9.51081 14.165L17.5375 6.215C17.8525 5.9 18.0258 5.48166 18.0258 5.03666C18.0258 4.59166 17.8525 4.17333 17.5375 3.85833L16.2158 2.53666C15.5858 1.90666 14.4866 1.91 13.8616 2.53416L5.83331 10.4858V14.1775ZM15.0375 3.715L16.3616 5.03416L15.0308 6.3525L13.7091 5.03166L15.0375 3.715ZM7.49998 11.1808L12.525 6.20333L13.8466 7.525L8.82248 12.5008L7.49998 12.505V11.1808Z"
        fill="currentColor"
      />
      <path
        d="M4.16667 17.5H15.8333C16.7525 17.5 17.5 16.7525 17.5 15.8333V8.61L15.8333 10.2767V15.8333H6.79833C6.77667 15.8333 6.75417 15.8417 6.7325 15.8417C6.705 15.8417 6.6775 15.8342 6.64917 15.8333H4.16667V4.16667H9.8725L11.5392 2.5H4.16667C3.2475 2.5 2.5 3.2475 2.5 4.16667V15.8333C2.5 16.7525 3.2475 17.5 4.16667 17.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

Edit.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Edit
