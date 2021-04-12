import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Input, Button, Loader } from 'components'
import { DragonService } from 'services'
import { dragonAPIURL } from 'config'
import styles from './DragonDetails.module.scss'

const formatDate = (date) => {
  return Intl.DateTimeFormat('pt-br', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date(date))
}

function DragonDetail({ match }) {
  const [isLoading, setLoading] = useState(false)
  const [dragon, setDragon] = useState(null)
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [hasEditionEnabled, setEditionEnable] = useState(false)
  const history = useHistory()
  const dragonApi = new DragonService(dragonAPIURL)

  useEffect(() => {
    const { id } = match.params
    const loadDragon = async (id) => {
      try {
        const { data: dragonResponse } = await dragonApi.getDragonById(id)
        if (dragonResponse) {
          setDragon(dragonResponse)
          setName(dragonResponse.name)
          setType(dragonResponse.type)
        }
      } catch {
        history.replace('/home')
      }
    }
    loadDragon(id)
  }, [])

  const onUpdate = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      await dragonApi.updateDragon({
        id: dragon.id,
        name,
        type
      })

      history.push('/list-dragons')
    } catch (error) {
      console.log(error)
      window.alert('Ocorreu um erro, por favor tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  const isCorrectData = name.length && type.length

  const buttonContent = hasEditionEnabled ? 'Confirmar' : 'Editar'

  return (
    <main className={styles.wrapper}>
      <h2>Detalhes do dragão</h2>
      <form className={styles.container} onSubmit={onUpdate}>
        <h3>Abaixo segue as informações do seu dragão</h3>
        <Input
          value={name}
          placeholder="Nome"
          onChange={({ target }) => setName(target.value)}
          disabled={!hasEditionEnabled}
          required
        />
        <Input
          value={type}
          placeholder="Tipo"
          onChange={({ target }) => setType(target.value)}
          disabled={!hasEditionEnabled}
          required
        />
        <Input
          value={dragon && formatDate(dragon.createdAt)}
          placeholder="Data de criação"
          disabled
        />
        <Button
          type={hasEditionEnabled ? 'submit' : 'button'}
          disabled={isLoading || !isCorrectData}
          onClick={
            !hasEditionEnabled
              ? (e) => {
                  e.preventDefault()
                  setEditionEnable(true)
                }
              : undefined
          }
          style={{
            width: '100%',
            marginTop: '16px',
            flex: 'unset',
            height: '40px'
          }}
        >
          {isLoading ? <Loader style={{ width: '30px' }} /> : buttonContent}
        </Button>
        <Link to="/list-dragons" className={styles.backButton}>
          Voltar
        </Link>
      </form>
    </main>
  )
}

DragonDetail.propTypes = {
  match: PropTypes.object
}

export default DragonDetail
