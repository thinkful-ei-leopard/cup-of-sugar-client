import React, { Component } from 'react';

const ThreadsContext = React.createContext({
  threads: [],
  messages: [],
  currentThread: null,
  users: null,
  setThreads: () => {},
  setMessages: () => {},
  addThread: () => {},
  addMessage: () => {},
  setCurrentThread: () => {},
  deleteThread: () => {},
  deleteMessage: () => {},
  setUsers: () => {},
});

export default ThreadsContext;

export class ThreadsProvider extends Component {
  state = {
    threads: [],
    messages: [],
    currentThread: null,
    users: [],
  };

  setMessages = (messages) => {
    this.setState({ messages });
  };

  setThreads = (threads) => {
    this.setState({ threads });
  };

  setUsers = (users) => {
    this.setState({ users });
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
      users: this.state.users,
      setThreads: this.setThreads,
      setMessages: this.setMessages,
      addThread: this.addThread,
      addMessage: this.addMessage,
      setCurrentThread: this.setCurrentThread,
      deleteThread: this.deleteThread,
      deleteMessage: this.deleteMessage,
      setUsers: this.setUsers,
    };

    return (
      <ThreadsContext.Provider value={value}>
        {this.props.children}
      </ThreadsContext.Provider>
    );
  }
}
