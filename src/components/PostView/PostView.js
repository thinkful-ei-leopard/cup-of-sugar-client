import React from 'react';
import UserContext from '../../contexts/UserContext';
import PostsContext from '../../contexts/PostsContext';
import Comment from '../CommentList/Comment/Comment';
import styles from './PostView.module.scss';
import cx from 'classnames';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import PostsApiService from '../../services/posts-api-service';
import Confirm from '../Confirm/Confirm';
import CommentList from '../CommentList/CommentList';
import MessageUser from '../../components/MessageUser/MessageUser'

import '@reach/dialog/styles.css';

export default class PostView extends React.Component {
  state = {
    comments: null,
    edit: false
  };

  static contextType = UserContext

  componentDidUpdate() {
    if (this.state.comments === null) {
      this.setState({ comments: this.props.comments });
    }
  }

  handleDelete = () => {
    const history = this.props.history;
    history.goBack();
  };

  handleEdit = () => {
    this.setState({
      edit: !this.state.edit ? true : false
    });
  };

  handleSubmit = async (e, id, pContext) => {
    e.preventDefault();

    const { newTitle, newDescription } = e.target;
    const edits = {
      title: newTitle.value,
      description: newDescription.value
    };
    try {
      let editedPost = await PostsApiService.editPost(id, edits);

      pContext.editPost(id, editedPost);
    } catch (error) {
      console.error(error.message);
    }

    this.setState({
      edit: false
    });
  };

  // toggle between static post or edit mode post

  displayPost(post, deleteButton, pContext) {
    if (this.state.edit) {
      return (
        <form
          className={styles.editForm}
          onSubmit={e => this.handleSubmit(e, post.id, pContext)}>
          <h1
            className={cx(
              post.type === 'offer' ? styles.offerStyle : styles.requestStyle,
              styles.title
            )}>
            <textarea
              rows="30"
              className={cx(
                post.type === 'offer' ? styles.offerStyle : styles.requestStyle,
                styles.titleInput
              )}
              name="newTitle"
              defaultValue={post.title}
            />
          </h1>
          <p className={styles.description}>
            <textarea
              className={styles.descriptionInput}
              name="newDescription"
              defaultValue={post.description}
            />
          </p>
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
          <div className={styles.editConfirmGroup}>
            <Button className={styles.submitEditButton} type="submit">
              {' '}
              <span className={styles.submitEditText}>Submit</span>
            </Button>
            <button
              className={styles.cancelEditButton}
              onClick={() => this.setState({ edit: !this.state.edit })}>
              cancel
            </button>
          </div>
        </form>
      );
    }
    return (
      <>
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
          <span className={styles.date}>{post.date_modified.slice(0, 10)}</span>
          <MessageUser
            user={this.context.user}
            neighborId={post.user_id}
            text={'message'}
          />
        </p>
        <button className={styles.editButton} onClick={this.handleEdit}>
          <img
            className={styles.editPostIcon}
            src={require('../../images/pencil.svg')}
            alt="edit post icon"
          />
        </button>
        {deleteButton}
        <Confirm title="Mark Resolved" description="Are you sure?">
                {confirm => (
                  <Button
                    onClick={confirm(() => {
                      PostsApiService.editPost(post.id, {
                        title: post.title,
                        description: post.description,
                        resolved: true
                      });
                      this.handleDelete();
                    })}
                    title="Resolved"
                    className={styles.deletePostButton}
                    id={styles.deletePostButton}>
                    resolve
                  </Button>
                )}
              </Confirm>
      </>
    );
  }

  // Render delete button or delete confirmation button

  render() {
    const { posts, comments } = this.props;
    const post = posts.find(post => post.id.toString() === this.props.id);
    const commentsForPost = comments.filter(
      comment => comment.post_id.toString() === this.props.id
    );
    if (!post || !this.state.comments) {
      return <></>;
    }
    let deleteButton = (
      <UserContext.Consumer>
        {({ user }) =>
          user.id === post.user_id ? (
            <div>

              <Confirm title="Delete" description="Are you sure?">
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
              <Confirm title="Mark Resolved" description="Are you sure?">
              {(confirm) => (
                <Button
                  onClick={confirm(() => {
                    PostsApiService.editPost(
                      post.id,
                      {
                        title: post.title,
                        description: post.description,
                        resolved: true
                      }
                    );
                    this.handleDelete();
                  })}
                  title="Resolved"
                  className={styles.deletePostButton}
                  id={styles.deletePostButton}>
                  resolve
                </Button>
              )}
              </Confirm>
              <Button
                onClick={this.handleEdit}
              >
                Edit
              </Button>
            </div>
          ) : (
            <Button
              type="delete"
              aria-hidden="true"
              className={styles.deletePostButton}
              id={styles.placeholderInvisibleButton}>
              X
            </Button>
          )
        }
      </UserContext.Consumer>
    );

    // entirety of Postview

    return (
      <section className={styles.PostView}>
        <PostsContext.Consumer>
          {pContext => (
            <div className={styles.postDetail}>
              {this.displayPost(post, deleteButton, pContext)}
            </div>
          )}
        </PostsContext.Consumer>
        <div className={styles.Comments}>
          <h2 className={styles.commentsHeader}>Comments</h2>
          <CommentList
            deleteComment={this.props.deleteComment}
            commentsForPost={commentsForPost}
            zip={post.zip}
          />
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
