// AuthLayout.tsx
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

interface Props {
  children: ReactNode;
  backTo: string; // đường dẫn muốn quay lại
}

export default function AuthLayout({ children, backTo }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Intro bên trái */}
            <div className="hidden lg:flex flex-col justify-center w-2/5 bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 text-white p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm mb-8 shadow-lg">
                  <img src={logo} alt="Logo" className="w-16 h-16 rounded-xl" />
                </div>
                
                <h2 className="text-3xl font-bold mb-6 leading-tight">
                  Chào mừng đến với
                  <br />
                  <span className="text-blue-200">Phòng Xét nghiệm Máu</span>
                </h2>
                
                <p className="text-blue-100 leading-relaxed mb-8 text-lg">
                  Hệ thống quản lý phòng xét nghiệm hiện đại với đội ngũ bác sĩ giàu kinh nghiệm, 
                  trang thiết bị tiên tiến và quy trình chuẩn quốc tế.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                    <span className="text-blue-100">Xét nghiệm chính xác 99%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                    <span className="text-blue-100">Kết quả nhanh chóng</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                    <span className="text-blue-100">Tư vấn chuyên nghiệp</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form bên phải */}
            <div className="relative flex flex-col justify-center w-full lg:w-3/5 p-8 lg:p-12">
              {/* Back button */}
              <Link
                to={backTo}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800 rounded-full transition-all duration-200 group"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
              
              {/* Mobile logo */}
              <div className="lg:hidden flex justify-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center shadow-lg">
                  <img src={logo} alt="Logo" className="w-12 h-12 rounded-xl" />
                </div>
              </div>
              
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
