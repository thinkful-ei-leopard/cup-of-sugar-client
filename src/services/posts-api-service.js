import config from '../config';
import TokenService from './token-service';

const PostsApiService = {
  getPosts() {
    return fetch(`${config.API_ENDPOINT}/posts`, {
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        'Content-Type': 'application/json',
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  addPost(data) {
    return fetch(`${config.API_ENDPOINT}/posts`, {
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

  editPost(id, edits) {
    return fetch(`${config.API_ENDPOINT}/posts/${id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(edits),
    })
    .then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    )
  },

  deletePost(id) {
    return (
        fetch(`${config.API_ENDPOINT}/posts/${id}`, {
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

export default PostsApiService;
