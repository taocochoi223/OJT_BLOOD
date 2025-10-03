  import { Toaster } from "@/components/ui/toaster";
  import { Toaster as Sonner } from "@/components/ui/sonner";
  import { TooltipProvider } from "@/components/ui/tooltip";
  import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
  import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
  import { SidebarProvider } from "@/components/ui/sidebar";
  import { AuthProvider } from "@/contexts/AuthContext";
  import RouterCustom from "./routes/RouterCustom";


  import PATHS from "./routes/paths";
  import HomePage from "./pages/HomePage";
  import Login from "./pages/Auth/Login";
  import Register from "./pages/Auth/Register";
  import Unauthorized from "./pages/Auth/Unauthorized";
  const queryClient = new QueryClient();

  const App = () => (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Routes có Header + Footer */}
              <Route element={<RouterCustom showHeader={false} showFooter={true} />}>
                <Route path={PATHS.HOME} element={<HomePage />} />
              </Route>
              <Route>
                <Route path={PATHS.AUTH.LOGIN} element={<Login />} />
                <Route path={PATHS.AUTH.REGISTER} element={<Register />} />
                <Route path={PATHS.AUTH.UNAUTHORIZED} element={<Unauthorized />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider >
  );

  export default App;