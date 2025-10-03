const PATHS = {
  // Public
  HOME: "/",

  AUTH: {
  LOGIN: "/login",
  REGISTER: "/register",
  UNAUTHORIZED: "/unauthorized",
  },

  // Patient
  PATIENTS: {
    PROFILE: "/patients/profile",
    APPOINTMENTS: "/patients/appointments",
    HISTORY: "/patients/history",
    PRESCRIPTIONS: "/patients/prescriptions",
    NOTIFICATIONS: "/patients/notifications",
    CONTACT: "/patients/contact",
  },


  DOCTORS:{
    HOME: "/doctor",
    APPOINTMENTS: "/doctor/appointments",
    PATIENTS: "/doctor/patients",
  },


  ADMINS:{
    HOME: "/admin",
    USERS: "/admin/users",
    DOCTORS: "/admin/doctors",
  },
  // Errors
  NOT_FOUND: "*",
};

export default PATHS;
