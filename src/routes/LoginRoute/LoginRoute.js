import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './LoginRoute.module.scss';
import WelcomeDisplay from '../../components/WelcomeDisplay/WelcomeDisplay';

class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/';
    history.push(destination);
  };

  render() {
    return (
      <section className={styles.loginSection}>
        <div className={styles.loginContainer}>
          <WelcomeDisplay />
          <LoginForm onLoginSuccess={this.handleLoginSuccess} />
        </div>
      </section>
    );
  }
}

export default LoginRoute;
