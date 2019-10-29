import axios from 'axios';

const options = {
  baseURL: 'https://api.paych.sergo.if.ua',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

let client = axios.create(options);

client.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('accessToken');
  config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
  return config
}, error => {
  return error
});

client.interceptors.response.use(done => {
  return done
}, error => {
  if (error.response.status === 401) {
    window.location = '/login';
    localStorage.clear();
    console.error('ERROR', error)
  }
});

export default client