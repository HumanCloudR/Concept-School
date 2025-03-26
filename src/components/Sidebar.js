import { Link } from 'react-router-dom';
import '../App.css';
import { useState } from 'react';
import { FiHome, FiCalendar, FiUser, FiBookOpen, FiFileText, FiDollarSign, FiUserCheck, FiLogOut } from 'react-icons/fi'; // Icons from react-icons

function Sidebar() {
  const [teacherDropdown, setTeacherDropdown] = useState(true);
  const [studentDropdown, setStudentDropdown] = useState(true);

  return (
    <div className="sidebar">
      <p><FiHome /> Dashboard</p>
      <p><FiCalendar /> Calendar</p>

      
      <div>
        <p onClick={() => setTeacherDropdown(!teacherDropdown)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
          <FiUser /> Teachers {teacherDropdown ? '▲' : '▼'}
        </p>
        {teacherDropdown && (
          <div className="dropdown">
            <p><FiUserCheck /> List</p>
            <p><FiBookOpen /> Papers</p>
            <p><FiFileText /> Question Bank</p>
            <p><FiDollarSign /> Salary</p>
          </div>
        )}
      </div>

      
      <div>
        <p onClick={() => setStudentDropdown(!studentDropdown)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
          <FiUser /> Students {studentDropdown ? '▲' : '▼'}
        </p>
        {studentDropdown && (
          <div className="dropdown">
            <Link to="/attendance"><FiUserCheck /> Attendance</Link>
            <Link to="/exams"><FiBookOpen /> Exams</Link>
            <Link to="/results"><FiFileText /> Results</Link>
          </div>
        )}
      </div>

      <p><FiDollarSign /> Fees</p>
      <p><FiUser /> Profile</p>
      <p><FiLogOut /> Logout</p>
    </div>
  );
}

export default Sidebar;
