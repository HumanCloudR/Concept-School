import React, { useState } from 'react';
import CalendarHeader from '../components/CalendarHeader';
import '../styles/MonthView.css';

const MonthView = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 2, 1)); // March 1, 2025
  
  const formatMonth = () => {
    return currentDate.toLocaleString('default', { month: 'long' }) + ', ' + currentDate.getFullYear();
  };

  const handlePrevMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  
  const events = [
    { id: 1, date: 4, title: 'Parents Meeting', color: '#b566f1' },
    { id: 2, date: 10, title: 'Parents Meeting', color: '#f5ca8c' },
    { id: 3, date: 20, title: 'Parents Meeting', color: '#5175e0' }
  ];

  
  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    
    const firstDay = new Date(year, month, 1);
    
    const lastDay = new Date(year, month + 1, 0);
    
    
    const firstDayOfWeek = firstDay.getDay();
    
    const prevMonthDays = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
    
    
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    const daysFromPrevMonth = Array.from({ length: prevMonthDays }, (_, i) => ({
      day: prevMonthLastDay - prevMonthDays + i + 1,
      currentMonth: false,
      month: month - 1 < 0 ? 11 : month - 1
    }));
    
    
    const daysInMonth = lastDay.getDate();
    const daysFromCurrentMonth = Array.from({ length: daysInMonth }, (_, i) => ({
      day: i + 1,
      currentMonth: true,
      month: month
    }));
    
    
    const totalCells = 42; // 6 rows of 7 days
    const nextMonthDays = totalCells - daysFromPrevMonth.length - daysFromCurrentMonth.length;
    const daysFromNextMonth = Array.from({ length: nextMonthDays }, (_, i) => ({
      day: i + 1,
      currentMonth: false,
      month: month + 1 > 11 ? 0 : month + 1
    }));
    
    return [...daysFromPrevMonth, ...daysFromCurrentMonth, ...daysFromNextMonth];
  };

  const days = getDaysInMonth();

  return (
    <div className="calendar-container">
      <CalendarHeader 
        currentMonth={formatMonth()} 
        onPrevMonth={handlePrevMonth} 
        onNextMonth={handleNextMonth}
      />

      <div className="month-view">
        <div className="weekdays">
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
          <div>Sunday</div>
        </div>
        
        <div className="days-grid">
          {days.map((day, index) => {
            // Find events for this day
            const dayEvents = events.filter(event => event.date === day.day && day.currentMonth);
            
            return (
              <div 
                key={index} 
                className={`day-cell ${!day.currentMonth ? 'inactive' : ''}`}
              >
                <div className="day-number">{day.day}</div>
                <div className="day-events">
                  {dayEvents.map(event => (
                    <div 
                      key={event.id} 
                      className="month-event" 
                      style={{ backgroundColor: event.color }}
                    >
                      {event.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MonthView;