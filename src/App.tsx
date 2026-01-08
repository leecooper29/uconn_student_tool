import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import HomePage from "./pages/homePage";
import NetworkPage from "./pages/network-page/networkPage";
import StudentPage from "./pages/student-page/studentPage";
import ProfilePage from "./pages/tutoring/tutoring";
import SignIn from "./pages/user/signin";
import Tutoring from "./pages/tutoring/tutoring";
import { AuthProvider } from "./shared/ui/layout/main-nav/contexts/AuthContext";

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Main app pages */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home-page" element={<HomePage />} />
            <Route path="/network" element={<NetworkPage />} />
            <Route path="/tutoring" element={<Tutoring />} />
            <Route path="/student/id" element={<StudentPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          {/* Auth pages */}
          <Route element={<AuthLayout />}>
            <Route path="/signin" element={<SignIn />} />
          </Route>

          {/* Fallback: redirect unknown routes to home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;