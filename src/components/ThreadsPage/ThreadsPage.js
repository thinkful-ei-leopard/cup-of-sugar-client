import React from 'react';
import UserContext from '../../contexts/UserContext';
import ThreadsList from './ThreadsList/ThreadsList';
import styles from './ThreadsPage.module.scss';
import UsersApiService from '../../services/users-api-service';

export default class ThreadsPage extends React.Component {
  static contextType = UserContext;

  componentDidMount() {
    const user = this.context.user;
    this.getUsers(user.zip);
  }

  async getUsers(zip) {
    const users = await UsersApiService.getUsersByZip(zip);
    this.context.setUsers(users);
  }

  render() {
    return (
      <section className={styles.ThreadsPage}>
        <h2 className={styles.threadsHeader}>Threads</h2>

        <div className={styles.threadsContainer}>
          <ThreadsList user={this.context.user} />
        </div>
      </section>
    );
  }
}
