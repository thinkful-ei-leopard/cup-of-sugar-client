import React from 'react'
import PostsContext from '../../contexts/PostsContext'
import Comment from '../Comment/Comment'
import styles from './PostView.module.scss';

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
        return (
            <section className={styles.PostView}>
                <h1 className='postType'>{post.type}</h1>
                <h2 className='postName'>{post.name} ({post.user_name})</h2>
                <p className='postDate'>{post.date_modified}</p>
                <p className='postTitle'>{post.title}</p>
                <p className='postDescription'>{post.description}</p>
                <ul>
                    <h3>Comments</h3>
                    {commentsForPost.map(comment => <Comment key={comment.id} comment={comment}/>)}
                </ul>
            </section>
        )
    }
}