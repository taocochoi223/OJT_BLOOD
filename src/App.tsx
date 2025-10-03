  import { Toaster } from "@/components/ui/toaster";
  import { Toaster as Sonner } from "@/components/ui/sonner";
  import { TooltipProvider } from "@/components/ui/tooltip";
  import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
  import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
  import { SidebarProvider } from "@/components/ui/sidebar";
  import { AuthProvider } from "@/contexts/AuthContext";



  import PATHS from "./routes/paths";
  import HomePage from "./pages/HomePage";
  import Login from "./pages/auth/Login";
  import Register from "./pages/auth/Register";
  import Unauthorized from "./pages/auth/Unauthorized";
  import PatientHome from "./pages/patients/PatientHome";
  import Profile from "./pages/patients/Profile";



  const queryClient = new QueryClient();

  const App = () => (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
                <Route path={PATHS.HOME} element={<HomePage />} />
                <Route path={PATHS.AUTH.LOGIN} element={<Login />} />
                <Route path={PATHS.AUTH.REGISTER} element={<Register />} />
                <Route path={PATHS.AUTH.UNAUTHORIZED} element={<Unauthorized />} />
                <Route path={PATHS.PATIENTS.HOME} element={<PatientHome />} />
                <Route path={PATHS.PATIENTS.PROFILE} element={<Profile />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider >
  );

  export default App;