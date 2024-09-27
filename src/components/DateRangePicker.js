import React from 'react';

const DateRangePicker = ({ setStartDate, setEndDate }) => {
  return (
    <div className="d-flex justify-content-between mt-2">
      <div className="form-label">
        <label>Start Date:</label>
        <input 
          type="date" 
          className="form-control" 
          onChange={(e) => setStartDate(e.target.value)} 
        />
      </div>

      <div className="form-group">
        <label>End Date (optional):</label>
        <input 
          type="date" 
          className="form-control" 
          onChange={(e) => setEndDate(e.target.value)} 
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
