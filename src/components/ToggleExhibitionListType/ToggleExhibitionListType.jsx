import React from 'react'
import PropTypes from 'prop-types'
import styles from './ToggleExhibitionListType.module.scss'
import { Grid, ListItem } from 'assets/icons'

function ToggleExhibitionListType({ handleType, type }) {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.toggleButton}
        type="checkbox"
        checked={type === 'column'}
        id="column-type-button"
        onChange={() => handleType('column')}
      />
      <label htmlFor="column-type-button">
        <Grid size="20" />
      </label>
      <input
        className={styles.toggleButton}
        type="checkbox"
        checked={type === 'row'}
        id="row-type-button"
        onChange={() => handleType('row')}
      />
      <label htmlFor="row-type-button">
        <ListItem size="20" />
      </label>
    </div>
  )
}

ToggleExhibitionListType.propTypes = {
  handleType: PropTypes.func.isRequired,
  type: PropTypes.string
}

export default ToggleExhibitionListType
