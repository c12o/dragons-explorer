import React from 'react'
import PropTypes from 'prop-types'
import styles from './ListItem.module.scss'
import { Fire, Delete, Edit, Info } from 'assets/icons'
import { IconButton } from 'components'

const ICON_SIZE = '30'

function ListItem({ direction, dragon }) {
  return (
    <div key={dragon.id} className={styles[direction]}>
      <Fire size="40" />
      <p className={styles.dragonName}>{dragon.name}</p>
      <div className={styles.buttonsWrapper}>
        <IconButton
          icon={<Info size={ICON_SIZE} />}
          tooltipMessage="Ver detalhes"
          onClick={() => {}}
        />
        <IconButton
          icon={<Edit size={ICON_SIZE} />}
          tooltipMessage="Editar dragão"
          onClick={() => {}}
        />
        <IconButton
          icon={<Delete size={ICON_SIZE} />}
          tooltipMessage="Remover dragão"
          onClick={() => {}}
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
  }).isRequired
}

ListItem.defaultProps = {
  direction: 'column'
}

export default ListItem
