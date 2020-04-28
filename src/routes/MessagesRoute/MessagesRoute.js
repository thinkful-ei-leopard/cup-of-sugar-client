import React from 'react'
import ThreadsContext from '../../contexts/ThreadsContext'
import MessagesApiService from '../../services/messages-api-service'
import MessagesPage from '../../components/MessagesPage/MessagesPage'

export default class MessagesRoute extends React.Component {

    static contextType = ThreadsContext

    componentDidMount() {
        this.getMessages(this.props.match.params.thread_id);
      }
    
      async getMessages(threadId) {
        const messages = await MessagesApiService.getMessages(threadId);
        this.context.setMessages(messages);
      }

    render() {
        return (
            <div>
                <MessagesPage />
            </div>
        )
    }
}