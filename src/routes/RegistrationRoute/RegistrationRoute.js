import React, { Component } from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationRoute.module.scss';
import WelcomeDisplay from '../../components/WelcomeDisplay/WelcomeDisplay';

class RegistrationRoute extends Component {
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

  handleRegistrationSuccess = () => {
    const { history } = this.props;
    history.push('/login');
  };

  render() {
    return (
      <section className={styles.registrationSection}>
        <div className={styles.registrationContainer}>
          <WelcomeDisplay />
          <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess} onLoginSuccess={this.handleLoginSuccess}
          />
        </div>
      </section>
    );
  }
}

export default RegistrationRoute;
