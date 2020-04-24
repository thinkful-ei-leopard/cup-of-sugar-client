import React from 'react'
import PostsContext from '../../contexts/PostsContext'
import Comment from '../Comment/Comment'
import styles from './PostView.module.scss';
import cx from 'classnames';
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

export default class PostView extends React.Component {
    static contextType = PostsContext

    render() {
        const { posts, comments } = this.context
        const post = posts.find(post => post.id.toString() === this.props.id)
        const commentsForPost = comments.filter(comment => comment.post_id.toString() === this.props.id);
        if(!post) {
            return(
                <></>
            )
        }
        let type;
        console.log(post.type)
        if(post.type === 'request') {
            type = 'styles.request'
        }
        if(post.type === 'offer') {
            type = 'styles.offer'
        }
        console.log(type)
        return (
            <section className={styles.section}>
                <h1 className={cx(styles.h1, post.type === 'offer' ? styles.offerStyle : styles.requestStyle)}>{post.type}</h1>
                <span className={styles.span}>From</span>
                <h2 className={styles.name}> {post.name} ({post.user_name})</h2>
                <p className={styles.date}>{post.date_modified.slice(0, 10)}</p>
                <h3 className={cx (post.type === 'offer' ? styles.offerStyle : styles.requestStyle, styles.title)}>{post.title}</h3>
                <p className={styles.description}>{post.description}</p>
                <h3 className={styles.h3}>Comments</h3>
                <Link to='/add-comment'>
                <Button type='submit' className={styles.addCommentButton}>Add Comment</Button>
                </Link>
                <ul className={styles.ul}>
                    {commentsForPost.map(comment => <Comment key={comment.id} comment={comment} />)}
                </ul>
            </section>
        )
    }
}