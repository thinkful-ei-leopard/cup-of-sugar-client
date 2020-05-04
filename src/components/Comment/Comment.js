import React from 'react';
import Button from '../Button/Button';
import UserContext from '../../contexts/UserContext';
import styles from './Comment.module.scss';
import CommentsApiService from '../../services/comments-api-service';
import Confirm from '../Confirm/Confirm';
import '@reach/dialog/styles.css';

export default class Comment extends React.Component {
  static contextType = UserContext;

  render() {
    const user = this.context.user;
    const comment = this.props.comment;

    let deleteButton =
      user.id === comment.user_id ? (
        <Confirm title="Confirm" description="Are you sure?">
          {(confirm) => (
            <Button
              onClick={confirm(() => {
                CommentsApiService.handleCommentDelete(
                  this.props.comment.id,
                  this.props.comment.post_id
                );
                this.props.deleteComment(this.props.comment.id);
              })}
              type="delete"
              title="Delete"
              className={styles.deletePostButton}
              id={styles.deleteCommentButton}>
              delete
            </Button>
          )}
        </Confirm>
      ) : null;

    return (
      <li className={styles.commentLi}>
        <div className={styles.commentDeleteContainer}>
          <p className={styles.content}>
            {comment.content} <br />
            {' '}
            <span className={styles.commenterName}>
              {comment.name} ({comment.user_name})
            </span>{' '}
            <span className={styles.datePosted}>
              {comment.date_modified.slice(0, 10)}
            </span>
          </p>
          {deleteButton}
        </div>
      </li>
    );
  }
}
