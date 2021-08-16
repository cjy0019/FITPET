import axios from 'axios';

export default class HotelService {
  // 호텔 리스트
  static async getHotelList() {
    const response = await axios.get('/api/lodging/list');
    return response;
  }
}
