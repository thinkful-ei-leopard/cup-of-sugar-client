import React from 'react'
import Message from './Message/Message'
import ThreadsContext from '../../../contexts/ThreadsContext'
import styles from './MessageList.module.scss'

export default class MessageList extends React.Component {

    static contextType = ThreadsContext

    handleMessageDelete = (message) => {
        console.log(message)
        this.context.deleteMessage(message)
    }

    render() {
        const messages = this.context.messages
        const currentThread = this.context.currentThread
        return (
            <ul className={styles.messageListUl}>
                <h2>Message List</h2>
                {messages.map(message => <Message key={message.id} message={message} currentThread={currentThread} handleMessageDelete={this.handleMessageDelete} />)}
            </ul>
        )
    }
}