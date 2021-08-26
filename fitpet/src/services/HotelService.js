import axios from 'axios';

export default class HotelService {
  // 호텔 리스트
  static async getHotelList(page) {
    const response = await axios.get(`/api/lodging/list/?nowPage=${page}`);
    return response;
  }
}
