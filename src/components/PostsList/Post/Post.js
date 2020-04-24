import React from 'react';
import styles from './Post.module.scss';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import UserContext from '../../../contexts/UserContext'
import Button from '../../Button/Button'
import PostsApiService from '../../../services/posts-api-service'

export default class Post extends React.Component {

  static contextType = UserContext

  render() {
    const { post } = this.props;

    let title =
      post.title.length < 42 ? post.title : post.title.slice(0, 35) + '...';

    if(this.context.user.id === post.user_id) {
      return (
        <Link to={`/post/${post.id}`}>
          <li className={styles.Post}>
            {/* <div className={styles.typeCircle}></div> */}
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
            <Button onClick={(e) => {
              e.preventDefault()
              PostsApiService.deletePost(post.id)}
              }type='delete' title='Delete' className={styles.deletePostButton} id={styles.deletePostButton}>X</Button>
          </li>
        </Link>
      );
    }
    return (
      <Link to={`/post/${post.id}`}>
        <li className={styles.Post}>
          {/* <div className={styles.typeCircle}></div> */}

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
          <Button type='delete' className={styles.deletePostButton} id={styles.placeholderInvisibleButton}>X</Button>
        </li>
      </Link>
    );
    
  }
}
