import React from 'react'
import User from './User/User'
import UserContext from '../../contexts/UserContext'

export default class UsersList extends React.Component {

    static contextType = UserContext
    render () {
        const users = this.context.users.filter(user => user.id !== this.context.user.id)
        return (
            <ul>
                <h2>Start a new Thread</h2>
                {users.map(user => <User user={this.context.user} neighbor={user} key={user.id} />)}
            </ul>
        )
    }
}