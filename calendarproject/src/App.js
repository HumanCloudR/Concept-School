import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import DayView from './pages/DayView';
import MonthView from './pages/MonthView';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/calendar/day" replace />} />
          <Route path="calendar">
            <Route index element={<Navigate to="/calendar/day" replace />} />
            <Route path="day" element={<DayView />} />
            <Route path="month" element={<MonthView />} />
            <Route path="week" element={<DayView />} /> {/* Placeholder for week view */}
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;