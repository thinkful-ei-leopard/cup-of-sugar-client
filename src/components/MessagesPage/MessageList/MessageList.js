import React from 'react'
import Message from './Message/Message'
import ThreadsContext from '../../../contexts/ThreadsContext'
import styles from './MessageList.module.scss'

export default class MessageList extends React.Component {

    static contextType = ThreadsContext

    handleMessageDelete = (message) => {
        this.context.deleteMessage(message)
    }

    render() {
        const messages = this.context.messages
        const currentThread = this.context.currentThread
        let name = ''
        let user_name = ''
        console.log(currentThread)
        console.log(this.props.user)
        if (currentThread) {
            if(currentThread.user_id1 === this.props.user.id) {
                name = currentThread.name2
                user_name = currentThread.user_name2
            }
            else if(currentThread.user_id1 !== this.props.user.id) {
                name = currentThread.name1
                user_name = currentThread.user_name1
            }
        }
        return (
            <ul className={styles.messageListUl}>
                <h2>Thread with {name} ({user_name})</h2>
                {messages.map(message => <Message key={message.id} message={message} currentThread={currentThread} handleMessageDelete={this.handleMessageDelete} />)}
            </ul>
        )
    }
}