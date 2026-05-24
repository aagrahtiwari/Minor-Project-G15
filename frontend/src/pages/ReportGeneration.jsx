import { useState } from 'react';
import { FileText, Download, Filter, Calendar } from 'lucide-react';

function ReportGeneration() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      // Simulate download
      alert("Report downloaded successfully as PDF.");
    }, 1500);
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h1 style={{ fontSize: '1.8rem', background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Report Generation</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Generate and download official PDF reports for administrative use</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3>Configure Report</h3>
          
          <div className="form-group">
            <label>Report Type</label>
            <select className="form-control">
              <option>Area-wise Summary</option>
              <option>Detailed Violations Report</option>
              <option>Inspector Activity Log</option>
            </select>
          </div>

          <div className="form-group">
            <label>Select Zone</label>
            <select className="form-control">
              <option>All Zones</option>
              <option>North Zone</option>
              <option>South Zone</option>
              <option>East Zone</option>
              <option>West Zone</option>
              <option>Central Zone</option>
            </select>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label>From Date</label>
              <div style={{ position: 'relative' }}>
                <input type="date" className="form-control" defaultValue="2023-09-01" />
              </div>
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label>To Date</label>
              <input type="date" className="form-control" defaultValue="2023-10-31" />
            </div>
          </div>

          <button 
            className="btn btn-primary" 
            style={{ padding: '1rem', marginTop: '1rem' }}
            onClick={handleDownload}
            disabled={isGenerating}
          >
            {isGenerating ? 'Generating PDF...' : <><Download size={18} /> Download PDF Report</>}
          </button>
        </div>

        <div className="glass-panel" style={{ background: 'var(--bg-tertiary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            <FileText size={48} opacity={0.5} />
            <div>
              <h3>Report Preview</h3>
              <p>Area-wise Summary (All Zones)</p>
            </div>
          </div>

          <div style={{ 
            background: '#fff', 
            borderRadius: 'var(--radius-sm)', 
            height: '400px', 
            padding: '2rem',
            color: '#333',
            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <div style={{ borderBottom: '2px solid #ddd', paddingBottom: '1rem', marginBottom: '1rem', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.2rem', color: '#000' }}>MCD Unauthorized Construction Report</h2>
              <p style={{ fontSize: '0.8rem', color: '#666' }}>Generated: Oct 31, 2023</p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
                <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Executive Summary</h4>
                <p style={{ fontSize: '0.8rem', color: '#555' }}>During the selected period, 9,420 properties were analyzed. The system detected 267 unauthorized constructions with a 94% accuracy rate. High risk identified in North and West zones.</p>
              </div>
              
              <div style={{ fontSize: '0.8rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '0.5rem 0' }}>
                  <strong>Zone</strong><strong>Violations</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '0.5rem 0' }}>
                  <span>North Zone</span><span>85</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '0.5rem 0' }}>
                  <span>West Zone</span><span>95</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '0.5rem 0' }}>
                  <span>South Zone</span><span>42</span>
                </div>
              </div>
            </div>
            
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(transparent, #fff)' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportGeneration;
