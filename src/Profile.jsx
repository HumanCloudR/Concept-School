import React from "react";
import { FaBars, FaEdit } from "react-icons/fa";

function Profile() {
    return (
        <div style={{ padding: "20px", backgroundColor:"white" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "10px" }}>
                <FaBars style={{ cursor: "pointer", fontSize: "24px" }} />
                <h2>Profile</h2>
            </div>

            <div className="" style={{ }}>
                <div style={{ marginLeft: "20px", padding: "30px" }} className="shadow-lg">
                    <h3>Change Photo</h3>
                    <br />
                    <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
                        <img src="images.jpg" alt="Profile" style={{ height: "50px", width: "60px",borderRadius:"50%" }} />
                        <button style={{ background: "white", color: "black", border: "1px solid black", padding: "5px 20px", cursor: "pointer", borderRadius: "5px" }}>
                            Change
                        </button>
                    </div>
                </div>

                <div style={{ marginTop: "30px", marginLeft: "20px" }} className="shadow-lg p-3">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h3>Personal Information</h3>
                        <span style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer", fontSize: "10px", marginRight: "30px" }}>
                            <FaEdit /> Edit
                        </span>
                    </div>

                    <ul style={{ display: "flex", listStyle: "none", gap: "250px", fontSize: "22px", fontWeight: "bold", marginTop: "10px" }}>
                        <li>Full Name</li>
                        <li>User Name</li>
                        <li>Phone Number</li>
                    </ul>

                    <ul style={{ display: "flex", listStyle: "none", gap: "100px", fontSize: "22px", fontWeight: "bold", marginTop: "10px" }}>
                        <li><input type="text" placeholder="Yuvraj Sharma" /></li>
                        <li><input type="text" placeholder="yuvraj@123" /></li>
                        <li><input type="text" placeholder="+8765567574" /></li>
                    </ul>

                    <br />
                    <div style={{ display: "flex", gap: "30px", marginLeft: "40px" }}>
                        <button className="btn btn-primary" style={{ height: "40px", width: "100px", fontSize: "14px" }}>Save</button>
                        <button className="btn btn-secondary" style={{ height: "40px", width: "100px", fontSize: "14px" }}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
