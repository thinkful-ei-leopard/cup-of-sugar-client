import React, { Component } from 'react';
import cx from 'classnames';
import { Label } from '../Form/Form';
import Button from '../Button/Button';
import CommentsApiService from '../../services/comments-api-service';
import PostsContext from '../../contexts/PostsContext';
import styles from './AddCommentForm.module.scss';
import { Link } from 'react-router-dom';

export class AddCommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      loading: true
    };
  }

  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  static contextType = PostsContext;

  goBack = () => {
    this.props.history.goBack();
  };

  handleSubmit = e => {
    e.preventDefault();

    const { description } = this.state;
    const { currentPostId } = this.context;

    this.addComment(currentPostId, description);
  };

  async addComment(id, description) {
    // eslint-disable-next-line no-unused-vars
    const commentReturn = await CommentsApiService.postComment(id, description);
    const { history } = this.props;
    history.goBack();
  }

  updateField(field, value) {
    this.setState({
      [field]: value
    });
  }

  render() {
    return (
      <section className={cx(styles.AddComment, 'fadeIn')}>
        <div className={styles.addCommentContainer}>
          <form className={styles.addCommentForm} onSubmit={this.handleSubmit}>
            <Label
              className={styles.addCommentLabel}
              htmlFor="comment-description">
              Add Comment:
            </Label>
            <textarea
              name="content"
              id="comment-description"
              className={styles.contentInput}
              placeholder="I have a hammer you can borrow! I'll message you with details."
              rows="10"
              maxLength="500"
              required
              onChange={e =>
                this.updateField('description', e.target.value)
              }></textarea>
            <Button className={styles.submitAddComment} type="submit">
              <div className="buttonText">Submit</div>
            </Button>
          </form>
          <Button id={styles.backToPostButton}>
            <p onClick={this.goBack}>Back to post</p>
          </Button>
          <Link to="/">
            <p className={styles.dashboardLink}>Back to dashboard</p>
          </Link>
        </div>
      </section>
    );
  }
}

export default AddCommentForm;
