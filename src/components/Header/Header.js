import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import styles from './Header.module.scss';

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div className="logoutDiv">
        <Link to="/" className="homeLink">
          Cup of Sugar
        </Link>
        <p>
          Welcome to the neighborhood,
          <span className="userSpan">{this.context.user.name}</span>!
        </p>
        <nav className="logoutNav">
          <Link
            onClick={this.handleLogoutClick}
            to="/login"
            className="logoutLink">
            Logout
          </Link>
        </nav>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <nav>
        <Link to="/login" className={styles.loginLink}>
          Login
        </Link>{' '}
        <Link to="/register" className={styles.signUpLink}>
          Sign up
        </Link>
      </nav>
    );
  }

  render() {
    return (
      <header className={styles.Header}>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header;
