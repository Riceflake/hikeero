import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.request.use(config => {
  return {
    ...config,
    params: {
      ...config.params,
      key: process.env.REACT_APP_API_KEY,
    },
  };
});

export default instance;
