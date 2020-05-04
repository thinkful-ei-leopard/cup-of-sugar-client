import React from 'react';
import MessageList from './MessageList/MessageList';
import styles from './MessagesPage.module.scss';
import MessageForm from './MessageForm/MessageForm';
import UserContext from '../../contexts/UserContext';

export default class MessagesPage extends React.Component {
  static contextType = UserContext;

  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <section className={styles.MessagesPage}>
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
