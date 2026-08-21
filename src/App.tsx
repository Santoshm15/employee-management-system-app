import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";

import EmployeeManagement from "./components/EmployeeManagement";
import EmployeeProfile from "./pages/EmployeeProfile";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import "./App.css";

function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  /*
   * Employee Management is the default page.
   * This makes Employee Management active when the application opens.
   */
  const [activePage, setActivePage] = useState(
    location.pathname.startsWith("/employee-profile")
      ? "employee-management"
      : location.pathname === "/employees" ||
          location.pathname === "/employee-management"
        ? "employee-management"
        : "employee-management",
  );

  const handleSetActivePage = (page: string) => {
    setActivePage(page);

    if (page === "employee-management") {
      navigate("/employees");
      return;
    }

    if (page === "dashboard") {
      navigate("/");
      return;
    }
  };

  const isEmployeeProfile = location.pathname.startsWith("/employee-profile");

  const isEmployeeManagement =
    location.pathname === "/employees" ||
    location.pathname === "/employee-management";

  const isDashboard = location.pathname === "/";

  return (
    <div className="app">
      {/* EXISTING SIDEBAR - NO CHANGE */}
      <Sidebar activePage={activePage} setActivePage={handleSetActivePage} />

      <div className="main-area">
        {/* EXISTING TOPBAR - NO CHANGE */}
        <Topbar />

        <main className="page-content">
          {/* EMPLOYEE PROFILE */}
          {isEmployeeProfile && <EmployeeProfile />}

          {/* EMPLOYEE MANAGEMENT */}
          {isEmployeeManagement && <EmployeeManagement />}

          {/* DASHBOARD */}
          {isDashboard && (
            <div>
              <h1>Dashboard</h1>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 
          When application opens at localhost:5173,
          automatically open Employee Management.
        */}
        <Route path="/" element={<Navigate to="/employees" replace />} />

        {/* Employee Management */}
        <Route path="/employees" element={<AppLayout />} />

        <Route path="/employee-management" element={<AppLayout />} />

        {/* Employee Profile */}
        <Route path="/employee-profile/:id" element={<AppLayout />} />

        {/* Optional fallback */}
        <Route path="*" element={<Navigate to="/employees" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
