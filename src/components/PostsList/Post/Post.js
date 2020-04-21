import React from 'react';
import styles from './Post.module.scss';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button'

export default class Post extends React.Component {
  render() {
    const { post } = this.props;
    console.log(post);
    return (
      <Link to={`/post/${post.id}`}>
        <li className={styles.Post}>
          <span className={cx(styles.postTitle, styles.postEl)}>
            {post.title}
          </span>
          <span className={cx(styles.postType, styles.postEl)}>{post.type}</span>
          <span className={cx(styles.postComments, styles.postEl)}>
            {post.comments}
          </span>
          <span className={cx(styles.postUserName, styles.postEl)}>
            {post.user_name}
          </span>
          <span className={cx(styles.postDate, styles.postEl)}>
            {post.date_modified.slice(0, 10)}
          </span>
        </li>
      </Link>
    );
  }
}
