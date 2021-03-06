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

  postComment(postId, content) {
    return fetch(`${config.API_ENDPOINT}/comments/${postId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        content,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  handleCommentDelete(commentId, postId) {
    return fetch(`${config.API_ENDPOINT}/comments/${postId}/${commentId}`, {
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

export default CommentsApiService;
