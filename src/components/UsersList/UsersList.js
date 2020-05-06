import React from 'react';
import { Link } from 'react-router-dom';
import User from './User/User';
import UserContext from '../../contexts/UserContext';
import styles from './UsersList.module.scss';
import SearchUsers from './SearchUsers/SearchUsers';

export default class UsersList extends React.Component {
  state = {
    user: {}
  };

  static contextType = UserContext;

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getUser();
  }

  async getUser() {
    let user = this.context.user;
    this.setState({ user });
  }

  render() {
    let users = [];
    if (this.context.filterTouched) {
      users = this.context.filteredUsers.filter(
        user => user.id !== this.context.user.id
      );
    } else {
      users = this.context.users.filter(
        user => user.id !== this.context.user.id
      );
    }
    return (
      <section className={styles.userListSection}>
        <h2 className={styles.directoryHeader}>Neighbor Directory</h2>
        <SearchUsers />
        <ul className={styles.UsersList}>
          <div className={styles.usersContainer}>
            {users.map(user => (
              <User user={this.state.user} neighbor={user} key={user.id} />
            ))}
          </div>
        </ul>
        <Link to="/">
          <span className={styles.dashboardLink}>Back to dashboard</span>
        </Link>
      </section>
    );
  }
}
