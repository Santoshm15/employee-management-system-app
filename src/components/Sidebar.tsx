import {
  LayoutDashboard,
  Mail,
  BriefcaseBusiness,
  Users,
  FileText,
  UserRound,
  BookOpen,
  Scale,
  WalletCards,
  LogOut,
} from "lucide-react";

type SidebarProps = {
  activePage: string;
  setActivePage: (page: string) => void;
};

function Sidebar({ activePage, setActivePage }: SidebarProps) {
  return (
    <aside className="sidebar">
      {/* LOGO */}
      <div className="sidebar-logo">
        <div className="logo-symbol">✦</div>
        <span>XCELTECH</span>
      </div>

      {/* ADMIN */}
      <div className="admin-profile">
        <div className="admin-avatar">A</div>

        <div className="admin-info">
          <h3>Aman Admin</h3>
          <span>Admin</span>
        </div>
      </div>

      {/* FEATURES */}
      <div className="sidebar-section">
        <p className="section-title">Features</p>

        <div
          className={`sidebar-item ${
            activePage === "dashboard" ? "active" : ""
          }`}
          onClick={() => setActivePage("dashboard")}
        >
          <LayoutDashboard size={21} />
          <span>Dashboard</span>
        </div>

        <div className="sidebar-item">
          <Mail size={21} />
          <span>Messages</span>
          <span className="notification">13</span>
        </div>
      </div>

      {/* RECRUITMENT */}
      <div className="sidebar-section">
        <p className="section-title">Recruitment</p>

        <div className="sidebar-item">
          <BriefcaseBusiness size={21} />
          <span>Jobs</span>
        </div>

        <div className="sidebar-item">
          <Users size={21} />
          <span>Candidates</span>
        </div>

        <div className="sidebar-item">
          <FileText size={21} />
          <span>Resumes</span>
        </div>
      </div>

      {/* ORGANIZATION */}
      <div className="sidebar-section">
        <p className="section-title">Organization</p>

        <div
          className={`sidebar-item ${
            activePage === "employee-management" ? "active" : ""
          }`}
          onClick={() => setActivePage("employee-management")}
        >
          <UserRound size={21} />
          <span>Employee Management</span>
        </div>

        <div className="sidebar-item">
          <BookOpen size={21} />
          <span>Leave Management</span>
        </div>

        <div className="sidebar-item">
          <Scale size={21} />
          <span>Performance Management</span>
        </div>

        <div className="sidebar-item">
          <WalletCards size={21} />
          <span>Payroll Management</span>
        </div>
      </div>

      {/* LOGOUT */}
      <button className="logout-button">
        <LogOut size={20} />
        <span>Log Out</span>
      </button>

      {/* BOTTOM COLORS */}
      <div className="sidebar-bottom">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </aside>
  );
}

export default Sidebar;
