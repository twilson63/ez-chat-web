import React from 'react'
import { map } from 'ramda'

const ListView = ({ renderRow, dataSource }) => (
  <ul>
    {map(renderRow, dataSource)}
  </ul>
)

export default ListView
