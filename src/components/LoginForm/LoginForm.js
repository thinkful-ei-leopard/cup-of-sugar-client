import React, { Component } from 'react';
import { Input, Label } from '../Form/Form';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../contexts/UserContext';
import styles from './LoginForm.module.scss';
import LoadingDots from '../LoadingDots/LoadingDots';
import cx from 'classnames';

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  static contextType = UserContext;

  state = { error: null, isLoggingIn: false };

  firstInput = React.createRef();

  handleSubmit = ev => {
    ev.preventDefault();
    const { username, password } = ev.target;
    this.context.setLoading();

    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    })
      .then(res => {
        username.value = '';
        password.value = '';
        this.context.processLogin(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  componentDidMount() {
    this.firstInput.current.focus();
    this.context.clearLoading();
  }

  componentWillUnmount() {
    this.context.clearLoading();
  }

  render() {
    const { error } = this.state;

    return (
      <>
        {this.context.isLoading && this.state.error === null ? (
          <div id="loader"></div>
        ) : (
          <form
            className={styles.LoginForm}
            onSubmit={e => {
              this.setState({ isLoggingIn: true });
              this.handleSubmit(e);
            }}>
            <div role="alert">
              {error && (
                <p className={styles.errorMessage}>
                  Incorrect Username or Password
                </p>
              )}
            </div>
            <div className={styles.inputContainer}>
              <div className={styles.userNameDiv}>
                <h2 className={styles.loginHeader}>Log In</h2>
                <Label
                  htmlFor="login-username-input"
                  className={styles.loginLabel}>
                  Username:
                </Label>
                <Input
                  ref={this.firstInput}
                  id="login-username-input"
                  name="username"
                  className={styles.loginInput}
                  autoComplete="off"
                  defaultValue="Guest"
                  required
                />
              </div>
              <div className={styles.passwordDiv}>
                <Label
                  htmlFor="login-password-input"
                  className={styles.loginLabel}>
                  Password:
                </Label>
                <Input
                  id="login-password-input"
                  name="password"
                  type="password"
                  className={styles.loginInput}
                  defaultValue="GuestPassword1!"
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <button
              className={cx(
                styles.loginButton,
                this.state.isLoggingIn
                  ? styles.isLoggingIn
                  : styles.notLoggingIn
              )}
              type="submit"
              disabled={this.state.isLoggingIn}>
              {this.state.isLoggingIn ? (
                <LoadingDots />
              ) : (
                <span className="buttonText">Login</span>
              )}
            </button>
            <p className={cx(styles.guestLogin)}>
              For guest login use default credentials
            </p>
          </form>
        )}
      </>
    );
  }
}

export default LoginForm;
