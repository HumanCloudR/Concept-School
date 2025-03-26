import { Link } from 'react-router-dom';
import Pagination from './Pagination';

function ResultTable() {
  const resultData = [
    { name: <Link to={`/result`}>Priya Patel</Link>, exam: 'NEET', date: '05/01/2025', marks: '180/200' },
    { name: 'Ananya Desai', exam: 'JEE', date: '05/01/2025', marks: '180/200' },
    { name: 'Kavya Nair', exam: 'NEET', date: '05/01/2025', marks: '180/200' },
    { name: 'Arjun Malhotra', exam: 'JEE', date: '05/01/2025', marks: '180/200' },
    { name: 'Aisha Sharma', exam: 'NEET', date: '05/01/2025', marks: '180/200' },
    { name: 'Amit Kumar', exam: 'JEE', date: '05/01/2025', marks: '180/200' },
    { name: 'Siddharth Bhatia', exam: 'NEET', date: '05/01/2025', marks: '180/200' },
    { name: 'Isha Gupta', exam: 'JEE', date: '05/01/2025', marks: '180/200' },
    { name: 'Arjun Sharma', exam: 'NEET', date: '05/01/2025', marks: '180/200' },
    { name: 'Meera Kapoor', exam: 'JEE', date: '05/01/2025', marks: '180/200' },
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Student Name</th>
            <th>Exam</th>
            <th>Date</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {resultData.map((student, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{typeof student.name === 'string' ? student.name : student.name}</td>
              <td>{student.exam}</td>
              <td>{student.date}</td>
              <td>{student.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}

export default ResultTable;
