import React from 'react';
import UserContext from '../../contexts/UserContext';
import Comment from '../Comment/Comment';
import styles from './PostView.module.scss';
import cx from 'classnames';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import PostsApiService from '../../services/posts-api-service';
import Confirm from '../Confirm/Confirm';
import '@reach/dialog/styles.css';

export default class PostView extends React.Component {
  state = {
    comments: null,
  };

  static contextType = UserContext;
  componentDidUpdate() {
    if (this.state.comments === null) {
      this.setState({ comments: this.props.comments });
    }
  }

  handleDelete = () => {
    const history = this.props.history;
    console.log(history);
    history.goBack();
  };

  render() {
    const user = this.context.user;
    const { posts, comments } = this.props;
    const post = posts.find((post) => post.id.toString() === this.props.id);
    const commentsForPost = comments.filter(
      (comment) => comment.post_id.toString() === this.props.id
    );
    if (!post || !this.state.comments) {
      return <></>;
    }
    let type;
    if (post.type === 'request') {
      type = 'styles.request';
    }
    if (post.type === 'offer') {
      type = 'styles.offer';
    }

    // onClick={confirm(() => {
    //   PostsApiService.deletePost(post.id);
    //   this.props.deletePost(post.id);
    // })}

    // onClick={confirm() => {
    //   PostsApiService.deletePost(post.id);
    //   this.handleDelete();
    // }}

    let deleteButton =
      user.id === post.user_id ? (
        <Confirm title="Confirm" description="Are you sure?">
          {(confirm) => (
            <Button
              onClick={confirm(() => {
                PostsApiService.deletePost(post.id);
                this.handleDelete();
              })}
              type="delete"
              title="Delete"
              className={styles.deletePostButton}
              id={styles.deletePostButton}>
              delete
            </Button>
          )}
        </Confirm>
      ) : (
        <Button
          type="delete"
          aria-hidden="true"
          className={styles.deletePostButton}
          id={styles.placeholderInvisibleButton}>
          X
        </Button>
      );

    return (
      <section className={styles.PostView}>
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
          {deleteButton}
        </div>
        <div className={styles.Comments}>
          <h2 className={styles.commentsHeader}>Comments</h2>
          <ul className={styles.ul}>
            {commentsForPost.map((comment) => (
              <Comment
                key={comment.id}
                comment={comment}
                deleteComment={this.props.deleteComment}
              />
            ))}
          </ul>
          <Link to="/add-comment">
            <Button type="submit" className={styles.addCommentButton}>
              <span className="buttonText">Add Comment</span>
            </Button>
          </Link>
        </div>
        <Link to="/">
          <p className={styles.dashboardLink}>Back to dashboard</p>
        </Link>
      </section>
    );
  }
}
