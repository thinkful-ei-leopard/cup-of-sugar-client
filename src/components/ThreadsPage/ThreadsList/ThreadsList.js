import React from 'react'
import ThreadsContext from '../../../contexts/ThreadsContext'
import Thread from './Thread/Thread'
import styles from './ThreadsList.module.scss'

export default class ThreadsList extends React.Component {

    static contextType = ThreadsContext

    render() {

        const threads = this.context.threads

        return (
            <ul className={styles.threadsListUl}>
                <h2>Threads</h2>
                {threads.map(thread => <Thread key={thread.id} thread={thread} user={this.props.user}/>)}
            </ul>
        )
    }
}