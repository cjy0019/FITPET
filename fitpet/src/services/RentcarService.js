import axios from 'axios';

export default class RentcarService {
  static async getCars() {
    const response = axios.get('/api/rentcar/list');
    return response;
  }
}
