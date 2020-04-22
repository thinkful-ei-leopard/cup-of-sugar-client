import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Required, Label } from '../Form/Form';
import AuthApiService from '../../services/auth-api-service';
import Button from '../Button/Button';
import styles from './RegistrationForm.module.scss';

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = { error: null };

  firstInput = React.createRef();

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { name, username, password, zip, email } = ev.target;
    AuthApiService.postUser({
      name: name.value,
      username: username.value,
      password: password.value,
      zip: zip.value,
      email: email.value,
    })
      .then((user) => {
        name.value = '';
        username.value = '';
        password.value = '';
        zip.value = '';
        email.value = '';
        this.props.onRegistrationSuccess();
      })
      .catch((res) => {
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
        onSubmit={this.handleSubmit}
        className={styles.RegForm}
        autoComplete="off">
        <div role="alert">{error && <p>{error}</p>}</div>
        <h3 className={styles.regHeader}>Sign Up</h3>
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
              className={styles.regInput}
              required
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
              className={styles.regInput}
              required
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
              className={styles.regInput}
              required
              autoComplete="new-off"
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
              type="password"
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
              type="number"
              className={styles.regInput}
              required
              autoComplete="new-off"
            />
          </div>
        </div>
        <footer className="reg-footer">
          <Button type="submit" className={styles.regButton}>
            <span className="buttonText">Submit</span>
          </Button>{' '}
        </footer>
        <Link to="/login" className="regLink">
          Already have an account?
        </Link>
      </form>
    );
  }
}

export default RegistrationForm;
