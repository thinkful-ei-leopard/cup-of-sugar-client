import React from 'react'
import {withRouter} from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import ThreadsContext from '../../contexts/ThreadsContext'
import ThreadsApiService from '../../services/threads-api-service'
import UsersApiService from '../../services/users-api-service'

class MessageUser extends React.Component {

    state = {
        threads: [],
        neighbor: {}
    }

    static contextType = ThreadsContext

    componentDidMount() {
        let threads = ThreadsApiService.getThreads()
        let neighbor = UsersApiService.getUserById(this.props.neighborId)
        this.setState({threads, neighbor})
    }

    async handleThreadCreate() {
        const user = this.props.user;
        let neighbor = this.state.neighbor;
        let threads = this.state.threads;
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

        return (
            <button onClick={(e) => {
              this.handleThreadCreate()
              }}>
                message
            </button>
        )
    }
}

export default withRouter(MessageUser)