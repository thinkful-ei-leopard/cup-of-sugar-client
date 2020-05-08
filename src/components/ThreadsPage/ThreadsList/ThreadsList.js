import React from 'react';
import ThreadsContext from '../../../contexts/ThreadsContext';
import Thread from './Thread/Thread';
import styles from './ThreadsList.module.scss';

export default class ThreadsList extends React.Component {
  static contextType = ThreadsContext;

  render() {
    const { threads, messages } = this.context;
    let threadsToDisplay = [];
    threads.forEach(thread => {
      let counter = 0;
      messages.forEach(message => {
        if (message.thread_id === thread.id) {
          counter++;
          if (counter <= 1) {
            threadsToDisplay.push(thread);
          }
        }
      });
    });
    console.log('threads', threads, 'messages', messages);
    console.log('threadsToDisplay', threadsToDisplay);

    return (
      <ul className={styles.threadsListUl}>
        {threadsToDisplay.map(thread => (
          <Thread key={thread.id} thread={thread} user={this.props.user} />
        ))}
      </ul>
    );
  }
}
