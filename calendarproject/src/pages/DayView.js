import React, { useState } from 'react';
import CalendarHeader from '../components/CalendarHeader';
import '../styles/DayView.css';

const DayView = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 2, 11)); // March 11, 2025
  
  const formatMonth = () => {
    return currentDate.toLocaleString('default', { month: 'long' }) + ', ' + currentDate.getFullYear();
  };

  const formatDay = () => {
    return currentDate.getDate() + ' ' + 
      currentDate.toLocaleString('default', { month: 'long' }) + ' ' + 
      currentDate.getFullYear();
  };

  const handlePrevMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, prev.getDate()));
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, prev.getDate()));
  };

  const events = [
    { id: 1, time: '10:00 AM', title: 'Parents Meeting', color: '#b566f1' },
    { id: 2, time: '2:00 PM', title: 'Parents Meeting', color: '#4cd964' } 
  ];
  

  const timeSlots = Array.from({ length: 7 }, (_, i) => {
    const hour = i + 10 ; // Starting from 10 AM
    return hour <= 12 
      ? `${hour}:00 AM` 
      : `${hour - 12}:00 PM`;
  });

  return (
    <div className="calendar-container">
      <CalendarHeader 
        currentMonth={formatMonth()} 
        onPrevMonth={handlePrevMonth} 
        onNextMonth={handleNextMonth} 
      />

      <div className="day-view">
        <div className="day-header">
          {formatDay()}
        </div>

        <div className="time-slots">
          {timeSlots.map((timeSlot, index) => {
            // Find events for this time slot
            const eventForSlot = events.find(event => event.time === timeSlot);
            
            
            return (
              <div key={index} className="time-slot">
                <div className="time-label">{timeSlot}</div>
                <div className="time-content">
                  {eventForSlot && (
                    <div className="event" style={{ backgroundColor: eventForSlot.color }}>
                      <span className="event-time">{eventForSlot.time}</span>
                      <span className="event-title">{eventForSlot.title}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DayView;