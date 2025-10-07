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
    alt: "Hệ thống quản lý phòng xét nghiệm",
    frameClass:
      "rounded-2xl shadow-lg border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-white",
  },
  {
    src: doctorImg,
    alt: "Tư vấn bác sĩ chuyên nghiệp",
    frameClass:
      "rounded-[16px_60px_16px_60px] border-[4px] border-rose-200 shadow-xl bg-gradient-to-br from-rose-50 to-white",
  },
  {
    src: bloodImg,
    alt: "Xét nghiệm máu chính xác",
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
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/80 bg-white/60 border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto w-full px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 rounded-lg shadow-md"
            />
            <div>
              <span className="font-bold text-xl text-slate-800">
              Phòng Xét nghiệm Máu
            </span>
              <p className="text-xs text-slate-600">Chuyên nghiệp - Chính xác - An toàn</p>
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <Link
              to={PATHS.AUTH.LOGIN}
              className="text-sm px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg shadow-md hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 font-medium"
            >
              Đăng nhập
            </Link>
            <Link
              to={PATHS.AUTH.REGISTER}
              className="text-sm px-6 py-2.5 bg-gradient-to-r from-rose-600 to-amber-500 text-white rounded-lg shadow-md hover:from-rose-700 hover:to-amber-600 transition-all duration-200 font-medium"
            >
              Đăng ký
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Slider */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto w-full px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                🏥 Phòng xét nghiệm uy tín hàng đầu
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-indigo-700 via-blue-600 to-rose-600 bg-clip-text text-transparent">
                Xét nghiệm Máu
                <br />
                <span className="text-4xl md:text-5xl text-slate-700">Chuyên nghiệp</span>
            </h1>
              <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                Hệ thống quản lý phòng xét nghiệm hiện đại với đội ngũ bác sĩ giàu kinh nghiệm, 
                trang thiết bị tiên tiến và quy trình chuẩn quốc tế.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={PATHS.AUTH.LOGIN}
                className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 font-semibold text-lg"
              >
                Đặt lịch ngay
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center border-2 border-indigo-200 bg-white/80 text-indigo-700 px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:bg-indigo-50 transition-all duration-200 font-semibold text-lg"
              >
                Xem dịch vụ
              </a>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">15+</div>
                <div className="text-sm text-slate-600">Năm kinh nghiệm</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50K+</div>
                <div className="text-sm text-slate-600">Bệnh nhân tin tưởng</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600">99%</div>
                <div className="text-sm text-slate-600">Độ chính xác</div>
              </div>
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
      <section className="bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto w-full px-6 py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Thành tựu nổi bật</h2>
            <p className="text-slate-600">Những con số ấn tượng về chất lượng dịch vụ</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                value: "150K+", 
                label: "Xét nghiệm đã thực hiện", 
                color: "text-indigo-600",
                icon: "🧪",
                description: "Từ năm 2008 đến nay"
              },
              { 
                value: "25K+", 
                label: "Bệnh nhân tin dùng", 
                color: "text-rose-600",
                icon: "👥",
                description: "Khách hàng thường xuyên"
              },
              { 
                value: "50+", 
                label: "Bác sĩ & kỹ thuật viên", 
                color: "text-amber-600",
                icon: "👨‍⚕️",
                description: "Đội ngũ chuyên nghiệp"
              },
              { 
                value: "24/7", 
                label: "Hỗ trợ trực tuyến", 
                color: "text-teal-600",
                icon: "🕐",
                description: "Luôn sẵn sàng phục vụ"
              },
          ].map((stat, i) => (
            <div
              key={i}
                className="group p-6 rounded-2xl border border-slate-200/60 bg-white/90 shadow-sm text-center hover:shadow-lg hover:border-indigo-200 transition-all duration-300"
            >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-700 mb-1">{stat.label}</div>
                <div className="text-xs text-slate-500">{stat.description}</div>
              </div>
            ))}
            </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto w-full px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Dịch vụ chuyên nghiệp
        </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Chúng tôi cung cấp đầy đủ các dịch vụ xét nghiệm máu với quy trình chuẩn quốc tế
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: "📅", 
              title: "Đặt lịch trực tuyến", 
              desc: "Đặt lịch xét nghiệm 24/7, chọn thời gian phù hợp với lịch trình cá nhân",
              color: "from-indigo-500 to-blue-500",
              features: ["Đặt lịch 24/7", "Nhắc nhở tự động", "Hủy/đổi lịch dễ dàng"]
            },
            { 
              icon: "🧪", 
              title: "Xét nghiệm chính xác", 
              desc: "Trang thiết bị hiện đại, quy trình chuẩn ISO, kết quả chính xác 99%",
              color: "from-rose-500 to-pink-500",
              features: ["Thiết bị hiện đại", "Chuẩn ISO", "Kết quả nhanh"]
            },
            { 
              icon: "📊", 
              title: "Kết quả trực tuyến", 
              desc: "Nhận kết quả qua email/SMS, tải về báo cáo chi tiết, lưu trữ lâu dài",
              color: "from-amber-400 to-yellow-500",
              features: ["Nhận kết quả nhanh", "Lưu trữ an toàn", "Báo cáo chi tiết"]
            },
            { 
              icon: "👨‍⚕️", 
              title: "Tư vấn chuyên gia", 
              desc: "Đội ngũ bác sĩ giàu kinh nghiệm tư vấn kết quả và hướng dẫn điều trị",
              color: "from-teal-400 to-emerald-500",
              features: ["Bác sĩ chuyên khoa", "Tư vấn miễn phí", "Theo dõi sức khỏe"]
            },
          ].map((f, i) => (
            <div
              key={i}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-200/50"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{f.title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{f.desc}</p>
              <ul className="space-y-2 mb-4">
                {f.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-slate-500 flex items-center">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div
                className={`h-1 w-0 bg-gradient-to-r ${f.color} transition-all group-hover:w-full rounded-full`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Các loại xét nghiệm máu
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Chúng tôi cung cấp đầy đủ các loại xét nghiệm máu từ cơ bản đến chuyên sâu
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Xét nghiệm tổng quát",
                price: "150.000đ",
                duration: "30 phút",
                tests: ["Công thức máu", "Sinh hóa cơ bản", "Đường huyết", "Cholesterol"],
                color: "from-blue-500 to-indigo-600"
              },
              {
                title: "Xét nghiệm chuyên sâu",
                price: "350.000đ",
                duration: "45 phút",
                tests: ["Chức năng gan", "Chức năng thận", "Điện giải đồ", "Protein toàn phần"],
                color: "from-rose-500 to-pink-600"
              },
              {
                title: "Xét nghiệm nội tiết",
                price: "500.000đ",
                duration: "60 phút",
                tests: ["Hormone tuyến giáp", "Insulin", "Testosterone", "Estrogen"],
                color: "from-amber-500 to-orange-600"
              }
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-indigo-600">{service.price}</span>
                    <span className="text-sm text-slate-500">⏱️ {service.duration}</span>
                  </div>
                  <ul className="space-y-2">
                    {service.tests.map((test, idx) => (
                      <li key={idx} className="text-slate-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3"></span>
                        {test}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-blue-700 transition-all duration-200">
                    
                    Đặt lịch ngay
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information */}
      <section className="max-w-7xl mx-auto w-full px-6 py-16 space-y-12">
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
      <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Khách hàng đánh giá
        </h2>
            <p className="text-xl text-slate-600">
              Những chia sẻ chân thực từ khách hàng đã sử dụng dịch vụ
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Anh Nguyễn Minh Tuấn",
                age: "35 tuổi",
                rating: 5,
                comment: "Dịch vụ rất chuyên nghiệp, kết quả xét nghiệm chính xác và nhanh chóng. Đội ngũ bác sĩ tư vấn rất tận tình.",
                avatar: "👨‍💼"
              },
              {
                name: "Chị Lê Thị Hương",
                age: "28 tuổi",
                rating: 5,
                comment: "Đặt lịch online rất tiện lợi, không cần chờ đợi lâu. Kết quả được gửi qua email rất nhanh, rất hài lòng!",
                avatar: "👩‍💼"
              },
              {
                name: "Bác Phạm Văn Nam",
                age: "52 tuổi",
                rating: 5,
                comment: "Phòng xét nghiệm sạch sẽ, thiết bị hiện đại. Bác sĩ giải thích kết quả rất chi tiết và dễ hiểu.",
                avatar: "👨‍🦳"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.age}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <span key={idx} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <blockquote className="text-slate-700 italic leading-relaxed">
                  "{testimonial.comment}"
          </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Thông tin liên hệ
            </h2>
            <p className="text-xl text-slate-600">
              Chúng tôi luôn sẵn sàng phục vụ bạn
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📍",
                title: "Địa chỉ",
                info: "123 Đường ABC, Quận 1, TP.HCM",
                detail: "Tầng 2, Tòa nhà Y tế ABC"
              },
              {
                icon: "📞",
                title: "Điện thoại",
                info: "028 1234 5678",
                detail: "Hotline: 0901 234 567"
              },
              {
                icon: "🕐",
                title: "Giờ làm việc",
                info: "Thứ 2 - Thứ 6: 7:00 - 17:00",
                detail: "Thứ 7: 7:00 - 12:00"
              }
            ].map((contact, i) => (
              <div key={i} className="text-center p-6 bg-slate-50 rounded-2xl">
                <div className="text-4xl mb-4">{contact.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{contact.title}</h3>
                <p className="text-slate-600 font-medium">{contact.info}</p>
                <p className="text-sm text-slate-500 mt-1">{contact.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto w-full px-6 pb-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-rose-600 p-12 text-white shadow-2xl">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="relative text-center">
            <h3 className="text-4xl font-bold mb-4">Sẵn sàng bắt đầu hành trình chăm sóc sức khỏe?</h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Đăng ký ngay để trải nghiệm dịch vụ xét nghiệm máu chuyên nghiệp, 
              nhận kết quả nhanh chóng và tư vấn từ đội ngũ bác sĩ giàu kinh nghiệm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={PATHS.AUTH.REGISTER}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-indigo-700 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                🚀 Đăng ký ngay
              </Link>
              <Link
                to={PATHS.AUTH.LOGIN}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 ring-2 ring-white/30 text-white font-bold text-lg hover:bg-white/20 hover:ring-white/50 transition-all duration-200"
              >
                👤 Tôi đã có tài khoản
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}