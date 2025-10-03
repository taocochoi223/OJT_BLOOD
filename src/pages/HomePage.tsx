import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PATHS from "@/routes/paths";

import bannerImg from "@/assets/images/Medical Dashboard.png";
import doctorImg from "@/assets/images/Doctor Consultation.jpg";
import bloodImg from "@/assets/images/Blood Test.jpg";
import logo from "@/assets/images/logo.png";
import savetimeImg from "@/assets/images/Save Time.jpg";
import Footer from "@/components/layout/PatientFooter";

// Slider images
const images = [
  {
    src: bannerImg,
    alt: "Medical Dashboard",
    frameClass:
      "rounded-2xl shadow-lg border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-white",
  },
  {
    src: doctorImg,
    alt: "Doctor Consultation",
    frameClass:
      "rounded-[16px_60px_16px_60px] border-[4px] border-rose-200 shadow-xl bg-gradient-to-br from-rose-50 to-white",
  },
  {
    src: bloodImg,
    alt: "Blood Test",
    frameClass:
      "relative overflow-hidden border-[4px] border-amber-300 rounded-[32px_80px_32px_80px/80px_32px_80px_32px] bg-gradient-to-br from-amber-50 to-white before:content-[''] before:absolute before:left-[-40px] before:top-[60%] before:w-[140%] before:h-[60px] before:bg-[radial-gradient(circle_at_50%_0,#fff3cd_60%,transparent_100%)] before:opacity-50 before:pointer-events-none",
  },
];

const dotColors = ["bg-indigo-600", "bg-rose-500", "bg-amber-500"];

