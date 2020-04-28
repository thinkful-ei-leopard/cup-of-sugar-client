import React from 'react'
import UserContext from '../../contexts/UserContext'
import ThreadsList from './ThreadsList/ThreadsList'
import styles from './ThreadsPage.module.scss'

export default class ThreadsPage extends React.Component {

    static contextType = UserContext

    render() {
        return (
            <section className={styles.threadsPageSection}>
                <ThreadsList user={this.context.user}/>
            </section>
        )
    }
}