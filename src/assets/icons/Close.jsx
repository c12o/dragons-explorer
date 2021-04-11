import React from 'react'
import PropTypes from 'prop-types'

function Close({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 67 67"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.4363 33.4999L49.4405 21.5237C49.9662 20.998 50.2615 20.285 50.2615 19.5416C50.2615 18.7982 49.9662 18.0852 49.4405 17.5595C48.9148 17.0339 48.2018 16.7385 47.4584 16.7385C46.715 16.7385 46.002 17.0339 45.4763 17.5595L33.5001 29.5637L21.5238 17.5595C20.9981 17.0339 20.2852 16.7385 19.5417 16.7385C18.7983 16.7385 18.0853 17.0339 17.5597 17.5595C17.034 18.0852 16.7387 18.7982 16.7387 19.5416C16.7387 20.285 17.034 20.998 17.5597 21.5237L29.5638 33.4999L17.5597 45.4762C17.298 45.7357 17.0903 46.0445 16.9486 46.3847C16.8069 46.7249 16.7339 47.0897 16.7339 47.4583C16.7339 47.8268 16.8069 48.1917 16.9486 48.5319C17.0903 48.8721 17.298 49.1808 17.5597 49.4404C17.8192 49.702 18.1279 49.9097 18.4681 50.0514C18.8083 50.1932 19.1732 50.2661 19.5417 50.2661C19.9103 50.2661 20.2752 50.1932 20.6154 50.0514C20.9555 49.9097 21.2643 49.702 21.5238 49.4404L33.5001 37.4362L45.4763 49.4404C45.7358 49.702 46.0446 49.9097 46.3848 50.0514C46.725 50.1932 47.0899 50.2661 47.4584 50.2661C47.8269 50.2661 48.1918 50.1932 48.532 50.0514C48.8722 49.9097 49.181 49.702 49.4405 49.4404C49.7021 49.1808 49.9098 48.8721 50.0516 48.5319C50.1933 48.1917 50.2663 47.8268 50.2663 47.4583C50.2663 47.0897 50.1933 46.7249 50.0516 46.3847C49.9098 46.0445 49.7021 45.7357 49.4405 45.4762L37.4363 33.4999Z"
        fill="currentColor"
      />
    </svg>
  )
}

Close.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Close
