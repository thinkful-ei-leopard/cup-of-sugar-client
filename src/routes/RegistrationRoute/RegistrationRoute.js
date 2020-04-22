import React, { Component } from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationRoute.module.scss';
import WelcomeDisplay from '../../components/WelcomeDisplay/WelcomeDisplay';

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
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
            onRegistrationSuccess={this.handleRegistrationSuccess}
          />
        </div>
      </section>
    );
  }
}

export default RegistrationRoute;
