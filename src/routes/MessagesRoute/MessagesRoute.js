import React from 'react';
import ThreadsContext from '../../contexts/ThreadsContext';
import MessagesApiService from '../../services/messages-api-service';
import MessagesPage from '../../components/MessagesPage/MessagesPage';
import ThreadsApiService from '../../services/threads-api-service';

export default class MessagesRoute extends React.Component {
  static contextType = ThreadsContext;

  componentDidMount() {
      this.getThreads()
      this.getMessages(this.props.match.params.thread_id);
      this.getCurrentThread(this.props.match.params.thread_id);
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
    return (
      <div>
        <MessagesPage currentThread={currentThread} />
      </div>
    );
  }
}
