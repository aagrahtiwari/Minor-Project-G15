import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Database, 
  ScanLine, 
  AlertTriangle, 
  Map, 
  FileText 
} from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/dataset', label: 'Dataset Module', icon: Database },
  { path: '/survey', label: 'Survey Module', icon: ScanLine },
  { path: '/cases', label: 'Cases Section', icon: AlertTriangle },
  { path: '/zones', label: 'Zone Analysis', icon: Map },
  { path: '/reports', label: 'Reports', icon: FileText },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-icon"></div>
          <h2>UCM System</h2>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink 
            key={item.path} 
            to={item.path} 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="avatar">MW</div>
          <div className="user-info">
            <span className="name">MCD Worker</span>
            <span className="role">Inspector</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
