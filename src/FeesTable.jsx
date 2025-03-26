import React from "react";
import "./FeesTable.css";
import { FaBars } from "react-icons/fa6";

const FeesTable = () => {
  const students = [
    { id: 1, name: "Priya Patel", class: "11th", totalFees: "₹ 80,000", feesCredit: "₹ 77,000", pendingFees: "₹ 3,000" },
    { id: 2, name: "Ananya Desai", class: "11th", totalFees: "₹ 80,000", feesCredit: "₹ 77,000", pendingFees: "₹ 3,000" },
    { id: 3, name: "Kavya Nair", class: "11th", totalFees: "₹ 80,000", feesCredit: "₹ 77,000", pendingFees: "₹ 3,000" },
    { id: 4, name: "Arjun Malhotra", class: "12th", totalFees: "₹ 80,000", feesCredit: "₹ 77,000", pendingFees: "₹ 3,000" },
    { id: 5, name: "Aisha Sharma", class: "12th", totalFees: "₹ 80,000", feesCredit: "₹ 77,000", pendingFees: "₹ 3,000" },
    { id: 6, name: "Amit Kumar", class: "11th", totalFees: "₹ 80,000", feesCredit: "₹ 77,000", pendingFees: "₹ 3,000" },
    { id: 7, name: "Siddhart Bhatia", class: "12th", totalFees: "₹ 80,000", feesCredit: "₹ 77,000", pendingFees: "₹ 3,000" },
    { id: 8, name: "Isha Gupta", class: "11th", totalFees: "₹ 80,000", feesCredit: "₹ 77,000", pendingFees: "₹ 3,000" },
    { id: 9, name: "Arjun Sharma", class: "12th", totalFees: "₹ 80,000", feesCredit: "₹ 77,000", pendingFees: "₹ 3,000" },
    { id: 10, name: "Meena Kapor", class: "11th", totalFees: "₹ 80,000", feesCredit: "₹ 77,000", pendingFees: "₹ 3,000" },

  ];

  return (

    

    <div className="fees-table-container">
        
          
         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0" }}>
  <h2 className="table-title" style={{ margin: 0 }}><FaBars style={{ cursor: "pointer", fontSize: "24px"}} /> Fees</h2>
  <div style={{ display: "flex", gap: "10px" }}>
    <select style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}>
      <option>Student Name</option>
      <option>Class</option>
    </select>
    <select style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}>
      <option>Select Class</option>
      <option>11th</option>
      <option>12th</option>
    </select>
    <select style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}>
      <option>2024</option>
      <option>2025</option>
    </select>
  </div>
</div>

      

      <table className="fees-table">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Student Name</th>
            <th>Class</th>
            <th>Total Fees</th>
            <th>Fees Credit</th>
            <th>Pending Fees</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>{student.totalFees}</td>
              <td>{student.feesCredit}</td>
              <td>{student.pendingFees}</td>
            </tr>
          ))}
        </tbody><br></br>
      </table>
      
      <div className="flex items-center gap-4">
  <button className="page-button rounded bg-gray-200 px-3 py-1">Previous</button>
  <span className="page-numbers">1 2 3 ... 10 </span>
  <button className="page-button rounded gap-2 bg-gray-200 px-3 py-1">Next</button>
</div>


{/* <div className="gap-1">
    <button>Previous</button>
    <button>Previous</button>
    <button>Previous</button>
</div> */}

    </div>
  );
};

export default FeesTable;
