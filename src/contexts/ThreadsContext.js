import React, { Component } from 'react';

const ThreadsContext = React.createContext({
  threads: [],
  messages: [],
  currentThreadId: null,
  setThreads: () => {},
  setMessages: () => {},
  addThread: () => {},
  addMessage: () => {},
  setThreadId: () => {},
  deleteThread: () => {},
  deleteMessage: () => {},
});

export default ThreadsContext;

export class ThreadsProvider extends Component {
  state = {
    threads: [],
    messages: [],
    currentThreadId: null,
  };

  setMessages = (messages) => {
    this.setState({ messages });
  };

  setThreads = (threads) => {
      console.log('setting')
    this.setState({ threads });
    console.log(this.state.threads)
  };

  addThread = (thread) => {
    const { threads } = this.state;
    this.setState({ threads: [...threads, thread] });
  };

  deleteThread = (threadId) => {
    this.setState({
        threads: this.state.threads.filter((thread) => thread.id !== threadId),
    });
  };

  addMessage = (message) => {
    const { messages } = this.state;
    this.setState({ messages: [...messages, message] });
  };

  setThreadId = (threadId) => {
    this.setState({ currentThreadId: threadId });
  };

  deleteMessage = (messageId) => {
    this.setState({
        messages: this.state.messages.filter(
        (message) => message.id !== messageId
      ),
    });
  };

  render() {
    const value = {
      threads: this.state.threads,
      messages: this.state.messages,
      currentThreadId: this.state.currentThreadId,
      setThreads: this.setThreads,
      setMessages: this.setMessages,
      addThread: this.addThread,
      addMessage: this.addMessage,
      setThreadId: this.setThreadId,
      deleteThread: this.deleteThread,
      deleteMessage: this.deleteMessage,
    };

    return (
      <ThreadsContext.Provider value={value}>
        {this.props.children}
      </ThreadsContext.Provider>
    );
  }
}
