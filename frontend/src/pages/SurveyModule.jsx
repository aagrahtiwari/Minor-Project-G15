import { useState } from 'react';
import { UploadCloud, ShieldCheck, ShieldAlert, Loader } from 'lucide-react';
import './SurveyModule.css';

function SurveyModule() {
  const [file, setFile] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(URL.createObjectURL(e.target.files[0]));
      setResult(null);
    }
  };

  const handleAnalyze = () => {
    if (!file) return;
    setIsScanning(true);
    
    // Simulate API call and AI processing delay
    setTimeout(() => {
      setIsScanning(false);
      // Mocking 94% accuracy result based on implementation plan
      const isAuthorized = Math.random() > 0.5; // Random for demo
      setResult({
        authorized: isAuthorized,
        confidence: isAuthorized ? '98.5%' : '94.2%',
        detected_floors: isAuthorized ? 3 : 5,
        permitted_floors: 3,
        zone: 'North Zone'
      });
    }, 2500);
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h1 style={{ fontSize: '1.8rem', background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Survey Module</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Upload property images for AI-powered authorization analysis</p>
      </div>

      <div className="survey-container">
        <div className="upload-section glass-panel">
          <h3>Upload Image</h3>
          
          <div className="upload-dropzone">
            {file ? (
              <div className="preview-container">
                <img src={file} alt="Property preview" className="image-preview" />
                {isScanning && (
                  <div className="scanning-overlay">
                    <div className="scan-line"></div>
                    <Loader className="spinner" size={32} />
                    <span>Analyzing Image...</span>
                  </div>
                )}
              </div>
            ) : (
              <label className="drop-label">
                <UploadCloud size={48} color="var(--accent-primary)" />
                <span className="drop-text">Click or drag image to upload</span>
                <span className="drop-subtext">Supports JPG, PNG (Max 5MB)</span>
                <input type="file" accept="image/*" onChange={handleFileChange} hidden />
              </label>
            )}
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
            <button 
              className="btn btn-outline" 
              onClick={() => { setFile(null); setResult(null); }}
              disabled={isScanning || !file}
            >
              Clear
            </button>
            <button 
              className="btn btn-primary" 
              onClick={handleAnalyze}
              disabled={isScanning || !file}
              style={{ width: '150px' }}
            >
              {isScanning ? 'Processing...' : 'Run Analysis'}
            </button>
          </div>
        </div>

        <div className="result-section glass-panel">
          <h3>Analysis Results</h3>
          
          {!result && !isScanning && (
            <div className="empty-result">
              <ShieldCheck size={48} color="var(--text-muted)" opacity={0.3} />
              <p>Upload and analyze an image to see results here</p>
            </div>
          )}

          {isScanning && (
            <div className="empty-result">
              <Loader className="spinner" size={32} color="var(--accent-primary)" />
              <p>AI is verifying against MCD dataset...</p>
            </div>
          )}

          {result && (
            <div className="result-details animate-fade-in">
              <div className={`status-banner ${result.authorized ? 'authorized' : 'unauthorized'}`}>
                {result.authorized ? (
                  <><ShieldCheck size={24} /> Authorized Construction</>
                ) : (
                  <><ShieldAlert size={24} /> Unauthorized Construction Detected</>
                )}
              </div>

              <div className="result-stats">
                <div className="stat-row">
                  <span className="stat-label">AI Confidence Score</span>
                  <span className="stat-value">{result.confidence}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Area / Zone</span>
                  <span className="stat-value">{result.zone}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Permitted Floors</span>
                  <span className="stat-value">{result.permitted_floors}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Detected Floors</span>
                  <span className={`stat-value ${result.detected_floors > result.permitted_floors ? 'violation' : ''}`}>
                    {result.detected_floors}
                  </span>
                </div>
              </div>

              {!result.authorized && (
                <div className="action-area">
                  <p className="warning-text">Violation: Floor count exceeds permitted limit.</p>
                  <button className="btn btn-danger" style={{ width: '100%', marginTop: '1rem' }}>
                    <ShieldAlert size={18} /> Add to Cases Section
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SurveyModule;
