import React from 'react';
import styles from './Post.module.scss';

export default class Post extends React.Component {
  render() {
    return (
      <li>
        <span className={styles.postTitle}>{this.props.post.title}</span>
        <span className={styles.postType}>{this.props.post.type}</span>
        <span className={styles.postComments}>{this.props.post.comments}</span>
        <span className={styles.postUserName}>{this.props.post.user_name}</span>
        <span className={styles.postDate}>{this.props.post.date_modified}</span>
      </li>
    );
  }
}
