import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
//import authService from "../../services/authService";
import PATH from "../../routes/paths";
import AuthLayout from "./AuthLayout";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    dob: "",
    phone: "",
    identityNumber: "",
    gender: "male",
    password: "",
    confirmPassword: "",
  });

  const formVariants = {
    initial: { x: "100vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100vw", opacity: 0 },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu không khớp!");
      return;
    }
    try {
      //await authService.register(formData);
      alert("Đăng ký thành công!");
    } catch (err) {
      alert("Đăng ký thất bại");
    }
  };

  return (
    <AuthLayout backTo={PATH.AUTH.LOGIN}>
      <motion.div
        key="registerForm"
        variants={formVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-blue-600 text-center mb-6">
          Đăng ký tài khoản
        </h3>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Họ và tên</label>
            <input
              type="text"
              name="fullName"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Địa chỉ</label>
            <input
              type="text"
              name="address"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Ngày sinh</label>
            <input
              type="date"
              name="dob"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Số điện thoại</label>
            <input
              type="tel"
              name="phone"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">CMND/CCCD</label>
            <input
              type="text"
              name="identityNumber"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              value={formData.identityNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />
              Nam
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />
              Nữ
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium">Mật khẩu</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Xác nhận mật khẩu</label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gray-100 text-black font-semibold border border-gray-400 rounded-lg hover:bg-gray-200 transition"
          >
            Đăng ký
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Bạn đã có tài khoản?{" "}
          <Link to={PATH.AUTH.LOGIN} className="text-blue-600 font-medium">
            Đăng nhập ngay
          </Link>
        </p>
      </motion.div>
    </AuthLayout>
  );
}