export default function HomePage() {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setImgIdx((p) => (p + 1) % images.length),
      2500
    );
    return () => clearInterval(interval);
  }, []);

  const current = images[imgIdx];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/40 border-b border-white/40">
        <div className="max-w-7xl mx-auto w-full px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 rounded-lg shadow-md"
            />
            <span className="font-semibold text-lg text-slate-700">
              Phòng Xét nghiệm Máu
            </span>
          </div>
          <nav className="flex items-center gap-4">
            <Link
              to={PATHS.AUTH.LOGIN}
              className="text-sm px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-md shadow-md hover:from-indigo-600 hover:to-blue-600 transition"
            >
              Đăng nhập
            </Link>
            <Link
              to={PATHS.AUTH.REGISTER}
              className="text-sm px-4 py-2 bg-gradient-to-r from-rose-500 to-amber-400 text-white rounded-md shadow-md hover:from-rose-600 hover:to-amber-500 transition"
            >
              Đăng ký
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Slider */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-indigo-600 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              Hệ thống Quản lý Phòng Xét nghiệm Máu
            </h1>
            <p className="text-lg text-slate-600 max-w-xl">
              Nền tảng y tế thông minh giúp bạn theo dõi kết quả xét nghiệm, quản lý lịch hẹn
              và đơn thuốc nhanh chóng, chính xác và an toàn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                to={PATHS.AUTH.LOGIN}
                className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-rose-500 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-[1.02] transition"
              >
                Bắt đầu
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center border border-transparent bg-white/90 text-indigo-700 px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition"
              >
                Tìm hiểu thêm
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div
              className={`w-full h-72 md:h-80 overflow-hidden flex items-center justify-center transition-transform duration-500 hover:rotate-1 hover:scale-[1.01] ${current.frameClass}`}
            >
              <img
                src={current.src}
                alt={current.alt}
                className="w-full h-full object-cover animate-float"
              />
            </div>
            {/* Dots */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-3 flex gap-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-3 h-3 rounded-full ${
                    i === imgIdx
                      ? `${dotColors[i]} shadow-lg`
                      : "bg-white/60 ring-1 ring-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40">
        <div className="max-w-7xl mx-auto w-full px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "120K+", label: "Xét nghiệm đã thực hiện", color: "text-indigo-600" },
            { value: "5K+", label: "Bệnh nhân tin dùng", color: "text-rose-600" },
            { value: "50+", label: "Bác sĩ & kỹ thuật viên", color: "text-amber-600" },
            { value: "24/7", label: "Hỗ trợ trực tuyến", color: "text-teal-600" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-xl border border-white/60 bg-white/70 shadow-sm text-center hover:shadow transition"
            >
              <div className={`text-2xl font-semibold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-xs text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto w-full px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Tính năng nổi bật
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: "📅", title: "Đặt lịch hẹn", desc: "Chủ động chọn thời gian khám phù hợp.", color: "from-indigo-500 to-blue-500" },
            { icon: "🧪", title: "Kết quả xét nghiệm", desc: "Xem và tải về chỉ với một cú nhấp.", color: "from-rose-500 to-pink-500" },
            { icon: "💊", title: "Đơn thuốc", desc: "Theo dõi lịch sử điều trị dễ dàng.", color: "from-amber-400 to-yellow-500" },
            { icon: "🔔", title: "Thông báo", desc: "Cập nhật tin tức mới nhất từ phòng khám.", color: "from-teal-400 to-emerald-500" },
          ].map((f, i) => (
            <div
              key={i}
              className="group p-6 bg-white rounded-xl shadow hover:shadow-xl transform hover:-translate-y-1 transition border border-white/60"
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="font-semibold mt-4">{f.title}</h3>
              <p className="text-slate-600 mt-2">{f.desc}</p>
              <div
                className={`mt-4 h-1 w-0 bg-gradient-to-r ${f.color} transition-all group-hover:w-20 rounded`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto w-full px-6 py-12 space-y-12">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
          Thông tin về xét nghiệm máu
        </h2>

        {/* 1. Xét nghiệm máu là gì */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <img src={bloodImg} alt="Xét nghiệm máu" className="rounded-xl shadow-lg" />
          <div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              Xét nghiệm máu là gì?
            </h3>
            <p className="text-slate-700">
              Xét nghiệm máu là phương pháp y học giúp phân tích các thành phần trong máu nhằm đánh
              giá tình trạng sức khỏe, phát hiện bệnh lý và theo dõi hiệu quả điều trị.
            </p>
          </div>
        </div>

        {/* 2. Tầm quan trọng */}
        <div className="bg-indigo-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            Tầm quan trọng của xét nghiệm máu
          </h3>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li>Phát hiện sớm các bệnh lý tiềm ẩn.</li>
            <li>Đánh giá chức năng cơ quan như gan, thận, tim mạch.</li>
            <li>Giúp bác sĩ đưa ra phương án điều trị chính xác.</li>
          </ul>
        </div>

        {/* 3. Tại sao phải xét nghiệm */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          {/* Text */}
          <div className="md:w-1/2 lg:w-5/12">
            <h3 className="text-xl font-semibold text-rose-600 mb-2">
              Tại sao phải xét nghiệm máu?
            </h3>
            <p className="text-slate-700">
              Xét nghiệm máu giúp bạn nắm bắt sức khỏe tổng quát, phát hiện các nguy cơ trước khi bệnh biểu hiện rõ ràng, từ đó giảm thiểu rủi ro và chi phí điều trị.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 lg:w-6/12 flex justify-end">
            <img
              src={doctorImg}
              alt="Doctor Consultation"
              className="rounded-xl shadow-lg w-full max-w-[100%] object-cover"
            />
          </div>
        </div>


        {/* 4. Ai nên đi xét nghiệm */}
        <div className="bg-rose-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-rose-600 mb-2">
            Ai nên đi xét nghiệm máu?
          </h3>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li>Người trên 35 tuổi hoặc có bệnh lý nền.</li>
            <li>Người có triệu chứng mệt mỏi, chóng mặt, khó thở.</li>
            <li>Người theo dõi điều trị dài hạn.</li>
            <li>Người muốn kiểm tra sức khỏe định kỳ.</li>
          </ul>
        </div>

        {/* 5. Giải pháp giảm thời gian */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <img src={savetimeImg} alt="Giải pháp xét nghiệm" className="rounded-xl shadow-lg  max-w-[100%]" />
          <div>
            <h3 className="text-xl font-semibold text-amber-600 mb-2">
              Giải pháp giảm thời gian xét nghiệm
            </h3>
            <p className="text-slate-700">
              Hệ thống quản lý phòng xét nghiệm thông minh giúp bạn đặt lịch trực tuyến, giảm thời gian
              chờ đợi, nhận kết quả nhanh chóng và tiện lợi.
            </p>
            <Link
              to={PATHS.AUTH.REGISTER}
              className="inline-block mt-4 px-6 py-3 bg-amber-500 text-white rounded-lg shadow hover:bg-amber-600 transition"
            >
              Tạo tài khoản ngay
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto w-full px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Bệnh nhân nói gì?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <blockquote className="p-6 bg-white/80 rounded-xl shadow ring-1 ring-white/40 border-l-4 border-indigo-500 hover:shadow-lg transition">
            <p className="text-slate-700 italic">
              “Hệ thống rất tiện lợi, tôi có thể xem kết quả xét nghiệm ngay tại
              nhà.”
            </p>
            <cite className="block mt-3 text-sm font-medium text-indigo-600">
              - Nguyễn Văn A
            </cite>
          </blockquote>
          <blockquote className="p-6 bg-white/80 rounded-xl shadow ring-1 ring-white/40 border-l-4 border-rose-500 hover:shadow-lg transition">
            <p className="text-slate-700 italic">
              “Đặt lịch hẹn nhanh chóng, không còn phải chờ đợi lâu tại phòng
              khám.”
            </p>
            <cite className="block mt-3 text-sm font-medium text-rose-600">
              - Trần Thị B
            </cite>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto w-full px-6 pb-12">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 p-8 md:p-10 text-white shadow-xl">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="relative">
            <h3 className="text-2xl font-bold">Sẵn sàng bắt đầu?</h3>
            <p className="mt-2 text-white/90 max-w-2xl">
              Tạo tài khoản để đặt lịch, theo dõi kết quả và nhận thông báo nhanh
              chóng.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to={PATHS.AUTH.REGISTER}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-indigo-700 font-medium shadow hover:shadow-md transition"
              >
                Đăng ký ngay
              </Link>
              <Link
                to={PATHS.AUTH.LOGIN}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 ring-1 ring-white/40 text-white hover:bg-white/20 transition"
              >
                Tôi đã có tài khoản
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}