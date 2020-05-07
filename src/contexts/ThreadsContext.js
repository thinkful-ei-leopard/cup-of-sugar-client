import React, { Component } from 'react';

const ThreadsContext = React.createContext({
  threads: [],
  messages: [],
  currentThread: null,
  setThreads: () => {},
  setMessages: () => {},
  addThread: () => {},
  addMessage: () => {},
  setCurrentThread: () => {},
  deleteThread: () => {},
  deleteMessage: () => {},
  clearCurrentThread: () => {}
});

export default ThreadsContext;

export class ThreadsProvider extends Component {
  state = {
    threads: [],
    messages: [],
    currentThread: null,
  };

  setMessages = (messages) => {
    this.setState({ messages });
  };

  setThreads = (threads) => {
    this.setState({ threads,
                    currentThread: null });
    this.setState({})
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

  setCurrentThread = (thread) => {
    this.setState({ currentThread: thread });
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
      currentThread: this.state.currentThread,
      setThreads: this.setThreads,
      setMessages: this.setMessages,
      addThread: this.addThread,
      addMessage: this.addMessage,
      setCurrentThread: this.setCurrentThread,
      deleteThread: this.deleteThread,
      deleteMessage: this.deleteMessage,
      clearCurrentThread: this.clearCurrentThread
    };

    return (
      <ThreadsContext.Provider value={value}>
        {this.props.children}
      </ThreadsContext.Provider>
    );
  }
}
