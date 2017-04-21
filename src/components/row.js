import React from 'react'

const Row = ({ author, message }) => (
  <li>
    <span className='author' style={{marginRight: 16}}>{author}</span>
    <span className='message'>{message}</span>
  </li>
)

export default Row
