import React from 'react'

import View from '../components/view'
import TextInput from '../components/text-input'
import { addMessage } from '../actions'

import { connect } from 'react-redux'

const MessageForm = props => (
  <View>
    <TextInput
      value={props.newMessage}
      onChange={txt => props.dispatch({ type: 'SET_MESSAGE', payload: txt })}
      onSubmit={e => {
        e.preventDefault()
        addMessage(props.nickname, props.newMessage)
            .then(res => {
              console.log(res)
              props.dispatch({ type: 'SET_MESSAGE', payload: '' })
            })
            .catch(err => console.log(err.message))
      }}
      placeholder='Say Something...'
    />
  </View>
)

export default connect(state => state)(MessageForm)
