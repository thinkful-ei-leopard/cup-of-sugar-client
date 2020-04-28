import React from 'react'
import UserContext from '../../contexts/UserContext'
import ThreadsList from './ThreadsList/ThreadsList'

export default class ThreadsPage extends React.Component {

    static contextType = UserContext

    render() {
        return (
            <div>
                <ThreadsList user={this.context.user}/>
            </div>
        )
    }
}