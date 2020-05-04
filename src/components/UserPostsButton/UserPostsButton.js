import React, { Component } from 'react';
import PostsContext from '../../contexts/PostsContext';
import PostsApiService from '../../services/posts-api-service';
import styles from './UserPostsButton.module.scss';

export class UserPostsButton extends Component {
  static contextType = PostsContext;
  state = {
    buttonClicked: false
  };

  handleClick = async () => {
    if (!this.state.buttonClicked) {
      this.context.filterPostsByUserId(this.props.user.id);
      this.setState({
        buttonClicked: true
      });
    }

    if (this.state.buttonClicked) {
      const posts = await PostsApiService.getPosts();
      this.context.setPosts(posts);
      this.setState({
        buttonClicked: false
      });
    }
  };

  render() {
    let buttonStyle = this.state.buttonClicked
      ? styles.checked
      : styles.unchecked;

    return (
      <button
        id={styles.userPostsButton}
        onClick={() => {
          this.handleClick();
        }}>
        <span className={styles.buttonText}>View my posts</span>

        <img
          className={buttonStyle}
          src={require('../../images/checkmark.svg')}
          alt="checkmark"
        />
      </button>
    );
  }
}

export default UserPostsButton;
