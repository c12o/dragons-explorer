import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Input, Button, Loader } from 'components'
import { DragonService } from 'services'
import { dragonAPIURL } from 'config'
import styles from './CreateDragon.module.scss'

function CreateDragon() {
  const [isLoading, setLoading] = useState(false)
  const history = useHistory()
  const dragonApi = new DragonService(dragonAPIURL)

  const onCreate = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      await dragonApi.createDragon({
        name: e.target['dragon-name'].value,
        type: e.target['dragon-type'].value
      })

      history.push('/list-dragons')
    } catch (error) {
      console.log(error)
      window.alert('Ocorreu um erro, por favor tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className={styles.wrapper}>
      <h2>Criar um dragão</h2>
      <form className={styles.container} onSubmit={onCreate}>
        <h3>Preencha os dados abaixo para criar seu dragão</h3>
        <Input id="dragon-name" placeholder="Nome" required />
        <Input id="dragon-type" placeholder="Tipo" required />
        <Button
          type="submit"
          disabled={isLoading}
          style={{
            width: '100%',
            marginTop: '16px',
            flex: 'unset',
            height: '40px'
          }}
        >
          {isLoading ? <Loader style={{ width: '30px' }} /> : 'Criar dragão'}
        </Button>
        <Link to="/list-dragons" className={styles.backButton}>
          Voltar
        </Link>
      </form>
    </main>
  )
}

CreateDragon.propTypes = {
  match: PropTypes.object
}

export default CreateDragon
