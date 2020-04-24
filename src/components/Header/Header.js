import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import styles from './Header.module.scss';

class Header extends Component {
  state = { loading: true };

  static defaultProps = {
    match: {},
    location: {},
  };

  static contextType = UserContext;

  componentDidMount() {
    this.setState({ loading: false });
  }

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div className={styles.logoutDiv}>
        <Link to="/" className={styles.homeLink}>
          Cup of Sugar
        </Link>
        <nav className="logoutNav">
          <Link
            onClick={this.handleLogoutClick}
            to="/login"
            className={styles.logoutLink}>
            Logout
          </Link>
        </nav>
      </div>
    );
  }

  renderLoginLink() {
    const { location } = this.props;
    return (
      <nav className={styles.loginDiv}>
        {location.pathname === '/register' ? (
          <Link to="/login" className={styles.loginLink}>
            Login
          </Link>
        ) : (
          <Link to="/register" className={styles.signUpLink}>
            Sign up
          </Link>
        )}
      </nav>
    );
  }

  render() {
    const { location } = this.props;
    if (this.state.loading === true) {
      return <></>;
    }

    return (
      <header
        className={
          location.pathname === '/register' || location.pathname === '/login'
            ? styles.Header
            : styles.HeaderWithUnderline
        }>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header;
