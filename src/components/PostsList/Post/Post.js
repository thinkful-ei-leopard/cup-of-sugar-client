import React from 'react';
import styles from './Post.module.scss';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button'

export default class Post extends React.Component {
  render() {
    return (
      <Link to={`/post/${this.props.post.id}`}>
        <li>
          <span className={styles.postTitle}>{this.props.post.title}</span>
          <span className={styles.postType}>{this.props.post.type}</span>
          <span className={styles.postComments}>{this.props.post.comments}</span>
          <span className={styles.postUserName}>{this.props.post.user_name}</span>
          <span className={styles.postDate}>{this.props.post.date_modified}</span>
          <Button type='delete'>Delete</ Button>
      </li>
      </Link>
    );
  }
}
