import React, { Component } from 'react';
import { Input, Label } from '../Form/Form';
import Button from '../Button/Button';
import CommentsApiService from '../../services/comments-api-service';
import PostsContext from '../../contexts/PostsContext';
import styles from './AddCommentForm.module.scss';
import { Link } from 'react-router-dom';

export class AddCommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      type: '',
    };
  }

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  static contextType = PostsContext;

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { history } = this.props;
    history.goBack();
    //need update state with response
    const { content } = ev.target;
    CommentsApiService.postComment(this.context.currentPostId, content.value)
      .then((res) => {
        content.value = '';
        this.context.addComment(res);
      })
      .catch((res) => {
        console.log(res.error);
      });
  };

  updateField(field, value) {
    this.setState({
      [field]: value,
    });
  }

  render() {
    return (
      <section className={styles.AddComment}>
        <form className={styles.addCommentForm} onSubmit={this.handleSubmit}>
          <Label
            className={styles.addCommentLabel}
            htmlFor="add-comment-content">
            Add Comment:
          </Label>
          <textarea
            name="content"
            id="post-description"
            className={styles.contentInput}
            rows="10"
            maxLength="500"
            required
            onChange={(e) =>
              this.updateField('description', e.target.value)
            }></textarea>
          <Button className={styles.submitAddComment} type="submit">
            <div className="buttonText">Submit</div>
          </Button>
        </form>
        <Link to="/">
          <p className={styles.dashboardLink}>Back to dashboard</p>
        </Link>
      </section>
    );
  }
}

export default AddCommentForm;
