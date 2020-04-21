import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './LoginRoute.module.scss';

class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/';
    history.push(destination);
  };

  render() {
    return (
      <section className={styles.loginSection}>
        <h1 className={styles.cupOfSugarHeader}>Cup of Sugar</h1>
        <p className={styles.tagline}>When you need a helping hand.</p>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </section>
    );
  }
}

export default LoginRoute;
