import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Thread.module.scss';
import ThreadsApiService from '../../../../services/threads-api-service';
import ThreadsContext from '../../../../contexts/ThreadsContext';
import Confirm from '../../../Confirm/Confirm';
import '@reach/dialog/styles.css';

export default class Thread extends React.Component {
  static contextType = ThreadsContext;

  handleThreadDelete = () => {
    ThreadsApiService.deleteThread(this.props.thread.id);
    this.context.deleteThread(this.props.thread.id);
  };

  findCurrentMessage = () => {
    let messagesForThread = this.context.messages.filter(
      message => message.thread_id === this.props.thread.id
    );
    let currentMessage = messagesForThread[0];
    messagesForThread.forEach(message => {
      if (message.date_modified > currentMessage.date_modified) {
        currentMessage = message;
      }
    });
    return currentMessage;
  };

  render() {
    const { thread, user } = this.props;
    let name,
      user_name,
      img_src,
      img_alt = '';
    if (thread.user_id1 === user.id) {
      name = thread.name2;
      user_name = thread.user_name2;
      img_src = thread.img_src2;
      img_alt = thread.img_alt2;
    } else if (thread.user_id1 !== user.id) {
      name = thread.name1;
      user_name = thread.user_name1;
      img_src = thread.img_src1;
      img_alt = thread.img_alt1;
    }

    let currentMessage = this.findCurrentMessage();
    let content,
      date_modifiedMessage = '';
    if (currentMessage) {
      content = currentMessage.content;
      if (currentMessage.user_id === user.id)
        date_modifiedMessage = `Sent on: ${currentMessage.date_modified.slice(
          0,
          10
        )}`;
      else if (currentMessage.use_id !== user.id) {
        date_modifiedMessage = `Received on: ${currentMessage.date_modified.slice(
          0,
          10
        )}`;
      }
    }

    return (
      <li className={styles.Thread}>
        <Link to={`/thread/${thread.id}`}>
          <div className={styles.threadFlexDiv}>
            <img
              className={styles.threadAvatarImg}
              src={img_src}
              alt={img_alt}></img>
            <div className={styles.threadBlockDiv}>
              <h3 className={styles.threadTitle}>
                <span className={styles.userRealName}>{name} </span>
                <span className={styles.userUserName}>({user_name})</span>
              </h3>

              <p className={styles.lastMessage}>
                last message:{' '}
                <span className={styles.lastMessageContent}>{content}</span>
              </p>
              <p className={styles.lastMessageSent}>{date_modifiedMessage}</p>
            </div>
            <Confirm title="Confirm" description="Are you sure?">
              {confirm => (
                <button
                  type="delete"
                  className={styles.deleteThreadButton}
                  onClick={confirm(() => {
                    this.handleThreadDelete();
                  })}>
                  <span className={styles.deleteX}>X</span>
                </button>
              )}
            </Confirm>
          </div>
        </Link>
      </li>
    );
  }
}
