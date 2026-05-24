import { Bell, Search } from 'lucide-react';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <div className="header-search">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Search properties, cases, zones..." />
      </div>
      
      <div className="header-actions">
        <button className="icon-btn">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
