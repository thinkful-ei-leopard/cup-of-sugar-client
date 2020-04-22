import React, { Component } from 'react';
import cx from 'classnames';
import Button from '../Button/Button';
import PostsList from '../PostsList/PostsList';
import styles from './Dashboard.module.scss';
import UserContext from '../../contexts/UserContext';

// TODO --> wrap button in Link to add-post view

export class Dashboard extends Component {
  static contextType = UserContext;

  render() {
    return (
      <section className={styles.Dashboard}>
        <p className={styles.welcomeMessage}>
          Welcome to the neighborhood,
          <span className={styles.userSpan}> {this.context.user.name}</span>!
        </p>

        <Button className={cx(styles.Button, styles.addPostButton)}>
          <span className={styles.buttonText}>Add Post</span>
        </Button>
        <h2 className={styles.bulletinHeader}>Community Bulletin</h2>
        <div className={styles.bulletinContainer}>
          <header className={styles.bulletinColumnHeaders}>
            <span className={cx(styles.columnHeader, styles.titleHeader)}>
              Title
            </span>
            <span className={cx(styles.columnHeader, styles.typeHeader)}>
              Type
            </span>
            <span className={cx(styles.columnHeader, styles.commentsHeader)}># Comments</span>
            <span className={cx(styles.columnHeader, styles.postedByHeader)}>
              Posted By
            </span>
            <span className={cx(styles.columnHeader, styles.datePostedHeader)}>
              Date <span className={styles.posted}>Posted</span>
            </span>
          </header>
          <PostsList />
        </div>
      </section>
    );
  }
}

export default Dashboard;
