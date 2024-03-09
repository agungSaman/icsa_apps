import axios from 'axios';
import authHeader from './auth-headers';

const API_URL = 'https://icsa.tracesync.web.id/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  async getUserBoard() {
    return axios.get(API_URL + 'user', {headers: await authHeader()});
  }

  async getModeratorBoard() {
    return axios.get(API_URL + 'mod', {headers: await authHeader()});
  }

  async getAdminBoard() {
    return axios.get(API_URL + 'admin', {headers: await authHeader()});
  }
}

export default new UserService();
