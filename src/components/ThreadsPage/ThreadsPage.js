import React from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import ThreadsList from './ThreadsList/ThreadsList';
import styles from './ThreadsPage.module.scss';

export default class ThreadsPage extends React.Component {
  static contextType = UserContext;

  render() {
    return (
      <section className={styles.ThreadsPage}>
        <Link to="/neighbor-directory">
          <h2 className={styles.directoryLink}> Start new thread </h2>
        </Link>
        <h2 className={styles.threadsHeader}>Threads</h2>
        <div className={styles.threadsContainer}>
          <ThreadsList user={this.context.user} />
        </div>
        <Link to="/">
          <span className={styles.dashboardLink}>Back to dashboard</span>
        </Link>
      </section>
    );
  }
}
