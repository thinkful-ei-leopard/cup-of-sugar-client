import React from 'react'
import ThreadsContext from '../../../contexts/ThreadsContext'
import Thread from './Thread/Thread'

export default class ThreadsList extends React.Component {

    static contextType = ThreadsContext

    render() {

        const threads = this.context.threads
        console.log(threads)

        return (
            <ul>
                <h2>Your threads</h2>
                <p>Threads</p>
                <p>Threads</p>
                <p>Threads</p>
                <p>Threads</p>
                <p>Threads</p>
                {threads.map(thread => <Thread key={thread.id} thread={thread} user={this.props.user}/>)}
            </ul>
        )
    }
}