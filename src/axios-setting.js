import axios from 'axios';

const options = {
  baseURL: 'https://api.paych.sergo.if.ua',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

let deAxios = axios.create(options);

deAxios.interceptors.request.use( config => {
  const token = localStorage.getItem('userToken');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config
});

export default deAxios