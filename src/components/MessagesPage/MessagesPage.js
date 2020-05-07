import React from 'react';
import cx from 'classnames';
import MessageList from './MessageList/MessageList';
import styles from './MessagesPage.module.scss';
import MessageForm from './MessageForm/MessageForm';
import UserContext from '../../contexts/UserContext';

export default class MessagesPage extends React.Component {
  static contextType = UserContext;

  state = { loading: true };

  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  goBack = () => {
    this.props.history.goBack();
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading === true) {
      return <> </>;
    }

    return (
      <section className={cx(styles.MessagesPage, styles.fadeIn)}>
        <div className={styles.messagesContainer}>
          <MessageList user={this.context.user} />
          <MessageForm user={this.context.user} />
          <button onClick={this.goBack} className={styles.backButton}>
            Back
          </button>
        </div>
      </section>
    );
  }
}
