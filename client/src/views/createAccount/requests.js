import {post} from 'axios'

export const createUser = (username, password) => {
  return new Promise((resolve, reject) => {
    post('/users', {username: username, password: password})
      .then((data) => {
        resolve(data)
      }).catch((error) => reject(error.response.data.error));
  });
}
