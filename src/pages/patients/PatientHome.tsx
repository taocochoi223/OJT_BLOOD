import React from "react";
import Header from "../../components/layout/PatientHeader";
import Footer from "../../components/layout/PatientFooter";
import { Link } from "react-router-dom";
import PATHS from "../../routes/paths";

interface Appointment {
  id: number;
  doctor: string;
  date: string;
  status: "pending" | "completed" | "cancelled";
}

const dummyAppointments: Appointment[] = [
  { id: 1, doctor: "Dr. John Doe", date: "2025-10-05", status: "pending" },
  { id: 2, doctor: "Dr. Alice Smith", date: "2025-10-08", status: "completed" },
  { id: 3, doctor: "Dr. Bob Johnson", date: "2025-10-10", status: "pending" },
];

export default function PatientHome() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-poppins pt-20">
      <Header />
      <main className="flex-1 p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Chào mừng, Patient!</h2>

        {/* Quick stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500">Appointments</h3>
            <p className="text-2xl font-bold">{dummyAppointments.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500">Upcoming Tests</h3>
            <p className="text-2xl font-bold">2</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500">Completed Tests</h3>
            <p className="text-2xl font-bold">5</p>
          </div>
        </div>

        {/* Recent Appointments */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Appointments</h3>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-gray-500">Doctor</th>
                <th className="px-4 py-2 text-left text-gray-500">Date</th>
                <th className="px-4 py-2 text-left text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {dummyAppointments.map((appt) => (
                <tr key={appt.id}>
                  <td className="px-4 py-2">{appt.doctor}</td>
                  <td className="px-4 py-2">{appt.date}</td>
                  <td className="px-4 py-2 capitalize">
                    <span
                      className={`px-2 py-1 rounded-full text-white text-sm ${
                        appt.status === "pending"
                          ? "bg-yellow-500"
                          : appt.status === "completed"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {appt.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <Link
            to={PATHS.PATIENTS.APPOINTMENTS}
            className="text-blue-600 font-medium hover:underline"
          >
            Xem tất cả appointments
          </Link>
        </div>
      </main>

    <Footer />
    </div>
  );
}
