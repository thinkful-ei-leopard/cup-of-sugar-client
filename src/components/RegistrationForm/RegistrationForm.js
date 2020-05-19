import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Required, Label } from '../Form/Form';
import AuthApiService from '../../services/auth-api-service';
import cx from 'classnames';
import LoadingDots from '../LoadingDots/LoadingDots';
import styles from './RegistrationForm.module.scss';
import { openUploadWidget } from '../../services/CloudinaryService';

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = {
    error: null,
    imgSrc: null,
    isRegistering: false
  };

  firstInput = React.createRef();

  beginUpload = e => {
    e.preventDefault();

    const uploadOptions = {
      cloudName: 'mmpr',
      uploadPreset: 'upload',
      resourceType: 'image',
      multiple: false,
      theme: 'minimal',
      maxImageFileSize: 1500000 //1.5MB
    };

    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        if (photos.event === 'success') {
          this.setState({
            imgSrc: photos.info.secure_url
          });
        }
      } else {
      }
    });
  };

  displayPreview() {
    let image;

    if (this.state.imgSrc === null) {
      image = (
        <img
          className={styles.defaultImage}
          src="https://image.flaticon.com/icons/svg/166/166277.svg"
          alt="default"
        />
      );
    } else if (this.state.imgSrc) {
      image = (
        <img
          className={styles.uploadedImage}
          src={this.state.imgSrc}
          alt="Uploaded Avatar"
        />
      );
    }
    return image;
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, username, password, zip, email } = e.target;

    let img_src = '';
    let img_alt = '';

    if (this.state.imgSrc) {
      img_src = this.state.imgSrc;
      img_alt = `${username.value} Profile Picture`;
    } else if (!this.state.imgSrc) {
      img_src =
        'https://res.cloudinary.com/mmpr/image/upload/v1588908186/user_knxeok.png';
      img_alt = 'Default Profile';
    }

    AuthApiService.postUser({
      name: name.value,
      username: username.value,
      password: password.value,
      zip: zip.value,
      email: email.value,
      img_src,
      img_alt
    })
      .then(user => {
        name.value = '';
        username.value = '';
        password.value = '';
        zip.value = '';
        email.value = '';
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  componentDidMount() {
    this.firstInput.current.focus();
  }

  render() {
    const { error } = this.state;
    return (
      <form
        onSubmit={e => {
          this.setState({ isRegistering: true });
          this.handleSubmit(e);
        }}
        className={styles.RegForm}
        autoComplete="off">
        <div role="alert">{error ? <p>{error}</p> : null}</div>
        <h2 className={styles.regHeader}>Sign Up</h2>
        <div className={styles.inputContainer}>
          <div className={styles.regDiv}>
            <Label
              htmlFor="registration-name-input"
              className={styles.regLabel}>
              <span className={styles.fullInputPhrase}>Enter your</span> name:
              <Required />
            </Label>
            <Input
              ref={this.firstInput}
              id="registration-name-input"
              name="name"
              placeholder="John Smith"
              className={styles.regInput}
              required
              maxLength="20"
              autoComplete="off"
            />
          </div>
          <div className={styles.regDiv}>
            <Label
              htmlFor="registration-username-input"
              className={styles.regLabel}>
              <span className={styles.fullInputPhrase}>Create a</span> username:
              <Required />
            </Label>
            <Input
              id="registration-username-input"
              name="username"
              placeholder="Morty123"
              className={styles.regInput}
              required
              maxLength="20"
              autoComplete="off"
            />
          </div>
          <div className={styles.regDiv}>
            <Label
              htmlFor="registration-email-input"
              className={styles.regLabel}>
              <span className={styles.fullInputPhrase}>Enter your</span> email:
              <Required />
            </Label>
            <Input
              id="registration-email-input"
              name="email"
              type="email"
              placeholder="email@domain.com"
              className={styles.regInput}
              required
              autoComplete="off"
            />
          </div>
          <div className={styles.regDiv}>
            <Label
              htmlFor="registration-password-input"
              className={styles.regLabel}>
              <span className={styles.fullInputPhrase}>Choose a</span> password:
              <Required />
            </Label>
            <Input
              id="registration-password-input"
              name="password"
              title="Password must be at least 8 characters long with 1 number and 1 special character"
              type="password"
              placeholder="8dsfah$!fdas"
              className={styles.regInput}
              required
              autoComplete="off"
            />
          </div>
          <div className={styles.regDiv}>
            <Label htmlFor="registration-zip-input" className={styles.regLabel}>
              <span className={styles.fullInputPhrase}>Enter your</span>{' '}
              zipcode:
              <Required />
            </Label>
            <Input
              id="registration-zip-input"
              name="zip"
              placeholder="00999"
              type="number"
              className={styles.regInput}
              required
              autoComplete="off"
            />
          </div>
          <div className={styles.uploadContainer}>
            <button
              className={styles.uploadButton}
              onClick={e => this.beginUpload(e)}>
              <span className={styles.uploadText}>Upload Avatar</span>
            </button>
            {this.displayPreview()}
          </div>
        </div>
        <footer className="reg-footer">
          <button
            type="submit"
            className={cx(
              styles.registrationButton,
              this.state.isRegistering
                ? styles.isRegistering
                : styles.notRegistering
            )}>
            {this.state.isRegistering ? (
              <LoadingDots />
            ) : (
              <span className="buttonText">Submit</span>
            )}
          </button>{' '}
        </footer>
        <Link to="/login" className={styles.regLink}>
          Already have an account?
        </Link>
      </form>
    );
  }
}

export default RegistrationForm;
