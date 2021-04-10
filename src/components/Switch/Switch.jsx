import React, { useState } from 'react'
import styles from './Switch.module.scss'
import { DarkMode, LightMode } from 'assets/icons'

function Switch() {
  const [isChecked, setChecked] = useState(false)
  const switchClasses = `${styles.switch} ${styles.switchTrack}`

  return (
    <div className={styles.switchContainer}>
      <LightMode
        size="20"
        className={styles[!isChecked ? 'active' : 'inactive']}
      />
      <div>
        <input
          onClick={() => setChecked(!isChecked)}
          id="switch-input"
          className={switchClasses}
          type="checkbox"
        />
        <label htmlFor="switch-input" />
      </div>
      <DarkMode
        size="20"
        className={styles[isChecked ? 'active' : 'inactive']}
      />
    </div>
  )
}

export default Switch
