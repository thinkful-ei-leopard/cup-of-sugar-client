import React, { Component } from 'react';
import PostsApiService from '../../services/posts-api-service';
import { Input, Label } from '../Form/Form';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import PostsContext from '../../contexts/PostsContext';
import styles from './AddPostForm.module.scss';

export class AddPost extends Component {
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

  componentDidMount() {
    this.firstInput.current.focus();
  }

  updateField(field, value) {
    this.setState({
      [field]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, description, type } = this.state;

    const data = {
      title,
      description,
      type,
    };

    this.addPost(data);
  }

  async addPost(data) {
    const postReturn = await PostsApiService.addPost(data);
    if (postReturn.error) {
      this.setState({ error: postReturn.error.message });
    } else {
      this.setState({ error: null });
    }
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/';
    history.push(destination);
  }

  firstInput = React.createRef();

  render() {
    const { error } = this.state;
    return (
      <section className={styles.AddPost}>
        <h2>Add Post</h2>
        {error ? <h3 className={styles.errorMessage}>{error}</h3> : null}
        <form
          className={styles.addPostForm}
          onSubmit={(e) => this.handleSubmit(e)}>
          {/* <Input ref={this.firstInput} /> */}
          <Label htmlFor="title" className={styles.addLabel}>
            Title:
          </Label>
          <Input
            ref={this.firstInput}
            type="text"
            name="title"
            className={cx(styles.addInput, styles.titleInput)}
            autoComplete="off"
            maxLength="60"
            onChange={(e) => this.updateField('title', e.target.value)}
            required
          />
          <div className={styles.typeGroup}>
            <div className={styles.typeContainer}>
              <Input
                type="radio"
                id="typeChoice1"
                className={styles.radioSelect}
                name="type"
                value="offer"
                onChange={(e) => this.updateField('type', e.target.value)}
                required
              />
              <Label htmlFor="typeChoice1" className={styles.radioLabel}>
                <span className={styles.offerText}>Offer</span>
              </Label>
            </div>
            <div className={styles.typeContainer}>
              <Input
                type="radio"
                id="typeChoice2"
                className={styles.radioSelect}
                name="type"
                value="request"
                onChange={(e) => this.updateField('type', e.target.value)}
                required
              />
              <Label htmlFor="typeChoice2" className={styles.radioLabel}>
                <span className={styles.requestText}>Request</span>
              </Label>
            </div>
          </div>

          <Label htmlFor="description" className={styles.addLabel}>
            Description:
          </Label>
          <textarea
            name="description"
            id="post-description"
            className={cx(styles.addInput, styles.descriptionInput)}
            rows="10"
            maxLength="500"
            required
            onChange={(e) =>
              this.updateField('description', e.target.value)
            }></textarea>
          <button type="submit" className="Button">
            <span className="buttonText">Submit</span>
          </button>
        </form>
        <Link to="/">
          <p className={styles.dashboardLink}>Back to dashboard</p>
        </Link>
      </section>
    );
  }
}

export default AddPost;
