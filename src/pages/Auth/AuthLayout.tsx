// AuthLayout.tsx
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  backTo: string; // đường dẫn muốn quay lại
}

export default function AuthLayout({ children, backTo }: Props) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-poppins">
      <div className="flex w-full max-w-5xl bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Intro bên trái */}
        <div className="hidden md:flex flex-col justify-center w-2/5 bg-gradient-to-br from-blue-500 to-blue-700 text-white p-10">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-6">
            <img src="/logo.png" alt="Logo" className="w-12 h-12" />
          </div>
          <h2 className="text-2xl font-bold mb-4">
            Chào mừng đến với ClinicSystem
          </h2>
          <p className="opacity-90 text-sm leading-relaxed">
            Quản lý thông tin sức khỏe và kết quả xét nghiệm một cách an toàn, hiệu quả.
          </p>
        </div>

        {/* Form bên phải */}
        <div className="relative flex flex-col justify-center w-full md:w-3/5 p-8">
          <Link
            to={backTo}
            className="absolute top-4 right-4 text-blue-500 text-3xl hover:text-blue-700"
          >
            ↩
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
}
