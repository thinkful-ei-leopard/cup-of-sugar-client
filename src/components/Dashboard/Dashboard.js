/* eslint-disable default-case */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import Button from '../Button/Button';
import PostsList from '../PostsList/PostsList';
import styles from './Dashboard.module.scss';
import UserContext from '../../contexts/UserContext';
import PostsContext from '../../contexts/PostsContext';
import SearchPosts from '../SearchPosts/SearchPosts';

import UserPostsButton from '../UserPostsButton/UserPostsButton';

export class Dashboard extends Component {
  // removing display arrow until it can be properly styled
  displayArrow = sortType => {
    switch (sortType) {
      case false:
        return (
          <img
            src={require('../../images/arrow.svg')}
            className={styles.upArrow}
            alt="up arrow"
          />
        );
      case true:
        return (
          <img
            src={require('../../images/arrow.svg')}
            className={styles.downArrow}
            alt="down arrow"
          />
        );
    }
  };

  static contextType = PostsContext;

  render() {
    return (
      <section className={styles.Dashboard}>
        {/* <div className={styles.contentWrapper}> */}
        <UserContext.Consumer>
          {({ user }) => (
            <p className={styles.welcomeMessage}>
              Welcome to the neighborhood,
              <span className={styles.userSpan}> {user.name}</span>!
            </p>
          )}
        </UserContext.Consumer>

        <Link to="/add-post">
          <Button className={cx(styles.addPostButton)}>
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
          <div className={styles.searchPostsContainer}>
            <SearchPosts className={styles.SearchPosts} />
          </div>
        </div>
        <PostsContext.Consumer>
          {context => (
            <div className={styles.bulletinContainer}>
              <header className={styles.bulletinColumnHeaders}>
                <span
                  className={cx(styles.columnHeader, styles.titleHeader)}
                  onClick={() => context.sortPostsByKey('title')}>
                  Title
                  {this.displayArrow(context.titleSort)}
                </span>
                <span
                  className={cx(styles.columnHeader, styles.typeHeader)}
                  onClick={() => context.sortPostsByKey('type')}>
                  Type
                  {this.displayArrow(context.typeSort)}
                </span>
                <span
                  className={cx(styles.columnHeader, styles.commentsHeader)}
                  onClick={() => context.sortPostsByKey('comments')}>
                  Comments
                  {this.displayArrow(context.commentsSort)}
                </span>
                <span
                  className={cx(styles.columnHeader, styles.postedByHeader)}
                  onClick={() => context.sortPostsByKey('name')}>
                  Posted By
                  {this.displayArrow(context.nameSort)}
                </span>
                <span
                  className={cx(styles.columnHeader, styles.datePostedHeader)}
                  onClick={() => context.sortPostsByKey('date')}>
                  Date <span className={styles.posted}>Posted</span>
                  {this.displayArrow(context.dateSort)}
                </span>
              </header>
              <PostsList deletePost={this.props.deletePost} />
            </div>
          )}
        </PostsContext.Consumer>
        <UserContext.Consumer>
          {({ user }) => <UserPostsButton user={user} />}
        </UserContext.Consumer>
        {/* </div> */}
      </section>
    );
  }
}

export default Dashboard;
