import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ThreadsContext from '../../../contexts/ThreadsContext';
import ThreadsApiService from '../../../services/threads-api-service';
import styles from './User.module.scss';
import Button from '../../Button/Button';

class User extends React.Component {

  static contextType = ThreadsContext;

  redirectToThread = (threadId) => {
    this.props.history.push(`/thread/${threadId}`)
  }

  async handleThreadCreate() {
    const user = this.props.user;
    const neighbor = this.props.neighbor;
    let newThread = {
      user_id2: neighbor.id,
      name1: user.name,
      user_name1: user.username,
      name2: neighbor.name,
      user_name2: neighbor.user_name
    };
    let thread = await ThreadsApiService.addThread(newThread)
    this.redirectToThread(thread.id)
  };

  render() {
    const neighbor = this.props.neighbor;
    return (
      <li title='Start a Thread' className={styles.userListItem} onClick={e => {
        e.preventDefault();
        this.handleThreadCreate();
      }}>
        {/* <Link to={`/thread/${this.state.threadId}`}> */}
        <p className={styles.neighbor}>
          {neighbor.name} ({neighbor.user_name})
        </p>
        {/* </Link> */}
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

export default withRouter(User)
