import React from 'react'
import ListItem from '.'

export default {
  title: 'ListItem',
  component: ListItem
}

export const Column = (args) => <ListItem {...args} />

Column.args = {
  dragon: {
    name: 'Drogon',
    id: '120'
  }
}

export const Row = (args) => <ListItem {...args} />

Row.args = {
  dragon: {
    name: 'Drogon',
    id: '120'
  },
  direction: 'row'
}
