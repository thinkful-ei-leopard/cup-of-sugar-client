import React, { Component } from 'react';
import styles from './UsersRoute.module.scss';
import UsersList from '../../components/UsersList/UsersList';
import UserContext from '../../contexts/UserContext';
import UsersApiService from '../../services/users-api-service';

export class UsersRoute extends Component {
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
      <div className={styles.usersRouteContainer}>
        <UsersList />
      </div>
    );
  }
}

export default UsersRoute;
