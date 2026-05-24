import { useState, useEffect } from 'react';
import { Search, Filter, AlertTriangle, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function CasesModule() {
  const [cases, setCases] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Mock data for cases
    setCases([
      { id: 1042, house_number: 'C-08', owner_name: 'Vikram Singh', zone: 'East Zone', date: '2023-10-15', inspector: 'M. Sharma', status: 'Notice Issued' },
      { id: 1045, house_number: 'B-12', owner_name: 'Unknown', zone: 'North Zone', date: '2023-10-18', inspector: 'R. Verma', status: 'Open' },
      { id: 1048, house_number: 'D-44', owner_name: 'A. Patel', zone: 'West Zone', date: '2023-10-20', inspector: 'S. Kumar', status: 'Under Review' },
      { id: 1021, house_number: 'A-05', owner_name: 'L. Gupta', zone: 'South Zone', date: '2023-09-05', inspector: 'M. Sharma', status: 'Closed' },
    ]);
  }, []);

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Open': return <span className="badge badge-danger">Open</span>;
      case 'Notice Issued': return <span className="badge badge-warning">Notice Issued</span>;
      case 'Under Review': return <span className="badge badge-warning">Under Review</span>;
      case 'Closed': return <span className="badge badge-success">Closed</span>;
      default: return <span className="badge badge-warning">{status}</span>;
    }
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Cases Section</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Manage and track identified unauthorized construction cases</p>
        </div>
        <button className="btn btn-danger">
          <AlertTriangle size={18} /> Report New Case
        </button>
      </div>

      <div className="glass-panel">
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
          <div className="header-search" style={{ width: '300px', backgroundColor: 'var(--bg-primary)' }}>
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search Case ID or House No..." />
          </div>
          <button className="btn btn-outline">
            <Filter size={18} /> Status
          </button>
          <button className="btn btn-outline">
            <Filter size={18} /> Zone
          </button>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Case ID</th>
                <th>House No.</th>
                <th>Zone</th>
                <th>Inspection Date</th>
                <th>Inspector</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cases.map(c => (
                <tr key={c.id} style={{ cursor: 'pointer' }} onClick={() => navigate(`/cases/${c.id}`)}>
                  <td style={{ fontWeight: '600', color: 'var(--accent-primary)' }}>#{c.id}</td>
                  <td style={{ fontWeight: '500' }}>{c.house_number}</td>
                  <td>{c.zone}</td>
                  <td>{c.date}</td>
                  <td>{c.inspector}</td>
                  <td>{getStatusBadge(c.status)}</td>
                  <td>
                    <button className="btn btn-outline" style={{ padding: '0.4rem', borderRadius: '50%' }} onClick={(e) => { e.stopPropagation(); navigate(`/cases/${c.id}`); }}>
                      <ChevronRight size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CasesModule;
