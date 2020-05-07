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

  async scrollToBottom() {
    if (this.el) {
      await this.el.scrollIntoView({ behavior: 'smooth' });
    } else {
      return;
    }
  }

  handleMessageDelete = message => {
    this.context.deleteMessage(message);
  };

  render() {
    const { messages, currentThread } = this.context;
    let name,
      user_name,
      img_src,
      img_alt = '';
    if (currentThread) {
      if (currentThread.user_id1 === this.props.user.id) {
        name = currentThread.name2;
        user_name = currentThread.user_name2;
        img_src = currentThread.img_src2;
        img_alt = currentThread.img_alt2;
      } else if (currentThread.user_id1 !== this.props.user.id) {
        name = currentThread.name1;
        user_name = currentThread.user_name1;
        img_src = currentThread.img_src1;
        img_alt = currentThread.img_alt1;
      }
    }

    return (
      <>
        <h2 className={styles.messagesWithHeader}>
          <img
            className={styles.messagesAvatarImg}
            src={img_src}
            alt={img_alt !== null ? img_alt : 'avatar image'}></img>
          Thread with {name} ({user_name})
        </h2>
        {messages.length ? (
          <ul className={styles.messageListUl} tabIndex="0">
            {messages.map(message => (
              <Message
                key={message.id}
                message={message}
                currentThread={currentThread}
                handleMessageDelete={this.handleMessageDelete}
              />
            ))}
            <li className={styles.bottomLi} ref={el => (this.el = el)} />
          </ul>
        ) : (
          <p className={styles.noMessages}>
            No messages with this neighbor yet!
          </p>
        )}
      </>
    );
  }
}
