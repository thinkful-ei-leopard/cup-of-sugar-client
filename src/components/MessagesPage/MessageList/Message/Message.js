import React from 'react';
import styles from './Message.module.scss';
import UserContext from '../../../../contexts/UserContext';
import cx from 'classnames';

export default class Message extends React.Component {
  static contextType = UserContext;

  render() {
    const { user } = this.context;
    const { message } = this.props;

    return (
      <li
        className={cx(
          styles.messageLi,
          user.id === this.props.message.user_id
            ? styles.sentMessage
            : styles.receivedMessage
        )}>
        {message.content ? (
          <p className={styles.messageContent}>{message.content}</p>
        ) : (
          <p>No messages with this user yet!</p>
        )}
      </li>
    );
  }
}
