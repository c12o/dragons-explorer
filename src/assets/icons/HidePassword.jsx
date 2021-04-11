import React from 'react'
import PropTypes from 'prop-types'

function HidePassword({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M53.92 34.62C53.2133 33.8426 52.3603 33.212 51.4099 32.7642C50.4595 32.3164 49.4302 32.0602 48.3807 32.0102C46.2613 31.9092 44.1886 32.6543 42.6185 34.0815C41.841 34.7883 41.2104 35.6412 40.7626 36.5916C40.3148 37.542 40.0586 38.5713 40.0086 39.6208C39.9076 41.7402 40.6527 43.813 42.08 45.383L61.316 66.543C25 88.836 9.38397 123.19 8.68997 124.754C8.23557 125.777 8.00079 126.884 8.00079 128.003C8.00079 129.122 8.23557 130.229 8.68997 131.252C9.04197 132.042 17.51 150.824 36.345 169.656C61.429 194.737 93.123 207.995 128.001 207.995C145.924 208.1 163.667 204.408 180.061 197.163L202.081 221.384C202.788 222.161 203.641 222.792 204.591 223.24C205.541 223.688 206.571 223.944 207.62 223.994C208.67 224.044 209.719 223.887 210.707 223.531C211.696 223.176 212.605 222.629 213.382 221.923C214.16 221.216 214.791 220.363 215.238 219.413C215.686 218.462 215.942 217.433 215.992 216.383C216.042 215.334 215.885 214.285 215.53 213.296C215.174 212.307 214.628 211.398 213.921 210.621L53.92 34.62ZM101.246 110.465L142.92 156.307C136.646 159.619 129.449 160.751 122.461 159.525C115.473 158.299 109.091 154.785 104.318 149.536C99.546 144.286 96.6543 137.599 96.0981 130.526C95.5419 123.453 97.3529 116.396 101.246 110.465V110.465ZM128 191.994C97.22 191.994 70.326 180.808 48.065 158.748C38.9178 149.67 31.1336 139.315 24.955 128.006C29.686 119.204 44.75 94.55 72.293 78.618L90.253 98.374C83.2459 107.294 79.6251 118.408 80.0331 129.743C80.441 141.079 84.8513 151.903 92.4815 160.296C100.112 168.689 110.468 174.108 121.714 175.591C132.959 177.074 144.367 174.526 153.912 168.398L168.632 184.591C155.664 189.557 141.886 192.067 128 191.994V191.994ZM247.31 131.251C246.89 132.196 236.763 154.625 213.946 175.059C212.362 176.449 210.293 177.157 208.189 177.031C206.086 176.904 204.117 175.952 202.711 174.383C201.305 172.813 200.575 170.751 200.68 168.646C200.785 166.542 201.717 164.563 203.272 163.141C214.442 153.074 223.832 141.193 231.047 128C224.869 116.687 217.084 106.329 207.935 97.248C185.674 75.182 158.779 63.994 128 63.994C121.513 63.9852 115.036 64.5116 108.635 65.568C107.595 65.7504 106.529 65.725 105.499 65.4933C104.468 65.2617 103.494 64.8283 102.632 64.2183C101.77 63.6082 101.037 62.8335 100.476 61.9389C99.9151 61.0442 99.5367 60.0474 99.3628 59.0058C99.1888 57.9642 99.2229 56.8984 99.4629 55.87C99.7029 54.8416 100.144 53.8709 100.761 53.0139C101.378 52.1569 102.159 51.4305 103.058 50.8767C103.957 50.3228 104.957 49.9525 106 49.787C113.272 48.5854 120.63 47.9857 128 47.994C162.878 47.994 194.573 61.254 219.657 86.341C238.491 105.176 246.959 123.962 247.311 124.753C247.765 125.776 248 126.883 248 128.002C248 129.121 247.765 130.228 247.311 131.251H247.31ZM134.03 96.567C131.958 96.1577 130.132 94.9453 128.95 93.1945C127.768 91.4438 127.327 89.2967 127.722 87.2217C128.117 85.1467 129.317 83.3123 131.06 82.1186C132.802 80.9249 134.946 80.4689 137.024 80.85C147.219 82.8297 156.502 88.0511 163.488 95.736C170.474 103.421 174.789 113.158 175.791 123.495C175.988 125.608 175.337 127.712 173.983 129.345C172.628 130.978 170.681 132.007 168.568 132.204C168.318 132.227 168.066 132.239 167.815 132.239C165.823 132.236 163.905 131.491 162.433 130.149C160.962 128.807 160.044 126.964 159.859 124.981C159.192 118.094 156.316 111.606 151.662 106.486C147.007 101.365 140.823 97.8863 134.03 96.567V96.567Z"
        fill="currentColor"
      />
    </svg>
  )
}

HidePassword.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default HidePassword
