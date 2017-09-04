import {get} from '../../services/httpClient'

export const getUser = () => {
  return new Promise((resolve, reject) => {
    get('/users/1')
      .then(({data}) => {
        resolve(data)
      }).catch((error) => reject(error.response.data.error));
  });
}
