import React from 'react'
import View from '../components/view'
import ListView from '../components/list-view'
import Row from '../components/row'
import MessageForm from '../containers/message-form'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Messages = props => (
  <View style={styles.container}>
    <ListView
      dataSource={props.messages}
      renderRow={({ _id, ...msg }) => <Row key={_id} {...msg} />}
    />
    <MessageForm />
    <div>
      <Link to='/nickname'>{props.nickname}</Link>
    </div>
  </View>
)

export default connect(state => state)(Messages)

const styles = {
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
}
