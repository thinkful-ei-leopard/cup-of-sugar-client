import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
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

  componentWillUnmount() {
    this.context.clearFilteredUsers()
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

    let sortedUsers = users.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });

    return (
      <section className={cx(styles.userListSection, 'fadeIn')}>
        <h2 className={styles.directoryHeader}>Neighbor Directory</h2>
        <SearchUsers className={styles.searchUsersComponent} />
        <ul className={styles.UsersList}>
          {sortedUsers.map(user => (
            <User user={this.state.user} neighbor={user} key={user.id} />
          ))}
        </ul>
        <Link to="/">
          <span className={styles.dashboardLink}>Back to dashboard</span>
        </Link>
      </section>
    );
  }
}
