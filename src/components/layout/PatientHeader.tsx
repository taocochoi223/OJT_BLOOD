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
      navigate(PATHS.LOGIN);
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-8 py-4 bg-white border-b shadow-md">
      {/* Logo */}
      <div className="flex items-center font-bold text-xl text-blue-600">
        <img src="/src/assets/images/logo.png" alt="Clinic Logo" className="h-10 mr-2" />
        Clinic System
      </div>

      {/* Navigation */}
      <nav className="flex gap-6">
        <NavLink to={PATHS.HOME} className={({ isActive }) => isActive ? "text-blue-600 font-semibold border-b-2 border-blue-600" : "hover:text-blue-600"}>
          Trang chủ
        </NavLink>
        <NavLink to={PATHS.PATIENTS.PROFILE} onClick={handleProtectedNav}>Hồ sơ cá nhân</NavLink>
        <NavLink to={PATHS.PATIENTS.APPOINTMENTS} onClick={handleProtectedNav}>Lịch hẹn</NavLink>
        <NavLink to={PATHS.PATIENTS.HISTORY} onClick={handleProtectedNav}>Lịch sử khám</NavLink>
        <NavLink to={PATHS.PATIENTS.PRESCRIPTIONS} onClick={handleProtectedNav}>Đơn thuốc</NavLink>
        <NavLink to={PATHS.PATIENTS.NOTIFICATIONS} onClick={handleProtectedNav}>Thông báo</NavLink>
        <NavLink to={PATHS.PATIENTS.CONTACT} onClick={handleProtectedNav}>Liên hệ</NavLink>
      </nav>

      {/* User Area */}
      <div className="relative flex items-center gap-4">
        {username ? (
          <div className="flex items-center gap-3" ref={dropdownRef}>
            <span className="text-gray-700">Xin chào, <span className="text-blue-600 font-semibold">{username}</span></span>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300">
              {userAvatar ? (
                <img src={userAvatar} alt="User Avatar" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-blue-600 text-white font-bold">
                  {username.charAt(0).toUpperCase()}
                </div>
              )}
            </button>

            {dropdownOpen && (
              <div className="absolute top-14 right-0 bg-white border rounded-lg shadow-lg w-48 flex flex-col">
                <Link to={PATHS.PATIENTS.PROFILE} className="px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>
                  Thông tin cá nhân
                </Link>
                <button className="px-4 py-2 text-left hover:bg-gray-100">Cài đặt</button>
                <button className="px-4 py-2 text-left text-red-500 hover:bg-red-500 hover:text-white border-t" onClick={handleLogout}>
                  Đăng xuất
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to={PATHS.LOGIN}>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Đăng nhập</button>
          </Link>
        )}
      </div>
    </header>
  );
}
