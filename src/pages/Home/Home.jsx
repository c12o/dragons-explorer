import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'components'
import styles from './Home.module.scss'

function Home() {
  const history = useHistory()
  const goTo = (value) => {
    history.push(value)
  }

  return (
    <main className={styles.wrapper}>
      <article>
        <h2>Seja bem vinda!</h2>
        <p>Agora você já pode administrar seus próprios dragões</p>
        <p>
          Dispomos de serviços para que você possa criar, editar, consultar e
          excluir seus dragões. Use sua imaginação e comece agora!
        </p>
      </article>
      <div className={styles.buttonsWrapper}>
        <Button variant="outlined" onClick={() => goTo('/list-dragons')}>
          Ver lista de dragões
        </Button>
        <Button onClick={() => goTo('/create-dragon')}>Criar um dragão</Button>
      </div>
    </main>
  )
}

export default Home
