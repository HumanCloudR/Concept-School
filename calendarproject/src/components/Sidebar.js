import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaChalkboardTeacher, FaUserGraduate, FaWallet, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { MdDashboard, MdEventNote } from 'react-icons/md';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const [teachersExpanded, setTeachersExpanded] = useState(true);
  const [studentsExpanded, setStudentsExpanded] = useState(true);

  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <NavLink to="/dashboard" className="sidebar-link">
          <MdDashboard className="sidebar-icon" />
          <span>Dashboard</span>
        </NavLink>
      </div>

      <div className="sidebar-item active">
        <NavLink to="/calendar/day" className="sidebar-link">
          <MdEventNote className="sidebar-icon" />
          <span>Calender</span>
        </NavLink>
      </div>

      <div className="sidebar-item">
        <div 
          className="sidebar-link"
          onClick={() => setTeachersExpanded(!teachersExpanded)}
        >
          <FaChalkboardTeacher className="sidebar-icon" />
          <span>Teachers</span>
          <span className="expand-icon">{teachersExpanded ? '▼' : '►'}</span>
        </div>
        {teachersExpanded && (
          <div className="sidebar-submenu">
            <div className="submenu-item">List</div>
            <div className="submenu-item">Papers</div>
            <div className="submenu-item">Question Bank</div>
            <div className="submenu-item">Salary</div>
          </div>
        )}
      </div>

      <div className="sidebar-item">
        <div 
          className="sidebar-link"
          onClick={() => setStudentsExpanded(!studentsExpanded)}
        >
          <FaUserGraduate className="sidebar-icon" />
          <span>Students</span>
          <span className="expand-icon">{studentsExpanded ? '▼' : '►'}</span>
        </div>
        {studentsExpanded && (
          <div className="sidebar-submenu">
            <div className="submenu-item">Attendance</div>
            <div className="submenu-item">Exams</div>
            <div className="submenu-item">Results</div>
          </div>
        )}
      </div>

      <div className="sidebar-item">
        <NavLink to="/fees" className="sidebar-link">
          <FaWallet className="sidebar-icon" />
          <span>Fees</span>
        </NavLink>
      </div>

      <div className="sidebar-item">
        <NavLink to="/profile" className="sidebar-link">
          <FaUser className="sidebar-icon" />
          <span>Profile</span>
        </NavLink>
      </div>

      <div className="sidebar-item">
        <NavLink to="/logout" className="sidebar-link">
          <FaSignOutAlt className="sidebar-icon" />
          <span>Logout</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;