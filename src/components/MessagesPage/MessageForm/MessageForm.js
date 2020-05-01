import React from 'react';
import styles from './MessageForm.module.scss';
import Button from '../../Button/Button';
import ThreadsContext from '../../../contexts/ThreadsContext';
import MessagesApiService from '../../../services/messages-api-service';

export default class MessageForm extends React.Component {
  static contextType = ThreadsContext;

  handleMessageSend = e => {
    let message = e.target.message.value;
    let thread = this.context.currentThread;
    let newMessage = MessagesApiService.postMessage(thread.id, message);
  };

  render() {
    return (
      <form
        className={styles.addMessageForm}
        onSubmit={e => {
          e.preventDefault();
          this.handleMessageSend(e);
          console.log(e.target);
          e.target.message.value = '';
        }}>
        {/* <h3>New Message</h3> */}
        <div className={styles.newMessageGroup}>
          <div className={styles.inputGroup}>
            <label htmlFor="message">New message: </label>
            <input name="message" className={styles.messageFormInput}></input>
          </div>
          <Button type="submit" className={styles.sendButton}>
            <span className={styles.sendText}>Send</span>
          </Button>
        </div>
      </form>
    );
  }
}
