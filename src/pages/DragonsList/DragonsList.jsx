import React, { useEffect, useState } from 'react'
import { ListItem, Loader, ToggleExhibitionListType } from 'components'
import { DragonService } from 'services'
import { dragonAPIURL } from 'config'
import styles from './DragonsList.module.scss'

function DragonsList() {
  const [isLoading, setLoading] = useState(false)
  const [dragons, setDragons] = useState([])
  const [listType, setListType] = useState('column')
  const dragonApi = new DragonService(dragonAPIURL)

  const loadDragons = async () => {
    const { data: dragonsResponse } = await dragonApi.getDragons()
    const sortedList = dragonsResponse.sort((current, next) =>
      current.name.toLowerCase() > next.name.toLowerCase() ? 1 : -1
    )
    setDragons(sortedList)
  }

  useEffect(() => {
    try {
      setLoading(true)
      loadDragons()
    } catch (error) {
      window.alert('Erro ao buscar os dragões')
    } finally {
      setLoading(false)
    }
  }, [])

  const onDelete = async (id) => {
    const confirmedExclusion = window.confirm(
      'Você realmente quer excluir este dragão?'
    )
    if (confirmedExclusion) {
      await dragonApi.deleteDragon(id)
      await loadDragons()
    }
  }

  return (
    <main className={styles.wrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.pageHeader}>
            <h2>Lista de dragões</h2>
            <ToggleExhibitionListType
              type={listType}
              handleType={setListType}
            />
          </div>
          <ul className={styles[listType]}>
            {dragons.map((dragon, index) => (
              <li key={index}>
                <ListItem
                  direction={listType}
                  dragon={dragon}
                  onDelete={onDelete}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  )
}

export default DragonsList
