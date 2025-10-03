/**
 * Cấu hình các endpoint API cho frontend.
 * 
 * Object này tập trung tất cả các URL backend mà ứng dụng React sẽ gọi,
 * giúp quản lý và cập nhật dễ dàng hơn.
 */
const API_BASE = "https://localhost:7152/api";

const API = {
  AUTH: {
    LOGIN: `${API_BASE}/Auth/Login`,
    REGISTER: `${API_BASE}/Auth/Register`,
    FORGOT_PASSWORD: `${API_BASE}/Auth/ForgotPassword`,
  },
  PATIENTS: `${API_BASE}/Patients`,
  TESTS: `${API_BASE}/Tests`,
  RESULTS: `${API_BASE}/Results`,
};

export default API;
