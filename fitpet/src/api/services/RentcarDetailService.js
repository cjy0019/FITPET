import axios from 'axios';

export default class RentcarDetailService {
  static async getDetails(params) {
    const response = axios.get(`/api/rentcar/${params}`);
    return response;
  }
}
