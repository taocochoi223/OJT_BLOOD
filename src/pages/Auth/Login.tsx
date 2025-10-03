import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import authService from "../../services/authService.ts";
import PATH from "../../routes/paths.ts";
import AuthLayout from "./AuthLayout.tsx";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formVariants = {
    initial: { x: "100vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100vw", opacity: 0 },
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await authService.login(email, password);
      if (data.token) localStorage.setItem("token", data.token);
      if (data.username) localStorage.setItem("username", data.username);
      if (data.role) localStorage.setItem("role", String(data.role));

      
      if (data.role === 1) {
        alert("Đăng nhập thành công!");
        navigate(PATH.HOME);
      } else if (data.role === 2) {
        alert("Đăng nhập thành công!");
        navigate(PATH.DOCTORS.HOME);
      } else if (data.role === 3) {
        alert("Đăng nhập thành công!");
        navigate(PATH.ADMINS.HOME);
      } else {
        navigate(PATH.PATIENTS.HOME);
      }

    } catch (err) {
      alert("Sai email hoặc mật khẩu!");
    }
  };

  return (
    <AuthLayout backTo={PATH.HOME}>
      <motion.div
        key="loginForm"
        variants={formVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-blue-600 text-center mb-6">
          Đăng nhập hệ thống
        </h3>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Nhập email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Mật khẩu
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Nhập mật khẩu"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Đăng nhập
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Bạn chưa có tài khoản?{" "}
          <Link to={PATH.AUTH.REGISTER} className="text-blue-600 font-medium">
            Đăng ký ngay
          </Link>
        </p>
        <Link
          to=""
          className="block text-right mt-2 text-sm text-blue-600 hover:underline"
        >
          Quên mật khẩu?
        </Link>
      </motion.div>
    </AuthLayout>
  );
}
