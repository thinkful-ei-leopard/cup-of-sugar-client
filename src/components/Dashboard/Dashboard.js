/* eslint-disable default-case */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import Button from '../Button/Button';
import PostsList from '../PostsList/PostsList';
import styles from './Dashboard.module.scss';
import UserContext from '../../contexts/UserContext';
import PostsContext from '../../contexts/PostsContext';
import SearchPosts from '../SearchPosts/SearchPosts'

export class Dashboard extends Component {
  // removing display arrow until it can be properly styled
  // displayArrow = (sortType) => {
  //   switch(sortType) {
  //     case false:
  //       return('d')
  //     case true:
  //       return('u')
  //   }
  // }

  render() {

    return (
      <section className={styles.Dashboard}>
        {/* <div className={styles.contentWrapper}> */}
        <UserContext.Consumer>
          {({user}) => (
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
          </div>
          <PostsContext.Consumer>
            {({
                sortPosts,
                sort
              }) => (
              <div className={styles.bulletinContainer}>
              <header className={styles.bulletinColumnHeaders}>
                <span 
                  className={cx(styles.columnHeader, styles.titleHeader)}
                  onClick={() => sortPosts(title)}
                >
                  Title
                </span>
                {/* {this.displayArrow(titleSort)} */}
                <span 
                  className={cx(styles.columnHeader, styles.typeHeader)}
                  onClick= {sortPostsByType}
                >
                  Type
                </span>
                {/* {this.displayArrow(typeSort)} */}
                <span 
                  className={cx(styles.columnHeader, styles.commentsHeader)}
                  onClick={sortPostsByComments}
                >
                  # Comments
                </span>
                {/* {this.displayArrow(commentsSort)} */}
                <span 
                  className={cx(styles.columnHeader, styles.postedByHeader)}
                  onClick={sortPostsByName}  
                >
                  Posted By
                </span>
                {/* {this.displayArrow(nameSort)} */}
                <span 
                  className={cx(styles.columnHeader, styles.datePostedHeader)}
                  onClick={sortPostsByDate}  
                >
                  Date <span className={styles.posted}>Posted</span>
                </span>
                {/* {this.displayArrow(dateSort)} */}
              </header>
              <PostsList deletePost={this.props.deletePost} />
            </div>
            )}
          </PostsContext.Consumer>
        {/* </div> */}
      </section>
    );
  }
}

export default Dashboard;
