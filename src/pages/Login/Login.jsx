import React from 'react'
import { Button, Input, Logo } from 'components'
import { useSession } from 'context'
import styles from './Login.module.scss'

function Login() {
  const { login } = useSession()

  const handleSubmit = (e) => {
    e.preventDefault()
    const nickname = e.target['user-identifier']?.value
    const password = e.target['user-password']?.value

    const loginResponse = login({ nickname, password })

    if (!loginResponse.success) {
      window.alert(loginResponse.message)
    }
  }

  return (
    <main className={styles.container}>
      <section className={styles.cardContainer}>
        <Logo />
        <h2>Identifique-se abaixo para ter acesso aos seus dragões</h2>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <Input id="user-identifier" placeholder="Usuário" required />
          <Input
            id="user-password"
            placeholder="Senha"
            type="password"
            required
          />
          <Button type="submit">Confirmar</Button>
        </form>
      </section>
    </main>
  )
}

export default Login
