import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import Button from '../Button/Button';
import PostsList from '../PostsList/PostsList';
import styles from './Dashboard.module.scss';
import UserContext from '../../contexts/UserContext';

export class Dashboard extends Component {
  static contextType = UserContext;

  render() {
    return (
      <section className={styles.Dashboard}>
        <p className={styles.welcomeMessage}>
          Welcome to the neighborhood,
          <span className={styles.userSpan}> {this.context.user.name}</span>!
        </p>

        <Link to="/add-post">
          <Button className={cx(styles.Button, styles.addPostButton)}>
            <span className={styles.buttonText}>Add Post</span>
          </Button>
        </Link>

        <div className={styles.bulletinHeaderContainer}>
          <div className={styles.legendContainer}>
            <div className={styles.legendUnit}>
              <div className={styles.offerSquare}></div>
              <p className={styles.legendText}>- offers</p>
            </div>
            <div className={styles.legendUnit}>
              <div className={styles.requestSquare}></div>
              <p className={styles.legendText}>- requests</p>
            </div>
          </div>

          <h2 className={styles.bulletinHeader}>Community Bulletin</h2>
        </div>
        <div className={styles.bulletinContainer}>
          <header className={styles.bulletinColumnHeaders}>
            <span className={cx(styles.columnHeader, styles.titleHeader)}>
              Title
            </span>
            <span className={cx(styles.columnHeader, styles.typeHeader)}>
              Type
            </span>
            <span className={cx(styles.columnHeader, styles.commentsHeader)}>
              # Comments
            </span>
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
