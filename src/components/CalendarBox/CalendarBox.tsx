import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaFilter } from 'react-icons/fa';
import './calendarBox.scss';

const CalendarBox: React.FC = () => {
  const [date, setDate] = useState<Date | Date[]>(new Date());
  const [selectRange, setSelectRange] = useState<boolean>(false);

 

  return (
    <div className="calendarBox">
      <div className="header">
        <h2>Month</h2>
        <button className="filter-button">
          Orders <FaFilter />
        </button>
      </div>
      <Calendar
        
        
        selectRange={selectRange}
        onActiveStartDateChange={({ activeStartDate }) => setDate(activeStartDate || new Date())}
      />
    </div>
  );
};

export default CalendarBox;
