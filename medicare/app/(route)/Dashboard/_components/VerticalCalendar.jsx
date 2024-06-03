import React, { useState } from 'react';
import moment from 'moment';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const VerticalCalendar = ({ onDateSelect }) => {
  const [currentWeek, setCurrentWeek] = useState(moment().startOf('week').add(1, 'days'));

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = Array.from({ length: 7 }, (_, index) => currentWeek.clone().add(index, 'days'));

  const handlePreviousWeek = () => {
    setCurrentWeek(prevWeek => prevWeek.clone().subtract(1, 'weeks'));
  };

  const handleNextWeek = () => {
    setCurrentWeek(prevWeek => prevWeek.clone().add(1, 'weeks'));
  };

  const handleDateClick = (date) => {
    onDateSelect(date.format('YYYY-MM-DD'));
  };

  return (
    <div className="text-center">
      <h1 className="text-black text-2xl mt-2 font-medium">Upcoming Appointments</h1>
      <div className="text-gray-400 text-lg mb-4 mt-2 font-semibold">{currentWeek.format('MMMM YYYY')}</div>
      <div className="flex justify-around items-center p-5 bg-gray-800 rounded-lg max-w-lg mx-auto">
        <button onClick={handlePreviousWeek} className="text-white text-2xl cursor-pointer hover:scale-125 transition-all ease-in-out">
          <FaChevronLeft />
        </button>
        {daysOfWeek.map((day, index) => (
          <div className="text-center" key={index}>
            <span className="block text-white">{day}</span>
            <button
              onClick={() => handleDateClick(dates[index])}
              className={` mt-2 p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-500 ${dates[index].isSame(moment(), 'day') ? 'bg-green-500' : 'bg-gray-600'}`}
            >
              {dates[index].date()}
            </button>
          </div>
        ))}
        <button onClick={handleNextWeek} className="text-white text-2xl cursor-pointer hover:scale-125 transition-all ease-in-out">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default VerticalCalendar;
