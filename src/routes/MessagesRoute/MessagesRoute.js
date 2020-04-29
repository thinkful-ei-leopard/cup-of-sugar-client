import React from 'react'
import ThreadsContext from '../../contexts/ThreadsContext'
import MessagesApiService from '../../services/messages-api-service'
import MessagesPage from '../../components/MessagesPage/MessagesPage'
import ThreadsApiService from '../../services/threads-api-service'

export default class MessagesRoute extends React.Component {

    static contextType = ThreadsContext

    componentDidMount() {
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

    render() {
        return (
            <div>
                <MessagesPage />
            </div>
        )
    }
}