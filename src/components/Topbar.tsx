import { Menu, Search, Bell, Settings, Mail, ChevronDown } from "lucide-react";

function Topbar() {
  return (
    <header className="topbar">
      {/* Hamburger */}
      <button className="menu-button">
        <Menu size={32} strokeWidth={2.5} />
      </button>

      {/* Search Area */}
      <div className="search-box">
        <button className="candidate-button">
          All Candidates
          <ChevronDown size={14} />
        </button>

        <input type="text" placeholder="Search..." />

        <Search className="search-icon" size={23} />
      </div>

      {/* Right Side Icons */}
      <div className="topbar-actions">
        <button className="top-icon notification-icon">
          <Bell size={19} />

          <span className="top-badge">13</span>
        </button>

        <button className="top-icon settings-icon">
          <Settings size={19} />
        </button>

        <button className="top-icon mail-icon">
          <Mail size={19} />

          <span className="top-badge">13</span>
        </button>
      </div>
    </header>
  );
}

export default Topbar;
