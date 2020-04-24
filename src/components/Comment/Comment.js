import React from 'react';
import Button from '../Button/Button';
import UserContext from '../../contexts/UserContext';
import styles from './Comment.module.scss';
import CommentsApiService from '../../services/comments-api-service';

export default class Comment extends React.Component {
  static contextType = UserContext;

  render() {
    const user = this.context.user;
    const comment = this.props.comment;

    let deleteButton =
      user.id === comment.user_id ? (
        <Button
          onClick={(e) => {
            CommentsApiService.handleCommentDelete(
              this.props.comment.id,
              this.props.comment.post_id
            );
            this.props.deleteComment(this.props.comment.id);
          }}
          title="Delete"
          type="delete"
          id={styles.deleteCommentButton}>
          delete
        </Button>
      ) : null;

    return (
      <li className={styles.commentLi}>
        <div className={styles.commentDeleteContainer}>
          <p className={styles.content}>
            {comment.content} --{' '}
            <span className={styles.commenterName}>
              {comment.name} ({comment.user_name})
            </span>{deleteButton}
          </p>
          
        </div>
      </li>
    );
  }
}
