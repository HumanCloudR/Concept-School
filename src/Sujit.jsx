import { useState } from "react";
import React from "react";
import { FaTachometerAlt, FaChalkboardTeacher, FaUserGraduate, FaDollarSign, FaCalendarAlt, FaUser, FaSignOutAlt } from "react-icons/fa";
import Profile from "./Profile"; // Importing Profile Component
import FeesTable from "./FeesTable";

function Sujit() {
    const [showTeacherMenu, setShowTeacherMenu] = useState(false);
    const [showStudentMenu, setShowStudentMenu] = useState(false);
    const [showProfile, setShowProfile] = useState(false); // State for Profile visibility
    const [showFeesTable, setShowFeesTable] = useState(false);

    return (
        <>
            <div className="container-fluid d-flex justify-content-between align-items-center p-3 shadow-lg">
            <div className="position-relative d-inline-block">
  <img
    src="school.png"
    alt="School Logo"
    style={{ height: "80px", width: "80px", objectFit: "contain" }}
  />
  <span
    className="fw-bold text-primary position-absolute top-50 start-50 translate-middle"
    style={{  padding: "4px 8px", borderRadius: "5px", marginLeft:"80px" }}
  >
    CONCEPT SCHOOL
  </span>
</div>

                <div className="text-end" style={{ height: "50px", width: "60px" }}>
                    <img src="men.jpeg" alt="Right Logo" style={{ height: "100%", width: "100%",borderRadius:"50%" }} />
                </div>
            </div>

            <div style={{ display: "flex", width: "100%" }}>

                
                {/* Sidebar */}
                <div style={{ height: "700px", width: "17%", backgroundColor: "#F0F0F0" }}>
                    <h1 style={{ marginLeft: "20px", fontSize: "20px" }}>
                        <ul style={{ listStyle: "none", padding: "10px" }}>
                            <li style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
                                <FaTachometerAlt /> Dashboard
                            </li>
                            <br />
                            <li style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
                                <FaCalendarAlt /> Calendar
                            </li>
                            <br />
                            {/* Teacher Dropdown */}
                            <li
                                onClick={() => setShowTeacherMenu(!showTeacherMenu)}
                                style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
                            >
                                <FaChalkboardTeacher /> Teachers {showTeacherMenu ? "▼": "▶"}

                            </li>
                            <br />
                            {showTeacherMenu && (
                                <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                                    <li style={{paddingBottom:"10px"}}>List</li>
                                    <li style={{ marginBottom: "10px" }}>Paper</li>
                                    <li style={{ marginBottom: "10px" }}>Question Bank</li>
                                    <li>Salary</li>
                                </ul>
                            )}
                            <br />


                            {/* Student Dropdown */}
                            <li
                                onClick={() => setShowStudentMenu(!showStudentMenu)}
                                style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
                            >
                                <FaUserGraduate /> Students {showStudentMenu ? "▼" : "▶"}
                            </li>
                            <br />
                            {showStudentMenu && (
                                <ul style={{ paddingLeft: "20px", listStyleType: "disc"}}>
                                    <li style={{paddingBottom:"10px"}}>Attendance</li>
                                    <li style={{paddingBottom:"10px"}}>Exams</li>
                                    <li>Results</li>
                                </ul>
                            )}
                            <br />
                            <li style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
                            onClick={() => setShowFeesTable(true)}
                            >
                                <FaDollarSign /> FeesTable
                            </li>
                        </ul>


                        {/* Profile & Logout Section */}
                        <ul style={{ listStyle: "none", padding: "0", marginTop: "auto" }}>
                            <li
                                style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", padding: "10px 0" }}
                                onClick={() => setShowProfile(true)} // Show Profile Section
                            >
                                <FaUser /> Profile
                            </li>
                            <li style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", padding: "10px 0" }}>
                                <FaSignOutAlt /> Logout
                            </li>
                        </ul>
                    </h1>
                </div>



                {/* Main Content Area */}
                <div style={{ height: "500px", width: "80%" }}>
    {showProfile ? <Profile /> : showFeesTable ? <FeesTable /> : <h2 style={{ textAlign: "center", marginTop: "50px" }}>Select an option from the sidebar</h2>}
</div>

            </div>
        </>
    );
}

export default Sujit;
