import config from '../config';
import TokenService from './token-service';

const UsersApiService = {
    getUsersByZip(zip) {
        return fetch(`${config.API_ENDPOINT}/users/:zip`, {
          headers: {
            Authorization: `Bearer ${TokenService.getAuthToken()}`,
            'Content-Type': 'application/json',
          },
        }).then((res) =>
          !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
      },
}

export default UsersApiService;