import React from 'react';
import { Link } from 'react-router-dom';
import ThreadsPage from '../../components/ThreadsPage/ThreadsPage';
import ThreadsContext from '../../contexts/ThreadsContext';
import ThreadsApiService from '../../services/threads-api-service';
import MessagesApiService from '../../services/messages-api-service';
import styles from './ThreadsRoute.module.scss';

export default class ThreadsRoute extends React.Component {
  static contextType = ThreadsContext;

  componentDidMount() {
    this.getThreads();
    this.getMessages();
  }

  async getMessages() {
    const messages = await MessagesApiService.getAllMessages();
    this.context.setMessages(messages);
  }

  async getThreads() {
    const threads = await ThreadsApiService.getThreads();
    this.context.setThreads(threads);
  }

  render() {
    return (
      <div className={styles.threadsRouteContainer}>
        {/* <Link to="/neighbor-directory">
          <h2 className={styles.directoryLink}> Neighbor Lookup </h2>
        </Link> */}
        <ThreadsPage getUsers={this.getUsers} />
      </div>
    );
  }
}
