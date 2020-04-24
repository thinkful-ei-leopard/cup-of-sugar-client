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
    if (user.id === comment.user_id) {
      return (
        <li className={styles.commentLi}>
          <h3 className={styles.name}>
            {comment.name} ({comment.user_name})
          </h3>
          <Button
            onClick={(e) => {
              CommentsApiService.handleCommentDelete(this.props.comment.id);
              this.props.deleteComment(this.props.comment.id);
            }}
            title="Delete"
            type="delete"
            className={styles.commentDelete}
            id={styles.delete}>
            X
          </Button>
          <p className={styles.content}>{comment.content}</p>
        </li>
      );
    }
    return (
      <li className={styles.commentLi}>
        <h3 className={styles.name}>
          {comment.name} ({comment.user_name})
        </h3>
        <p className={styles.content}>{comment.content}</p>
      </li>
    );
  }
}
