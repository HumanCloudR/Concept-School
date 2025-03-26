import Pagination from './Pagination';

function AttendanceTable() {
  const attendanceData = [
    { name: 'Priya Patel', exam: 'NEET', class: '12th', parentNumber: '9876543210', averagePresent: '83%' },
    { name: 'Anurag Desai', exam: 'JEE', class: '11th', parentNumber: '9876543211', averagePresent: '85%' },
    { name: 'Maggie Nair', exam: 'NEET', class: '12th', parentNumber: '9876543212', averagePresent: '88%' },
    { name: 'Arjun Mathur', exam: 'NEET', class: '12th', parentNumber: '9876543213', averagePresent: '89%' },
    { name: 'Asha Sharma', exam: 'JEE', class: '11th', parentNumber: '9876543214', averagePresent: '90%' },
    { name: 'Amit Kumar', exam: 'JEE', class: '12th', parentNumber: '9876543215', averagePresent: '92%' },
    { name: 'Siddharth Mehra', exam: 'NEET', class: '11th', parentNumber: '9876543216', averagePresent: '86%' },
    { name: 'John Gupta', exam: 'JEE', class: '12th', parentNumber: '9876543217', averagePresent: '88%' },
    { name: 'Aryan Sharma', exam: 'NEET', class: '12th', parentNumber: '9876543218', averagePresent: '89%' },
    { name: 'Himani Kapoor', exam: 'JEE', class: '11th', parentNumber: '9876543219', averagePresent: '80%' },
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Student Name</th>
            <th>Exam</th>
            <th>Class</th>
            <th>Parent's Mobile Number</th>
            <th>Average Present</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((student, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{student.name}</td>
              <td>{student.exam}</td>
              <td>{student.class}</td>
              <td>{student.parentNumber}</td>
              <td>{student.averagePresent}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}

export default AttendanceTable;
