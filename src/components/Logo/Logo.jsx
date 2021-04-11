import React from 'react'
import { Logo as LogoIcon } from 'assets/icons'
import styles from './Logo.module.scss'

function Logo() {
  return (
    <section className={styles.logoContainer}>
      <LogoIcon size="40" />
      <h1 className={styles.logoTitle}>Dragon explorer</h1>
    </section>
  )
}

export default Logo
