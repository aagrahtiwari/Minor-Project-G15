import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, MapPin, Calendar, ClipboardList, Edit3 } from 'lucide-react';
import './DetailedCase.css';

function DetailedCase() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [caseDetails, setCaseDetails] = useState(null);

  useEffect(() => {
    // Mock fetch case details based on ID
    setCaseDetails({
      id: id,
      house_number: 'C-08',
      owner_name: 'Vikram Singh',
      zone: 'East Zone',
      date: '2023-10-15',
      inspector: 'M. Sharma',
      status: 'Notice Issued',
      remarks: 'Extra floor constructed without permission. Notice served on 2023-10-16. Owner requested 15 days to respond.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      updates: [
        { date: '2023-10-15', text: 'Initial inspection completed. Violation detected.' },
        { date: '2023-10-16', text: 'Show-cause notice drafted and issued to owner.' },
        { date: '2023-10-18', text: 'Owner acknowledged receipt of notice.' }
      ]
    });
  }, [id]);

  if (!caseDetails) return <div className="page-content">Loading...</div>;

  return (
    <div className="animate-fade-in case-detail-container">
      <div className="case-header">
        <button className="btn btn-outline back-btn" onClick={() => navigate('/cases')}>
          <ArrowLeft size={18} /> Back to Cases
        </button>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span className={`badge badge-${caseDetails.status === 'Closed' ? 'success' : 'warning'}`}>
            {caseDetails.status}
          </span>
          <button className="btn btn-primary">
            <Edit3 size={18} /> Update Status
          </button>
        </div>
      </div>

      <div className="case-title-area">
        <h1>Case #{caseDetails.id}</h1>
        <p>Unauthorized Construction at {caseDetails.house_number}, {caseDetails.zone}</p>
      </div>

      <div className="case-content-grid">
        <div className="case-main-info glass-panel">
          <h3>Property Image</h3>
          <div className="property-image-container">
            <img src={caseDetails.image} alt="Property violation" className="property-image" />
          </div>
          
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Field Notes & Remarks</h3>
          <div className="remarks-box">
            <p>{caseDetails.remarks}</p>
          </div>
        </div>

        <div className="case-sidebar">
          <div className="glass-panel info-panel">
            <h3>Case Details</h3>
            
            <div className="info-list">
              <div className="info-item">
                <div className="info-icon"><Home size={18} /></div>
                <div className="info-text">
                  <span className="label">House Number</span>
                  <span className="value">{caseDetails.house_number}</span>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><User size={18} /></div>
                <div className="info-text">
                  <span className="label">Owner Name</span>
                  <span className="value">{caseDetails.owner_name}</span>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><MapPin size={18} /></div>
                <div className="info-text">
                  <span className="label">Area / Zone</span>
                  <span className="value">{caseDetails.zone}</span>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><Calendar size={18} /></div>
                <div className="info-text">
                  <span className="label">Inspection Date</span>
                  <span className="value">{caseDetails.date}</span>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><ClipboardList size={18} /></div>
                <div className="info-text">
                  <span className="label">Assigned Inspector</span>
                  <span className="value">{caseDetails.inspector}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel timeline-panel">
            <h3>Status Updates</h3>
            <div className="timeline">
              {caseDetails.updates.map((update, idx) => (
                <div className="timeline-item" key={idx}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">{update.date}</span>
                    <p>{update.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Importing Home here for the info-item
import { Home } from 'lucide-react';
export default DetailedCase;
