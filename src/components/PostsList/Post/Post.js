import React from 'react';
import styles from './Post.module.scss';
import cx from 'classnames';
import { Link } from 'react-router-dom';

export default class Post extends React.Component {
  render() {
    const { post } = this.props;

    let title =
      post.title.length < 42 ? post.title : post.title.slice(0, 35) + '...';

    return (
      <Link to={`/post/${post.id}`}>
        <li className={styles.Post}>
          <div className={styles.typeCircle}></div>

          <span
            className={cx(
              styles.postTitle,
              styles.postEl,
              post.type === 'offer' ? styles.offerStyle : styles.requestStyle
            )}>
            {title}
          </span>
          <span className={cx(styles.postType, styles.postEl)}>
            {post.type}
          </span>
          <span className={cx(styles.postComments, styles.postEl)}>
            {post.comments}
          </span>
          <span className={cx(styles.postUserName, styles.postEl)}>
            {post.name}
          </span>
          <span className={cx(styles.postDateFull, styles.postEl)}>
            {post.date_modified.slice(0, 10)}
          </span>
          <span className={cx(styles.postDateTrim, styles.postEl)}>
            {post.date_modified.slice(5, 10)}
          </span>
        </li>
      </Link>
    );
  }
}
