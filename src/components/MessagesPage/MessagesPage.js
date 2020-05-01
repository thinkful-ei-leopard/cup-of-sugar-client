import React from 'react'
import MessageList from './MessageList/MessageList'
import styles from './MessagesPage.module.scss'
import MessageForm from './MessageForm/MessageForm'
import UserContext from '../../contexts/UserContext'

export default class MessagesPage extends React.Component {

    static contextType = UserContext

    render() {
        return (
<<<<<<< HEAD
            <section className={styles.messagesPageSection}>
                <MessageForm user={this.context.user}/>
                <MessageList user={this.context.user}/>
=======
            <section className={styles.MessagesPage}>
                <MessageList />
                <MessageForm user={this.context.user}/>
>>>>>>> 0f1cd52d9075a16d92917e4169dbd31afa58e5fa
            </section>
        )
    }
}