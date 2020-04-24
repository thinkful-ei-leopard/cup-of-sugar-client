import React from 'react';
import PostsContext from '../../contexts/PostsContext';
import Comment from '../Comment/Comment';
import styles from './PostView.module.scss';
import cx from 'classnames';
import { Link } from 'react-router-dom';

export default class PostView extends React.Component {
  static contextType = PostsContext;

  render() {
    const { posts, comments } = this.context;
    const post = posts.find((post) => post.id.toString() === this.props.id);
    const commentsForPost = comments.filter(
      (comment) => comment.post_id.toString() === this.props.id
    );

    // console.log(post.date_modified)
    // const trimDate = post.date_modified.slice(0, 10);

    if (!post) {
      return <></>;
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
          <ul className={styles.ul}>
            {commentsForPost.map((comment) => (
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
