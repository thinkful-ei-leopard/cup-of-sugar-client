import React from 'react';
import ThreadsContext from '../../contexts/ThreadsContext';
import MessagesApiService from '../../services/messages-api-service';
import MessagesPage from '../../components/MessagesPage/MessagesPage';
import ThreadsApiService from '../../services/threads-api-service';

export default class MessagesRoute extends React.Component {
  static contextType = ThreadsContext;

  componentDidMount() {
    this.getMessages(this.props.match.params.thread_id);
    this.getCurrentThread(this.props.match.params.thread_id);
  }

<<<<<<< HEAD
    componentDidMount() {
        this.getThreads()
        this.getMessages(this.props.match.params.thread_id);
        this.getCurrentThread(this.props.match.params.thread_id);
      }
    
      async getMessages(threadId) {
        const messages = await MessagesApiService.getMessages(threadId);
        this.context.setMessages(messages);
      }
=======
  async getMessages(threadId) {
    const messages = await MessagesApiService.getMessages(threadId);
    this.context.setMessages(messages);
  }
>>>>>>> 0f1cd52d9075a16d92917e4169dbd31afa58e5fa

  async getCurrentThread(threadId) {
    const currentThread = await ThreadsApiService.getThreadById(threadId);
    this.context.setCurrentThread(currentThread);
  }

<<<<<<< HEAD
      async getThreads() {
        const threads = await ThreadsApiService.getThreads();
        this.context.setThreads(threads);
      }

    render() {
        return (
            <div>
                <MessagesPage />
            </div>
        )
    }
}
=======
  render() {
    const { currentThread } = this.context;
    return (
      <div>
        <MessagesPage currentThread={currentThread} />
      </div>
    );
  }
}
>>>>>>> 0f1cd52d9075a16d92917e4169dbd31afa58e5fa
