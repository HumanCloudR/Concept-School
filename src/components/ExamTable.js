import Pagination from './Pagination';

function ExamTable() {
  const students = [
    { name: 'Priya Patel', exam: 'NEET', date: '05/01/2025' },
    { name: 'Ananya Desai', exam: 'JEE', date: '05/01/2025' },
    { name: 'Kavya Nair', exam: 'NEET', date: '05/01/2025' },
    { name: 'Arjun Malhotra', exam: 'JEE', date: '05/01/2025' },
    { name: 'Aisha Sharma', exam: 'NEET', date: '05/01/2025' },
    { name: 'Amit Kumar', exam: 'JEE', date: '05/01/2025' },
    { name: 'Siddharth Bhatia', exam: 'NEET', date: '05/01/2025' },
    { name: 'Isha Gupta', exam: 'JEE', date: '05/01/2025' },
    { name: 'Arjun Sharma', exam: 'NEET', date: '05/01/2025' },
    { name: 'Meera Kapoor', exam: 'JEE', date: '05/01/2025' },
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
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{s.name}</td>
              <td>{s.exam}</td>
              <td>{s.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}

export default ExamTable;
