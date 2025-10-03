import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PATH from "../../routes/paths";
export default function Unauthorized() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-100 via-white to-red-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center p-10 bg-white shadow-2xl rounded-2xl max-w-md"
      >
        {/* Icon cảnh báo */}
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mx-auto mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M4.93 4.93l14.14 14.14M12 2a10 10 0 100 20 10 10 0 000-20z" />
          </svg>
        </div>

        {/* Tiêu đề */}
        <h1 className="text-4xl font-bold text-red-600 mb-2">403</h1>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Không có quyền truy cập
        </h2>

        {/* Mô tả */}
        <p className="text-gray-500 mb-6">
          Xin lỗi, bạn không được phép xem trang này. 
          Vui lòng quay lại trang chính hoặc đăng nhập bằng tài khoản có quyền phù hợp.
        </p>

        {/* Nút quay lại */}
        <div className="flex justify-center gap-4">
          <Link
            to={PATH.HOME}
            className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Về trang chủ
          </Link>
          <Link
            to={PATH.AUTH.LOGIN}
            className="px-5 py-3 bg-gray-100 text-gray-700 rounded-lg shadow hover:bg-gray-200 transition"
          >
            Đăng nhập
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
