import React from 'react'
import styles from './Message.module.scss'

export default class Message extends React.Component {
    render() {
        console.log(this.props.message)
        return (
            <li className={styles.messageLi}>
                <h3>Message From</h3>
                <p>{this.props.message.content}</p>
            </li>
        )
    }
}