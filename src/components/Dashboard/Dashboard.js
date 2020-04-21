import React, { Component } from 'react';
import cx from 'classnames';
import Button from '../Button/Button';
import PostsList from '../PostsList/PostsList';
import styles from './Dashboard.module.scss';

// TODO --> wrap button in Link to add-post view

export class Dashboard extends Component {
  render() {
    return (
      <section className={styles.Dashboard}>
        {/* <h2>Cup of Sugar</h2> */}

        <Button className={styles.Button}>
          <span className={styles.buttonText}>Add Post</span>
        </Button>
        <div className={styles.bulletinContainer}>
          <header className={styles.bulletinColumnHeaders}>
            <span className={cx(styles.columnHeader, styles.titleHeader)}>
              Title
            </span>
            <span className={cx(styles.columnHeader, styles.typeHeader)}>Type</span>
            {/* <span className={cx(styles.columnHeader)}># Comments</span> */}
            <span className={cx(styles.columnHeader, styles.postedByHeader)}>Posted By</span>
            <span className={cx(styles.columnHeader, styles.datePostedHeader)}>
              Date Posted
            </span>
          </header>
          <PostsList />
        </div>
      </section>
    );
  }
}

export default Dashboard;
