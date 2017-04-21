import React from 'react'

const TextInput = props => (
  <form onSubmit={props.onSubmit}>
    <input type='text' value={props.value} onChange={e => props.onChange(e.target.value)}  />
  </form>
)

export default TextInput
