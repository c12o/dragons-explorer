import React, { useState } from 'react'
import ToggleExhibitionListType from '.'

export default {
  title: 'ToggleExhibitionListType',
  component: ToggleExhibitionListType
}

export const Basic = (args) => {
  const [type, setType] = useState('row')
  return (
    <ToggleExhibitionListType
      type={type}
      handleType={(value) => {
        setType(value)
      }}
      {...args}
    />
  )
}
