import React from 'react';
import User from './User/User';
import UserContext from '../../contexts/UserContext';
import styles from './UsersList.module.scss';

export default class UsersList extends React.Component {
  static contextType = UserContext;

  render() {
    const users = this.context.users.filter(
      user => user.id !== this.context.user.id
    );
    return (
      <section className={styles.userListSection}>
      <h2 className={styles.directoryHeader}>Neighbor Directory</h2>
      <ul className={styles.UsersList}>
        <div className={styles.usersContainer}>
          {users.map(user => (
            <User user={this.context.user} neighbor={user} key={user.id} />
          ))}
        </div>
      </ul>
      </section>
    );
  }
}
