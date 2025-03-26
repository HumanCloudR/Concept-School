import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../App.css';

const data = [
  { name: '0', value: 0 },
  { name: '10', value: 20 },
  { name: '20', value: 40 },
  { name: '30', value: 60 },
  { name: '40', value: 80 },
  { name: '50', value: 50 },
  { name: '60', value: 70 },
  { name: '70', value: 60 },
  { name: '80', value: 90 },
  { name: '90', value: 100 },
  { name: '100', value: 80 },
];

function Result() {
  return (
    <div className="results-page">
      <h2>Results</h2>

      <div className="results-card-container">
        <div className="candidate-card">
          <p><strong>Candidate Name</strong> - Priya Patel</p>
          <p><strong>Exam Name</strong> - NEET</p>
          <p><strong>Subject Name</strong> - Physics</p>
        </div>
        <div className="class-card">
          <p><strong>Class</strong> - 11th</p>
          <p><strong>Roll Number</strong> - 89</p>
        </div>
      </div>

      <div className="results-chart">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#4e61d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>

       
        <img 
          className="chart-image" 
          src="https://img.freepik.com/premium-vector/cute-children-adventure-happy-cute-kids-summer-camp-holiday-kids-scouts-summer-camp-illustration_988569-500.jpg" 
          alt="Student" 
        />
      </div>

      <div className="score-card">
        <h3>Score Card</h3>
        <div className="score-grid">
          <div className="score-item"><p>Total Question - <strong>45</strong></p></div>
          <div className="score-item"><p>Total Attempted - <strong>40</strong></p></div>
          <div className="score-item"><p>Total Unattempted - <strong>5</strong></p></div>
          <div className="score-item"><p>Incorrect Answers - <strong>10</strong></p></div>
          <div className="score-item"><p>Correct Answers - <strong>30</strong></p></div>
        </div>
      </div>
    </div>
  );
}

export default Result;
