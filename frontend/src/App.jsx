import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import DatasetModule from './pages/DatasetModule';
import SurveyModule from './pages/SurveyModule';
import CasesModule from './pages/CasesModule';
import DetailedCase from './pages/DetailedCase';
import ZoneAnalysis from './pages/ZoneAnalysis';
import ReportGeneration from './pages/ReportGeneration';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Header />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dataset" element={<DatasetModule />} />
              <Route path="/survey" element={<SurveyModule />} />
              <Route path="/cases" element={<CasesModule />} />
              <Route path="/cases/:id" element={<DetailedCase />} />
              <Route path="/zones" element={<ZoneAnalysis />} />
              <Route path="/reports" element={<ReportGeneration />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
