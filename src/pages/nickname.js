import React from 'react'

import View from '../components/view'
import TextInput from '../components/text'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Nickname = props => (
  <View>
    <input
      type='text'
      placeholder='Enter Name'
      value={props.nickname}
      onChange={e => props.dispatch({ type: 'SET_NICKNAME', payload: e.target.value })}
    />
    <Link to='/'>Done</Link>
  </View>
)

export default connect(state => state)(Nickname)
