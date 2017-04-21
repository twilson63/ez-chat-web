import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import fetch from 'isomorphic-fetch'

import { map, append, prop, compose } from 'ramda'

const store = createStore(
  combineReducers({
    messages: (state = [], action) => {
      switch (action.type) {
        case 'ADD_MESSAGE':
          return append(action.payload, state)
        default:
          return state
      }
    },
    nickname: (state='guest', action) => {
      switch (action.type) {
        case 'SET_NICKNAME':
          return action.payload
        default:
          return state
      }
    },
    newMessage: (state = '', action) => {
      switch (action.type) {
        case 'SET_MESSAGE':
          return action.payload
        default:
          return state
      }
    }
  }),
  applyMiddleware(thunk)
)

export default store
// get all docs
// fetch('http://server.pouchcloud.com/demo-cdc/_all_docs?includ_docs=true')
//   .then(res => res.json())
//   .then(res => {
//   })
//   .catch(err => console.log(err))
// // listen for changes
const changes = () => {
  fetch(
    'https://twilson63.cloudant.com/demo2/_changes?feed=longpoll&since=now&include_docs=true&timeout=50000',
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' +
          btoa(
            'hatinveyerfuldentriesher:ff7ce912ade0e2987feb2eda061d450d5ff0e11e'
          )
      }
    }
  )
    .then(res => res.json())
    .then(res => {
      console.log(res)
      map(
        compose(
          doc => store.dispatch({ type: 'ADD_MESSAGE', payload: doc }),
          prop('doc')
        ),
        res.results
      )
      changes()
    })
    .catch(err => {
      console.log(err.message)
    })
}

changes()
