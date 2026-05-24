import { useState, useEffect } from 'react';
import { Plus, Search, Filter } from 'lucide-react';

function DatasetModule() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Mock data for initial render, will be replaced by backend fetch
    setProperties([
      { id: 1, house_number: 'A-12', owner_name: 'Rajesh Kumar', area_zone: 'North Zone', permitted_floors: 3, is_registered: true },
      { id: 2, house_number: 'B-45', owner_name: 'Anita Sharma', area_zone: 'South Zone', permitted_floors: 2, is_registered: true },
      { id: 3, house_number: 'C-08', owner_name: 'Vikram Singh', area_zone: 'East Zone', permitted_floors: 4, is_registered: false },
      { id: 4, house_number: 'D-22', owner_name: 'Meena Gupta', area_zone: 'West Zone', permitted_floors: 3, is_registered: true },
    ]);
  }, []);

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Dataset Module</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Manage area properties and building permissions</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={18} /> Add Property
        </button>
      </div>

      <div className="glass-panel">
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
          <div className="header-search" style={{ width: '300px', backgroundColor: 'var(--bg-primary)' }}>
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search by House No or Owner..." />
          </div>
          <button className="btn btn-outline">
            <Filter size={18} /> Filter by Zone
          </button>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>House No.</th>
                <th>Owner Name</th>
                <th>Area / Zone</th>
                <th>Permitted Floors</th>
                <th>Registry Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {properties.map(prop => (
                <tr key={prop.id}>
                  <td style={{ fontWeight: '500' }}>{prop.house_number}</td>
                  <td>{prop.owner_name}</td>
                  <td>{prop.area_zone}</td>
                  <td>{prop.permitted_floors}</td>
                  <td>
                    {prop.is_registered ? (
                      <span className="badge badge-success">Registered</span>
                    ) : (
                      <span className="badge badge-danger">Unregistered</span>
                    )}
                  </td>
                  <td>
                    <button className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>View</button>
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

export default DatasetModule;
