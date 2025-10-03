/**
 * authService
 * 
 * Service gọi các API liên quan đến xác thực người dùng (authentication).
 */
import axios from "axios";
import API from "./api";

/** Kiểu dữ liệu trả về khi login */
interface LoginResponse {
  token: string;
  username: string;
  role: number;
}

const authService = {
  /**
   * Gửi yêu cầu đăng nhập với email và password
   * @param email - Email của người dùng
   * @param password - Mật khẩu người dùng
   * @returns Promise<LoginResponse>
   */
  login: async (email: string, password: string): Promise<LoginResponse> => {
    try {
      const response = await axios.post<LoginResponse>(API.AUTH.LOGIN, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    }
  },

  /**
   * Gửi yêu cầu đăng ký tài khoản
   */
  register: async (
    email: string,
    password: string,
    username: string
  ): Promise<{ message?: string }> => {
    try {
      const response = await axios.post(API.AUTH.REGISTER, {
        email,
        password,
        username,
      });
      return response.data;
    } catch (error) {
      console.error("Register failed", error);
      throw error;
    }
  },

  /**
   * Gửi yêu cầu quên mật khẩu
   */
  forgotPassword: async (
    email: string
  ): Promise<{ message?: string }> => {
    try {
      const response = await axios.post(API.AUTH.FORGOT_PASSWORD, { email });
      return response.data;
    } catch (error) {
      console.error("Forgot password failed", error);
      throw error;
    }
  },
};

export default authService;
