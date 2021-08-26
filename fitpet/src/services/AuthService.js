import axios from 'axios';

export default class AuthService {
  static async signup(userId, userPW, userName) {
    const response = await axios.post('/api/auth/join', {
      userId,
      userPW,
      userName,
    });
    return response;
  }

  static async login(userId, userPW) {
    const response = await axios.post('/api/auth/login', {
      userId,
      userPW,
    });
    return response;
  }

  static async logout() {
    await axios.post('/api/auth/logout', {});
  }
}
