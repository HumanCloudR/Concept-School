import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import '../styles/CalendarHeader.css';

const CalendarHeader = ({ currentMonth, onPrevMonth, onNextMonth }) => {
  const location = useLocation();

  return (
    <div className="calendar-header">
      <div className="calendar-title">
        <h2>Calender</h2>
      </div>
      
      <div className="month-navigation">
        <button className="nav-btn" onClick={onPrevMonth}>
          <MdChevronLeft />
        </button>
        <span className="current-month">{currentMonth}</span>
        <button className="nav-btn" onClick={onNextMonth}>
          <MdChevronRight />
        </button>
      </div>
      
      <div className="view-options">
        <NavLink 
          to="/calendar/day" 
          className={({ isActive }) => `view-option ${isActive ? 'active' : ''}`}
        >
          Day
        </NavLink>
        <NavLink 
          to="/calendar/week" 
          className={({ isActive }) => `view-option ${isActive ? 'active' : ''}`}
        >
          Week
        </NavLink>
        <NavLink 
          to="/calendar/month" 
          className={({ isActive }) => `view-option ${isActive ? 'active' : ''}`}
        >
          Month
        </NavLink>
      </div>
    </div>
  );
};

export default CalendarHeader;