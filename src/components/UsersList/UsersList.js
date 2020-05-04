import React from 'react';
import { Link } from 'react-router-dom';
import User from './User/User';
import UserContext from '../../contexts/UserContext';
import styles from './UsersList.module.scss';
import SearchUsers from './SearchUsers/SearchUsers'

export default class UsersList extends React.Component {
  static contextType = UserContext;

  render() {
    let users = [];
    if (this.context.filterTouched) {
      users = this.context.filteredUsers.filter(
        user => user.id !== this.context.user.id
      );
    }
    else {
      users = this.context.users.filter(
      user => user.id !== this.context.user.id
    );
    }
    console.log(users)
    return (
      <section className={styles.usersListSection}>
        <h2 className={styles.directoryHeader}>Neighbor Directory</h2>
        <ul className={styles.UsersList}>
            {users.map(user => (
              <User user={this.context.user} neighbor={user} key={user.id} />
            ))}
        </ul>
        <Link to="/threads">
          <span className={styles.messagesLink}>Back to messages</span>
        </Link>
      </section>
    );
  }
}
