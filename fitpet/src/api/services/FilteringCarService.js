import axios from 'axios';

export default class FilteringCarService {
  static async getCars(kind) {
    const response = await axios.get(`api/rentcar/listRead/${kind}`);
    return response;
  }
}
