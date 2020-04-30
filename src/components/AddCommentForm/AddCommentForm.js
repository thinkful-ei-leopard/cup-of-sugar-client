import React, { Component } from 'react';
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

  // componentDidMount() {
  //   this._isMounted = true;
  //   this.setState({ loading: false });
  // }

  // componentWillUnmount() {
  //   this._isMounted = false;
  // }

  goBack = () => {
    this.props.history.goBack();
  };

  handleSubmit = e => {
    e.preventDefault();

    //need update state with response

    const { description } = this.state;
    const { currentPostId } = this.context;

    this.addComment(currentPostId, description);
    const { history } = this.props;
    history.goBack();
  };

  async addComment(id, description) {
    const commentReturn = await CommentsApiService.postComment(id, description);
  }

  updateField(field, value) {
    this.setState({
      [field]: value
    });
  }

  render() {
    // if (this.state.loading === true) {
    //   return <></>;
    // }

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
      </section>
    );
  }
}

export default AddCommentForm;
