import React, { useState } from 'react'
import styles from './Switch.module.scss'
import { DarkMode, LightMode } from 'assets/icons'
import { useSession } from 'context'

function Switch() {
  const { handleTheme, theme } = useSession()
  const [isChecked, setChecked] = useState(!(theme === 'light'))
  const switchClasses = `${styles.switch} ${styles.switchTrack}`

  const toggleTheme = () => {
    const themeSelected = isChecked ? 'light' : 'dark'
    handleTheme(themeSelected)
    setChecked(!isChecked)
  }

  return (
    <div className={styles.switchContainer}>
      <LightMode
        size="20"
        className={styles[!isChecked ? 'active' : 'inactive']}
      />
      <div>
        <input
          onChange={toggleTheme}
          id="switch-input"
          className={switchClasses}
          type="checkbox"
          checked={isChecked}
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
