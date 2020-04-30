import React from 'react';
import Message from './Message/Message';
import ThreadsContext from '../../../contexts/ThreadsContext';
import styles from './MessageList.module.scss';

export default class MessageList extends React.Component {
  static contextType = ThreadsContext;

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.el.scrollIntoView({ behavior: 'smooth' });
  }

  handleMessageDelete = message => {
    console.log(message);
    this.context.deleteMessage(message);
  };

  render() {
    const { messages, currentThread } = this.context;

    // if (!currentThread) {
    //   return <> </>;
    // }

    return (
      <>
        <h2 className={styles.messagesWithHeader}>Messages</h2>
        <ul className={styles.messageListUl}>
          {messages.map(message => (
            <Message
              key={message.id}
              message={message}
              currentThread={currentThread}
              handleMessageDelete={this.handleMessageDelete}
            />
          ))}
          <div
            ref={el => {
              this.el = el;
            }}
          />
        </ul>
      </>
    );
  }
}
