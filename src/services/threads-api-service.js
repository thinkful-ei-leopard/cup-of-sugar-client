import config from '../config';
import TokenService from './token-service';

const ThreadsApiService = {
  getThreads() {
    return fetch(`${config.API_ENDPOINT}/threads`, {
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        'Content-Type': 'application/json',
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getThreadById(threadId) {
    return fetch(`${config.API_ENDPOINT}/threads/${threadId}`, {
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        'Content-Type': 'application/json',
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  addThread(data) {
    console.log(data)
    return fetch(`${config.API_ENDPOINT}/threads`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((err) => err);
  },
  deleteThread(id) {
    return (
        fetch(`${config.API_ENDPOINT}/threads/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'Content-type': 'application/json'
            }
        })
            .then(res => {
                return
            })
    )
  }
};

export default ThreadsApiService;
