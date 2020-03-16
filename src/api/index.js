// 백엔드 api를 호출하는 역할
import axios from 'axios';
import router from '../router';

const DOMAIN = 'http://localhost:3000';
const UNAUTHORIZED = 401;
const onUnauthorized = () => {
  router.push('/login');
};

const request = (method, url, data) => {
  return axios({
      method,
      url: DOMAIN + url,
      data
    }).then(res => res.data)
    .catch(res => {
      const {
        status
      } = res.response;
      if (status === UNAUTHORIZED) return onUnauthorized();

      new Error(res);
    });
};

export const board = {
  fetch() {
    return request('GET', '/boards');
  }
};