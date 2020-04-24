import React from 'react';
import PostsContext from '../../contexts/PostsContext';
import Comment from '../Comment/Comment';
import styles from './PostView.module.scss';
import cx from 'classnames';
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

export default class PostView extends React.Component {
    state = {
        comments: null
    }
    static contextType = PostsContext

    componentDidMount () {
        
    }

    componentDidUpdate() {
        console.log(this.context)
        let comments = this.context.comments.filter(comment => comment.post_id.toString() === this.props.id);
        if (this.state.comments === null) {
        this.setState({ comments: comments })}
    }

    changeCommentState = () => {
        this.setState({ comment: this.context.comments })
    }

    render() {
        console.log(this.context)
        console.log(this.state)
        const { posts, comments } = this.context
        const post = posts.find(post => post.id.toString() === this.props.id)
        // const commentsForPost = comments.filter(comment => comment.post_id.toString() === this.props.id);
        if(!post || !this.state.comments) {
            return(
                <></>
            )
        }
        let type;
        if(post.type === 'request') {
            type = 'styles.request'
        }
        if(post.type === 'offer') {
            type = 'styles.offer'
        }
    return (
      <section className={styles.section}>
        <div className={styles.postDetail}>
          <h1
            className={cx(
              post.type === 'offer' ? styles.offerStyle : styles.requestStyle,
              styles.title
            )}>
            {post.title}
          </h1>
          <p className={styles.description}>{post.description}</p>
          <p className={styles.postedBy}>
            {post.type === 'offer' ? 'Offered' : 'Requested'} by{' '}
            <span className={styles.nameHeader}>
              {post.name} ({post.user_name})
            </span>{' '}
            on{' '}
            <span className={styles.date}>
              {post.date_modified.slice(0, 10)}
            </span>
          </p>
        </div>
        <div className={styles.Comments}>
          <h2 className={styles.h3}>Comments</h2>
                <Link to='/add-comment'>
                <Button type='submit' className={styles.addCommentButton}>Add Comment</Button>
                </Link>
          <ul className={styles.ul}>
            {this.state.comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </ul>
        </div>
        <Link to="/">
          <p className={styles.dashboardLink}>Back to dashboard</p>
        </Link>
      </section>
    );
  }
}
