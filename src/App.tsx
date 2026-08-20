import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import EmployeeManagement from "./components/EmployeeManagement";
import EmployeeProfile from "./pages/EmployeeProfile";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import "./App.css";

function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activePage, setActivePage] = useState("dashboard");

  const handleSetActivePage = (page: string) => {
    setActivePage(page);

    if (page === "employee-management") {
      navigate("/employees");
    }

    if (page === "dashboard") {
      navigate("/");
    }
  };

  const isEmployeeProfile = location.pathname.startsWith("/employee-profile");

  const isEmployeeManagement =
    location.pathname === "/employees" ||
    location.pathname === "/employee-management";

  return (
    <div className="app">
      <Sidebar activePage={activePage} setActivePage={handleSetActivePage} />

      <div className="main-area">
        <Topbar />

        <main className="page-content">
          {isEmployeeProfile && <EmployeeProfile />}

          {isEmployeeManagement && <EmployeeManagement />}

          {!isEmployeeProfile &&
            !isEmployeeManagement &&
            location.pathname === "/" && (
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
        <Route path="/" element={<AppLayout />} />

        <Route path="/employees" element={<AppLayout />} />

        <Route path="/employee-management" element={<AppLayout />} />

        <Route path="/employee-profile/:id" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
