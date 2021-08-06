import axios from 'axios';

const API_URL = 'http://www.ongyeol.com:61010';

export default class AuthService {
  static async signup(userId, userPW) {
    const response = axios.post('/join', {
      userId,
      userPW,
    });
    return response;
  }
}
