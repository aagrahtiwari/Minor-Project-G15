import { useState, useEffect } from 'react';
import { 
  Activity, 
  Home, 
  AlertOctagon, 
  CheckCircle, 
  TrendingUp 
} from 'lucide-react';
import './Dashboard.css';

function Dashboard() {
  const [metrics, setMetrics] = useState({
    system_accuracy: '94%',
    total_properties_monitored: 0,
    active_cases: 0,
    recent_surveys: 0,
    unauthorized_constructions_detected: 0
  });

  useEffect(() => {
    // We will fetch from our FastAPI backend once connected,
    // for now using mock data simulating the response
    setMetrics({
      system_accuracy: '94%',
      total_properties_monitored: 12450,
      active_cases: 42,
      recent_surveys: 328,
      unauthorized_constructions_detected: 85
    });
  }, []);

  return (
    <div className="dashboard-container animate-fade-in">
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <p>Real-time analytics for unauthorized construction monitoring</p>
      </div>

      <div className="metrics-grid">
        <div className="metric-card glass-panel accuracy-card">
          <div className="metric-icon accuracy-icon">
            <Activity size={24} />
          </div>
          <div className="metric-content">
            <h3>System Accuracy</h3>
            <div className="metric-value highlight">{metrics.system_accuracy}</div>
            <p className="metric-trend positive">
              <TrendingUp size={14} /> +1.2% from last month
            </p>
          </div>
        </div>

        <div className="metric-card glass-panel">
          <div className="metric-icon primary-icon">
            <Home size={24} />
          </div>
          <div className="metric-content">
            <h3>Monitored Properties</h3>
            <div className="metric-value">{metrics.total_properties_monitored.toLocaleString()}</div>
          </div>
        </div>

        <div className="metric-card glass-panel">
          <div className="metric-icon warning-icon">
            <AlertOctagon size={24} />
          </div>
          <div className="metric-content">
            <h3>Active Cases</h3>
            <div className="metric-value">{metrics.active_cases}</div>
          </div>
        </div>

        <div className="metric-card glass-panel">
          <div className="metric-icon danger-icon">
            <AlertOctagon size={24} />
          </div>
          <div className="metric-content">
            <h3>Unauthorized Detected</h3>
            <div className="metric-value">{metrics.unauthorized_constructions_detected}</div>
          </div>
        </div>
      </div>

      <div className="dashboard-content-grid">
        <div className="glass-panel chart-container">
          <div className="panel-header">
            <h3>Recent Detection Trends</h3>
            <select className="form-control" style={{width: 'auto'}}>
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
            </select>
          </div>
          <div className="mock-chart">
            {/* We will replace this with a real chart library if needed */}
            <div className="chart-placeholder">
              <div className="bar-group"><div className="bar auth" style={{height: '80%'}}></div><div className="bar unauth" style={{height: '20%'}}></div></div>
              <div className="bar-group"><div className="bar auth" style={{height: '75%'}}></div><div className="bar unauth" style={{height: '15%'}}></div></div>
              <div className="bar-group"><div className="bar auth" style={{height: '90%'}}></div><div className="bar unauth" style={{height: '5%'}}></div></div>
              <div className="bar-group"><div className="bar auth" style={{height: '60%'}}></div><div className="bar unauth" style={{height: '35%'}}></div></div>
              <div className="bar-group"><div className="bar auth" style={{height: '85%'}}></div><div className="bar unauth" style={{height: '10%'}}></div></div>
            </div>
            <div className="chart-legend">
              <span><span className="legend-dot auth"></span> Authorized</span>
              <span><span className="legend-dot unauth"></span> Unauthorized</span>
            </div>
          </div>
        </div>

        <div className="glass-panel alerts-container">
          <div className="panel-header">
            <h3>Recent Alerts</h3>
          </div>
          <div className="alerts-list">
            <div className="alert-item">
              <div className="alert-icon danger"><AlertOctagon size={16} /></div>
              <div className="alert-content">
                <h4>Unauthorized floor detected</h4>
                <p>Zone: North | Property: #45-B</p>
                <span className="alert-time">2 hours ago</span>
              </div>
            </div>
            <div className="alert-item">
              <div className="alert-icon danger"><AlertOctagon size={16} /></div>
              <div className="alert-content">
                <h4>Commercial use in residential zone</h4>
                <p>Zone: South | Property: #112-C</p>
                <span className="alert-time">5 hours ago</span>
              </div>
            </div>
            <div className="alert-item">
              <div className="alert-icon success"><CheckCircle size={16} /></div>
              <div className="alert-content">
                <h4>Case #1042 Closed</h4>
                <p>Demolition completed</p>
                <span className="alert-time">1 day ago</span>
              </div>
            </div>
          </div>
          <button className="btn btn-outline" style={{width: '100%', marginTop: '1rem'}}>
            View All Alerts
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
