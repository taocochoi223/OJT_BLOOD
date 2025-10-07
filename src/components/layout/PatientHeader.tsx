import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import PATHS from "../../routes/paths";

export default function Header() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const userAvatar = localStorage.getItem("userAvatar");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    if (window.confirm("Bạn có chắc chắn muốn đăng xuất không?")) {
      localStorage.clear();
      sessionStorage.clear();
      window.dispatchEvent(new Event("logout"));
      navigate(PATHS.HOME);
    }
  };

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleProtectedNav = (e: React.MouseEvent) => {
    if (!username) {
      e.preventDefault();
      alert("Bạn cần đăng nhập để truy cập mục này!");
      navigate(PATHS.AUTH.LOGIN);
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to={PATHS.PATIENTS.HOME} className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center">
              <img src="/src/assets/images/logo.png" alt="Logo" className="w-8 h-8 rounded-lg" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">Phòng Xét nghiệm</h1>
              <p className="text-xs text-slate-500">Hệ thống quản lý</p>
            </div>
          </Link>

          {/* Main Navigation - Only essential items */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to={PATHS.PATIENTS.HOME}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50"
                }`
              }
            >
              Trang chủ
            </NavLink>

            <NavLink
              to={PATHS.PATIENTS.APPOINTMENTS}
              onClick={handleProtectedNav}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50"
                }`
              }
            >
              Lịch hẹn
            </NavLink>

            <NavLink
              to={PATHS.PATIENTS.HISTORY}
              onClick={handleProtectedNav}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50"
                }`
              }
            >
              Lịch sử
            </NavLink>
          </nav>

          {/* User Area */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-2 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {/* User Profile */}
            {username ? (
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)} 
                  className="flex items-center space-x-3 p-2 rounded-xl hover:bg-slate-100 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-200">
                    {userAvatar ? (
                      <img src={userAvatar} alt="User Avatar" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-600 to-blue-600 text-white font-bold">
                        {username.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-slate-800">{username}</p>
                    <p className="text-xs text-slate-500">Bệnh nhân</p>
                  </div>
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className="absolute top-14 right-0 bg-white border border-slate-200 rounded-2xl shadow-xl w-56 py-2 z-50">
                    <Link 
                      to={PATHS.PATIENTS.PROFILE} 
                      className="flex items-center px-4 py-3 hover:bg-slate-50 transition-colors" 
                      onClick={() => setDropdownOpen(false)}
                    >
                      <svg className="w-5 h-5 mr-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Thông tin cá nhân
                    </Link>
                    <Link 
                      to={PATHS.PATIENTS.NOTIFICATIONS} 
                      className="flex items-center px-4 py-3 hover:bg-slate-50 transition-colors" 
                      onClick={() => setDropdownOpen(false)}
                    >
                      <svg className="w-5 h-5 mr-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                      Thông báo
                    </Link>
                    <Link 
                      to={PATHS.PATIENTS.PRESCRIPTIONS} 
                      className="flex items-center px-4 py-3 hover:bg-slate-50 transition-colors" 
                      onClick={() => setDropdownOpen(false)}
                    >
                      <svg className="w-5 h-5 mr-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Đơn thuốc
                    </Link>
                    <div className="border-t border-slate-200 my-2"></div>
                    <button 
                      className="flex items-center w-full px-4 py-3 text-red-600 hover:bg-red-50 transition-colors" 
                      onClick={handleLogout}
                    >
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Đăng xuất
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to={PATHS.AUTH.LOGIN}>
                <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-medium hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Đăng nhập
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
