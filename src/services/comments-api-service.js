import config from '../config';
import TokenService from './token-service';

const CommentsApiService = {
  getComments() {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        'Content-Type': 'application/json',
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default CommentsApiService;
