import React from 'react';
import MessageList from './MessageList/MessageList';
import styles from './MessagesPage.module.scss';
import MessageForm from './MessageForm/MessageForm';
import UserContext from '../../contexts/UserContext';

export default class MessagesPage extends React.Component {
  static contextType = UserContext;

  render() {
    return (
      <section className={styles.MessagesPage}>
        <div className={styles.messagesContainer}>
          <MessageList user={this.context.user} />
          <MessageForm user={this.context.user} />
        </div>
      </section>
    );
  }
}
