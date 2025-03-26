import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import FilterStudentCount from './components/FilterStudentCount';
import FilterSelectClass from './components/FilterSelectClass';
import FilterYear from './components/FilterYear';
import Attendance from './pages/Attendance';
import Exams from './pages/Exams';
import Results from './pages/Results';
import Result from './pages/Result';
function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <div className="content-area">
          <div className="filters">
            <FilterStudentCount />
            <FilterSelectClass />
            <FilterYear />
          </div>
          <Routes>
            <Route path="/" element={<Exams />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/results" element={<Results />} />
            <Route path="/result" element={<Result />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
