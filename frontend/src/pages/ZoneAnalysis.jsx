import { useState, useEffect } from 'react';
import { Map, AlertTriangle, CheckCircle, BarChart2 } from 'lucide-react';
import './ZoneAnalysis.css';

function ZoneAnalysis() {
  const [zones, setZones] = useState([]);

  useEffect(() => {
    // Mock zone data
    setZones([
      { name: 'North Zone', authorized: 1450, unauthorized: 85, risk: 'High' },
      { name: 'South Zone', authorized: 2100, unauthorized: 42, risk: 'Medium' },
      { name: 'East Zone', authorized: 850, unauthorized: 15, risk: 'Low' },
      { name: 'West Zone', authorized: 1920, unauthorized: 95, risk: 'High' },
      { name: 'Central Zone', authorized: 3100, unauthorized: 30, risk: 'Low' },
    ]);
  }, []);

  const getRiskBadge = (risk) => {
    switch(risk) {
      case 'High': return <span className="badge badge-danger">High Risk</span>;
      case 'Medium': return <span className="badge badge-warning">Medium Risk</span>;
      case 'Low': return <span className="badge badge-success">Low Risk</span>;
      default: return null;
    }
  };

  const maxTotal = Math.max(...zones.map(z => z.authorized + z.unauthorized));

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h1 style={{ fontSize: '1.8rem', background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Zone Analysis</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Comparative overview of violations across different zones</p>
      </div>

      <div className="zone-grid">
        <div className="glass-panel" style={{ gridColumn: 'span 2' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BarChart2 size={20} className="text-accent" /> Violation Distribution
            </h3>
          </div>

          <div className="zone-bars-container">
            {zones.map((zone, idx) => {
              const total = zone.authorized + zone.unauthorized;
              const authPercent = (zone.authorized / maxTotal) * 100;
              const unauthPercent = (zone.unauthorized / maxTotal) * 100;
              
              return (
                <div className="zone-bar-row" key={idx}>
                  <div className="zone-name">{zone.name}</div>
                  <div className="zone-bar-track">
                    <div className="zone-bar auth" style={{ width: `${authPercent}%` }}></div>
                    <div className="zone-bar unauth" style={{ width: `${unauthPercent}%` }}></div>
                  </div>
                  <div className="zone-stats">
                    <span className="stat auth"><CheckCircle size={14} /> {zone.authorized}</span>
                    <span className="stat unauth"><AlertTriangle size={14} /> {zone.unauthorized}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="glass-panel">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Map size={20} className="text-accent" /> High Risk Areas
          </h3>
          
          <div className="risk-list">
            {zones.sort((a, b) => b.unauthorized - a.unauthorized).map((zone, idx) => (
              <div className="risk-item" key={idx}>
                <div className="risk-info">
                  <h4>{zone.name}</h4>
                  <p>{zone.unauthorized} unauthorized constructions</p>
                </div>
                {getRiskBadge(zone.risk)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZoneAnalysis;
