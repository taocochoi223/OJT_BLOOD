import React from "react";
import Header from "../../components/layout/PatientHeader";
import Footer from "../../components/layout/PatientFooter";
import { Link } from "react-router-dom";
import PATHS from "../../routes/paths";

interface Appointment {
  id: number;
  doctor: string;
  date: string;
  time: string;
  status: "pending" | "completed" | "cancelled";
  type: string;
}

interface TestResult {
  id: number;
  testName: string;
  date: string;
  status: "ready" | "processing" | "completed";
  result?: string;
}

const dummyAppointments: Appointment[] = [
  { id: 1, doctor: "BS. Nguyễn Văn A", date: "2024-01-15", time: "09:00", status: "pending", type: "Xét nghiệm máu tổng quát" },
  { id: 2, doctor: "BS. Trần Thị B", date: "2024-01-10", time: "14:30", status: "completed", type: "Xét nghiệm sinh hóa" },
  { id: 3, doctor: "BS. Lê Văn C", date: "2024-01-20", time: "10:15", status: "pending", type: "Xét nghiệm nội tiết" },
];

const dummyTestResults: TestResult[] = [
  { id: 1, testName: "Công thức máu", date: "2024-01-10", status: "ready", result: "Bình thường" },
  { id: 2, testName: "Đường huyết", date: "2024-01-10", status: "ready", result: "5.2 mmol/L" },
  { id: 3, testName: "Cholesterol", date: "2024-01-10", status: "ready", result: "4.8 mmol/L" },
  { id: 4, testName: "Hormone tuyến giáp", date: "2024-01-08", status: "processing" },
];

export default function PatientHome() {
  const currentDate = new Date().toLocaleDateString('vi-VN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const upcomingAppointments = dummyAppointments.filter(appt => appt.status === 'pending');
  const completedTests = dummyTestResults.filter(test => test.status === 'ready').length;
  const processingTests = dummyTestResults.filter(test => test.status === 'processing').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      <main className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-white/20">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-slate-800 mb-2">
                    Chào mừng trở lại! 👋
                  </h1>
                  <p className="text-slate-600 text-lg">
                    {currentDate}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <Link
                    to={PATHS.PATIENTS.APPOINTMENTS}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Đặt lịch mới
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">Lịch hẹn sắp tới</p>
                  <p className="text-3xl font-bold text-indigo-600">{upcomingAppointments.length}</p>
                </div>
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">Kết quả sẵn sàng</p>
                  <p className="text-3xl font-bold text-green-600">{completedTests}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">Đang xử lý</p>
                  <p className="text-3xl font-bold text-amber-600">{processingTests}</p>
                </div>
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">Tổng xét nghiệm</p>
                  <p className="text-3xl font-bold text-blue-600">{dummyTestResults.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upcoming Appointments */}
            <div className="bg-white rounded-2xl shadow-lg border border-white/20 overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-800">Lịch hẹn sắp tới</h3>
                  <Link
                    to={PATHS.PATIENTS.APPOINTMENTS}
                    className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                  >
                    Xem tất cả
                  </Link>
                </div>
              </div>
              <div className="p-6">
                {upcomingAppointments.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingAppointments.map((appt) => (
                      <div key={appt.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-800">{appt.type}</h4>
                          <p className="text-slate-600 text-sm">{appt.doctor}</p>
                          <p className="text-slate-500 text-sm">{appt.date} lúc {appt.time}</p>
                        </div>
                        <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                          Chờ xử lý
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-slate-500">Không có lịch hẹn sắp tới</p>
                  </div>
                )}
          </div>
        </div>

            {/* Recent Test Results */}
            <div className="bg-white rounded-2xl shadow-lg border border-white/20 overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-800">Kết quả gần đây</h3>
                  <Link
                    to={PATHS.PATIENTS.HISTORY}
                    className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                  >
                    Xem tất cả
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {dummyTestResults.slice(0, 3).map((result) => (
                    <div key={result.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800">{result.testName}</h4>
                        <p className="text-slate-500 text-sm">{result.date}</p>
                        {result.result && (
                          <p className="text-slate-600 text-sm font-medium">{result.result}</p>
                        )}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        result.status === 'ready' 
                          ? 'bg-green-100 text-green-800' 
                          : result.status === 'processing'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {result.status === 'ready' ? 'Sẵn sàng' : 
                         result.status === 'processing' ? 'Đang xử lý' : 'Hoàn thành'}
                    </span>
                    </div>
              ))}
                </div>
              </div>
            </div>
        </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Thao tác nhanh</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            to={PATHS.PATIENTS.APPOINTMENTS}
                className="group bg-white rounded-2xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Đặt lịch hẹn</h4>
                <p className="text-slate-600 text-sm">Đặt lịch xét nghiệm mới</p>
              </Link>

              <Link
                to={PATHS.PATIENTS.HISTORY}
                className="group bg-white rounded-2xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Lịch sử xét nghiệm</h4>
                <p className="text-slate-600 text-sm">Xem kết quả đã lưu</p>
              </Link>

              <Link
                to={PATHS.PATIENTS.PROFILE}
                className="group bg-white rounded-2xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Thông tin cá nhân</h4>
                <p className="text-slate-600 text-sm">Cập nhật hồ sơ</p>
          </Link>

              <div className="group bg-white rounded-2xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Hỗ trợ</h4>
                <p className="text-slate-600 text-sm">Liên hệ tư vấn</p>
              </div>
            </div>
          </div>
        </div>
      </main>

    <Footer />
    </div>
  );
}
