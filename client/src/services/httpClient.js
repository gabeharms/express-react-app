import axios from 'axios'

let instance = axios.create({});
let authToken = ''

export const isAuthed = () => {
  return authToken.length > 0
}

export const setInstance = token => {
  authToken = token
  instance = axios.create({
    headers: {'X-Auth': token}
  });
}

export const get = (...args) => {
  return instance.get(...args)
}

export const post = (...args) => {
  return instance.post(...args)
}
