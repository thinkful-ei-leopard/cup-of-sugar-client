import React from 'react';
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
      <section className={styles.userListSection}>
      <h2 className={styles.directoryHeader}>Neighbor Directory</h2>
      <SearchUsers />
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
