import React from 'react'
import styles from './Message.module.scss'
import UserContext from '../../../../contexts/UserContext'
import cx from 'classnames';

export default class Message extends React.Component {
    static contextType=UserContext
    render() {
        const user = this.context.user
        const currentThread = this.props.currentThread
        let messageHeader = '';
        let messageClass = ''
        if (currentThread) {
            if (user.id === this.props.message.user_id) {
                messageHeader = ``
            }

            else if (user.id !== this.props.message.user_id) {
                if(user.id === currentThread.user_id1) {
                    messageHeader = `--${currentThread.name2} (${currentThread.user_name2})`
                }
                else if(user.id === currentThread.user_id2) {
                    messageHeader = `--${currentThread.name1} (${currentThread.user_name1})`
                }
            }
        }
        
        return (
            <li className={cx(styles.messageLi, user.id === this.props.message.user_id ? styles.sentMessage : styles.receivedMessage)}>
                <h3>{messageHeader}</h3>
                <p>{this.props.message.content}</p>
            </li>
        )
    }
}