import React from 'react';
import ThreadsContext from '../../contexts/ThreadsContext';
import MessagesApiService from '../../services/messages-api-service';
import MessagesPage from '../../components/MessagesPage/MessagesPage';
import ThreadsApiService from '../../services/threads-api-service';
import { withRouter } from 'react-router-dom';

export class MessagesRoute extends React.Component {
  static contextType = ThreadsContext;

  static defaultProps = {
    history: {
      goBack: () => {}
    },
    match: {
      params: {}
    }
  };

  componentDidMount() {
    this.getThreads();
    this.getMessages(this.props.match.params.thread_id);
    this.getCurrentThread(this.props.match.params.thread_id);
  }

  componentWillUnmount() {
    this.context.clearCurrentThread()
  }

  async getMessages(threadId) {
    const messages = await MessagesApiService.getMessages(threadId);
    this.context.setMessages(messages);
  }

  async getCurrentThread(threadId) {
    const currentThread = await ThreadsApiService.getThreadById(threadId);
    this.context.setCurrentThread(currentThread);
  }

  async getThreads() {
    const threads = await ThreadsApiService.getThreads();
    this.context.setThreads(threads);
  }

  render() {
    const { currentThread } = this.context;
    const { history } = this.props;
    return (
      <>
        <MessagesPage currentThread={currentThread} history={history} />
      </>
    );
  }
}

export default withRouter(MessagesRoute);
