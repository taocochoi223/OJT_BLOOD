export default function Footer() {
  return (
    <footer className="mt-auto bg-gradient-to-b from-indigo-700 via-indigo-800 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto w-full px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h4 className="text-lg font-semibold">Phòng Xét nghiệm Máu</h4>
          <p className="mt-2 text-indigo-100/90 text-sm">
            Hệ thống quản lý xét nghiệm thông minh, nhanh chóng và bảo mật.
          </p>
          <div className="mt-4 space-y-1 text-sm text-indigo-100/90">
            <p>📍 123 Đường Sức Khỏe, Thủ Đức, TP.HCM</p>
            <p>✉️ support@blood.com</p>
            <p>📞 0123 456 789</p>
          </div>
        </div>

        {/* Working hours */}
        <div>
          <h4 className="text-lg font-semibold">Giờ làm việc</h4>
          <ul className="mt-3 space-y-2 text-sm text-indigo-100/90">
            <li className="flex items-center justify-between">
              <span>Thứ 2 - Thứ 6</span>
              <span className="font-medium">07:30 - 20:00</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Thứ 7</span>
              <span className="font-medium">08:00 - 18:00</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Chủ nhật</span>
              <span className="font-medium">08:00 - 12:00</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Ngày lễ</span>
              <span className="font-medium">Nghỉ</span>
            </li>
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-lg font-semibold">Liên kết nhanh</h4>
          <ul className="mt-3 space-y-2 text-sm text-indigo-100/90">
            <li>
              <a href="#features" className="hover:text-amber-300 transition">Tính năng</a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-amber-300 transition">Quy trình</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-amber-300 transition">Đánh giá</a>
            </li>
            <li>
              <a href="#education" className="hover:text-amber-300 transition">Kiến thức</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold">Hỗ trợ</h4>
          <ul className="mt-3 space-y-2 text-sm text-indigo-100/90">
            <li>Hướng dẫn đặt lịch</li>
            <li>Chính sách bảo mật</li>
            <li>Điều khoản sử dụng</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a aria-label="Facebook" className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">f</a>
            <a aria-label="Zalo" className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">Z</a>
            <a aria-label="YouTube" className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">▶</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto w-full px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-indigo-100/80">
          <p>© 2025 Phòng khám ABC. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Hotline khẩn cấp: <span className="font-semibold text-white">1900 1234</span></p>
        </div>
      </div>
    </footer>
  );
}
