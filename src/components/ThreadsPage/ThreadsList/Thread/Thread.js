import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Thread.module.scss';
import Button from '../../../Button/Button';
import ThreadsApiService from '../../../../services/threads-api-service';
import ThreadsContext from '../../../../contexts/ThreadsContext';
import Confirm from '../../../Confirm/Confirm';
import '@reach/dialog/styles.css';

export default class Thread extends React.Component {
  static contextType = ThreadsContext;

  handleThreadDelete = () => {
    console.log(this.context);
    ThreadsApiService.deleteThread(this.props.thread.id);
    this.context.deleteThread(this.props.thread.id);
  };

  render() {
    const thread = this.props.thread;
    const user = this.props.user;
    let name = '';
    let user_name = '';
    if (thread.user_id1 === user.id) {
      name = thread.name2;
      user_name = thread.user_name2;
    } else if (thread.user_id1 !== user.id) {
      name = thread.name1;
      user_name = thread.user_name1;
    }

    return (
      <li className={styles.Thread}>
        <Link to={`/thread/${thread.id}`}>
          <h3 className={styles.threadTitle}>
            Thread with {name}({user_name})
          </h3>
        </Link>
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
        <p className={styles.lastMessage}>
          last message: {thread.date_modified.slice(0, 10)}
        </p>
      </li>
    );
  }
}
