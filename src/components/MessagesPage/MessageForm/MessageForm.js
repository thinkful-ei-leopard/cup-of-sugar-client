import React from 'react'
import styles from './MessageForm.module.scss'
import Button from '../../Button/Button'
import ThreadsContext from '../../../contexts/ThreadsContext'
import MessagesApiService from '../../../services/messages-api-service'

export default class MessageForm extends React.Component {

    static contextType= ThreadsContext

    handleMessageSend = (e) => {
        let message = e.target.message.value
        let thread = this.context.currentThread
        let newMessage = MessagesApiService.postMessage(thread.id, message)
    }

    render() {
        return (
            <form className={styles.addMessageForm} onSubmit={(e) => {
                e.preventDefault()
                this.handleMessageSend(e)
                console.log(e.target)
                e.target.message.value=''
            }}>
                <h3>New Message</h3>
                <label htmlFor='message'>Message</label>
                <input name='message' className={styles.messageFormInput}></input>
                <Button type='submit' className={styles.sendButton}>Send</Button>
            </form>
        )
    }
}