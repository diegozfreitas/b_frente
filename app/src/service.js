import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.0.9:3000',
  timeout: 1000,
});
