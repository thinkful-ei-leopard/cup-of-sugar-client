import React from 'react';
import ThreadsContext from '../../contexts/ThreadsContext';
import Comment from './Comment/Comment';
import styles from './CommentList.module.scss';
import ThreadsApiService from '../../services/threads-api-service';
import MessagesApiService from '../../services/messages-api-service';

class CommentList extends React.Component {
  state = { loading: true };

  static contextType = ThreadsContext;

  componentDidMount() {
    this.getThreads();
    this.getMessages();
    this.setState({ loading: false });
  }

  async getMessages() {
    const messages = await MessagesApiService.getAllMessages();
    this.context.setMessages(messages);
  }

  async getThreads() {
    const threads = await ThreadsApiService.getThreads();
    this.context.setThreads(threads);
  }

  render() {
    if (this.state.loading == true) {
      return <></>;
    }

    return (
      <ul className={styles.commentsUl}>
        {this.props.commentsForPost.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            deleteComment={this.props.deleteComment}
            addThread={this.context.addThread}
            threads={this.context.threads}
            zip={this.props.zip}
          />
        ))}
      </ul>
    );
  }
}

export default CommentList;
