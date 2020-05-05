import React from 'react';
import Button from '../../Button/Button';
import UserContext from '../../../contexts/UserContext';
import styles from './Comment.module.scss';
import CommentsApiService from '../../../services/comments-api-service';
import Confirm from '../../Confirm/Confirm';
import '@reach/dialog/styles.css';
import ThreadsApiService from '../../../services/threads-api-service'
import { withRouter } from 'react-router-dom'
import UsersApiService from '../../../services/users-api-service'

class Comment extends React.Component {

  static contextType = UserContext;

  componentDidMount () {
    let zip = this.props.zip
    this.getUsers(zip)
    console.log(this.context.user)
  }

  async getUsers(zip) {
    let users = await UsersApiService.getUsersByZip(zip)
    this.context.setUsers(users)
  }

  redirectToThread = (threadId) => {
    this.props.history.push(`/thread/${threadId}`)
  }

  async handleThreadCreate() {
    const user = this.context.user;
    const neighborId = this.props.comment.user_id;
    let neighbor = this.context.users.find(user => user.id === neighborId)
    let threads = this.props.threads;
    let thread = {};
    if(user && neighbor) {
      thread = threads.find((thread) => (thread.user_id1 === user.id || thread.user_id2 === user.id) && (thread.user_id1 === neighbor.id || thread.user_id2 === neighbor.id))
      if (thread) {
        this.redirectToThread(thread.id)
        return
      }
    }
    let newThread = {
      user_id2: neighbor.id,
      name1: user.name,
      user_name1: user.username,
      name2: neighbor.name,
      user_name2: neighbor.user_name,
      img_src1: user.img_src,
      img_alt1: user.img_alt,
      img_src2: neighbor.img_src,
      img_alt2: neighbor.img_alt,
    };
    thread = await ThreadsApiService.addThread(newThread)
    this.redirectToThread(thread.id)
  };

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

    let messageButton = 
      user.id !== comment.user_id ? (
        <button className={styles.messageNeighborButton} type='submit' onClick={(e) => {
          e.preventDefault()
          this.handleThreadCreate()
        }}>message</button>
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
          {messageButton}
        </div>
      </li>
    );
  }
}

export default withRouter(Comment);
