import {post} from 'axios'

export const fetchToken = (username, password) => {
  return new Promise((resolve, reject) => {
    post('/session', {username: username, password: password})
      .then((data) => {
        resolve(data)
      }).catch(() => reject("Invalid Login Information"));
  });
}
