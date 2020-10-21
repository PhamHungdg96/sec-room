import React from 'react'
import MessageList from '../components/messagelist/MessageList'

function Chat(props){
    return (
        <React.Fragment>
            <MessageList {...props} />
        </React.Fragment>
    )
}
export default Chat;