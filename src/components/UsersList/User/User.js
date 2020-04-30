import React from 'react';
import { Link } from 'react-router-dom';
import ThreadsContext from '../../../contexts/ThreadsContext';
import ThreadsApiService from '../../../services/threads-api-service';
import styles from './User.module.scss';
import Button from '../../Button/Button';

export default class User extends React.Component {
  static contextType = ThreadsContext;

  handleThreadCreate = () => {
    const user = this.props.user;
    const neighbor = this.props.neighbor;
    let newThread = {
      user_id2: neighbor.id,
      name1: user.name,
      user_name1: user.username,
      name2: neighbor.name,
      user_name2: neighbor.user_name
    };
    ThreadsApiService.addThread(newThread);
  };

  render() {
    const neighbor = this.props.neighbor;
    return (
      <li className={styles.userListItem} onClick={e => {
        e.preventDefault();
        this.handleThreadCreate();
      }}>
        <p className={styles.neighbor}>
          {neighbor.name} ({neighbor.user_name})
        </p>
        {/* <Button
          onClick={e => {
            e.preventDefault();
            this.handleThreadCreate();
          }}>
          Lookup Neighbor
        </Button> */}
      </li>
    );
  }
}
