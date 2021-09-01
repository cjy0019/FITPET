import axios from 'axios';

export default class HotelService {
  // 210826 by.dy
  // [호텔 메인] 인기있는 숙소 8개
  static async getHotelMainHitsList() {
    const response = await axios.get('api/lodging/hitsList');
    return response;
  }
  // 210830 by.dy
  // [호텔 메인] 지역별(제주도, 속초, 전주, 부산) 숙소 데이터 : 반려동물과 함께 펫캉스 즐기자!
  static async getHotelMainRegion(region) {
    const response = await axios.get(`/api/lodging/list/?region=${region}`);
    return response;
  }
  // 210825 by.jy
  // 호텔 리스트
  static async getHotelList(page) {
    const response = await axios.get(`/api/lodging/list/?nowPage=${page}`);
    return response;
  }
  // 210828 by.dy
  // 호텔 상세보기 (객실 정보)
  static async getHotelAbout(hotelId) {
    const response = await axios.get(`/api/lodging/${hotelId}`);
    return response;
  }
}
