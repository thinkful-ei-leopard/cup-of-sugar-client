import React from 'react'
import { Link } from 'react-router-dom' 

export default class Thread extends React.Component {
    render() {
        const thread = this.props.thread
        const user = this.props.user
        let name = ''
        let user_name = ''
        if (thread.user_id1 === user.id) {
            name = thread.name2
            user_name = thread.user_name2
        }
        name = thread.name1
        user_name = thread.user_name1

        return (
            <li>
                <Link to={`/thread/${thread.id}`}>
                <h3>Thread with {name}({user_name})</h3>
                </Link>
            </li>
        )
    }
}