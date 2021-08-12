import axios from 'axios';

export default class AuthService {
  static async signup(userId, userPW) {
    const response = axios.post('/api/auth/join', {
      userId,
      userPW,
    });
    return response;
  }
}
