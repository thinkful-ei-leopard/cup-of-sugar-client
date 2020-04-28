import React from 'react'
import MessageList from './MessageList/MessageList'
import styles from './MessagesPage.module.scss'

export default class MessagesPage extends React.Component {
    render() {
        return (
            <section className={styles.messagesPageSection}>
                <MessageList />
            </section>
        )
    }
}