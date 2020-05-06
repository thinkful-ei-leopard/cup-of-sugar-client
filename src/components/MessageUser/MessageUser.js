import React from 'react'
import {withRouter} from 'react-router-dom'
import ThreadsContext from '../../contexts/ThreadsContext'
import ThreadsApiService from '../../services/threads-api-service'
import UsersApiService from '../../services/users-api-service'
import styles from './MessageUser.module.scss'

class MessageUser extends React.Component {

    static contextType = ThreadsContext

    redirectToThread = (threadId) => {
      this.props.history.push(`/thread/${threadId}`)
    }

    async handleThreadCreate() {
        const user = this.props.user;
        let neighbor = await UsersApiService.getUserById(this.props.neighborId);
        let threads = await ThreadsApiService.getThreads();
        let thread = {};
        if(user && neighbor) {
          thread = threads.find((thread) => (thread.user_id1 === user.id || thread.user_id2 === user.id) && (thread.user_id1 === neighbor.id || thread.user_id2 === neighbor.id))
          if (thread) {
            this.redirectToThread(thread.id)
            return
          }
        }
        let newThread = {
          user_id2: neighbor.id,
          name1: user.name,
          user_name1: user.username,
          name2: neighbor.name,
          user_name2: neighbor.user_name,
          img_src1: user.img_src,
          img_alt1: user.img_alt,
          img_src2: neighbor.img_src,
          img_alt2: neighbor.img_alt,
        };
        thread = await ThreadsApiService.addThread(newThread)
        this.redirectToThread(thread.id)
      };

    render() {
      if(this.props.neighborId === this.props.user.id) {
        return (
          <></>
        )
      }
        return (
            <button title="message user" className={styles.messageUserButton}onClick={(e) => {
              this.handleThreadCreate()
              }}>
                {this.props.text}
            </button>
        )
    }
}

export default withRouter(MessageUser)