import config from '../config';
import TokenService from './token-service';

const MessagesApiService = {
  getMessages(threadId) {
    return fetch(`${config.API_ENDPOINT}/messages/${threadId}`, {
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        'Content-Type': 'application/json',
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postMessage(threadId, newMessage) {
    return fetch(`${config.API_ENDPOINT}/messages/${threadId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        newMessage,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  handleMessageDelete(messageId) {
    return fetch(`${config.API_ENDPOINT}/messages/message/${messageId}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'Content-type': 'application/json',
      },
    }).then((res) => {
      return;
    });
  },
};

export default MessagesApiService;
