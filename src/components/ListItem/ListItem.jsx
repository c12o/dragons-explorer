import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { IconButton } from 'components'
import { Fire, Delete, Info } from 'assets/icons'
import styles from './ListItem.module.scss'

const ICON_SIZE = '30'

function ListItem({ direction, dragon, onDelete }) {
  const history = useHistory()
  return (
    <div key={dragon.id} className={styles[direction]}>
      <Fire size="40" />
      <p className={styles.dragonName}>{dragon.name}</p>
      <div className={styles.buttonsWrapper}>
        <IconButton
          icon={<Info size={ICON_SIZE} />}
          tooltipMessage="Ver detalhes"
          onClick={() => {
            history.push(`dragon/${dragon.id}`)
          }}
        />
        <IconButton
          icon={<Delete size={ICON_SIZE} />}
          tooltipMessage="Remover dragão"
          onClick={() => onDelete(dragon.id)}
        />
      </div>
    </div>
  )
}

ListItem.propTypes = {
  direction: PropTypes.oneOf(['column', 'row']),
  dragon: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  }).isRequired,
  onDelete: PropTypes.func.isRequired
}

ListItem.defaultProps = {
  direction: 'column'
}

export default ListItem
