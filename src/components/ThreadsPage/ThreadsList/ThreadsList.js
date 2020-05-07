import React from 'react';
import ThreadsContext from '../../../contexts/ThreadsContext';
import Thread from './Thread/Thread';
import styles from './ThreadsList.module.scss';

export default class ThreadsList extends React.Component {
  static contextType = ThreadsContext;

  render() {
    const { threads, messages } = this.context;
    let threadsToDisplay = [];
    threads.forEach((thread) => {
      messages.forEach((message) => {
        if (message.thread_id === thread.id) {
          threadsToDisplay.push(thread)
        }
      })
    })

    return (
      <ul className={styles.threadsListUl}>
        {threadsToDisplay.map(thread => (
          <Thread key={thread.id} thread={thread} user={this.props.user} />
        ))}
      </ul>
    );
  }
}
