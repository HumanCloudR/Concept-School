import React from "react";
import data from "../Data"

const TeachersTable = () => {
 

  return (
    <div className="p-6 bg-gray-100 min-h-screen w-full">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full table-auto border-blue-500 border-4">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Sr. No</th>
              <th className="px-4 py-2">Teacher Name</th>
              <th className="px-4 py-2">Subject</th>
              <th className="px-4 py-2">Class</th>
              <th className="px-4 py-2">dates</th>
              <th className="px-4 py-2"> salary</th>
            </tr>
          </thead>
          <tbody>
            {data.map((teacher, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-100"
              >
                <td className="px-4 py-4 text-center">{index + 1}</td>
                <td className="px-4 py-4">{teacher.name}</td>
                <td className="px-4 py-4">{teacher.subject}</td>
                <td className="px-4 py-4 text-center">{teacher.class}</td>
                <td className="px-4 py-4 text-center">{teacher.dates}</td>
                <td className="px-4 py-4 text-center">{teacher.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeachersTable;