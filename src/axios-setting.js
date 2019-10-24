import axios from 'axios';

const options = {
  baseURL: 'https://api.paych.sergo.if.ua',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

let deffAxios = axios.create(options);

deffAxios.interceptors.request.use( config => {
  const token = localStorage.getItem('accessToken');
  config.headers.Authorization = token ? `Bearer ${token}`:'';
  return config
});

export default deffAxios