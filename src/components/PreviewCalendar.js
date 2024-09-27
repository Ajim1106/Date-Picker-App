import React from 'react';
import { useDatePickerStore } from '../state/useDatePickerStore';

const PreviewCalendar = () => {
  const { startDate, endDate, recurringPattern } = useDatePickerStore();

  return (
    <div className="mt-2">
      <h4 className='text-center'>Preview Selected Dates</h4>
      <p className='nev_margin'>Start Date: {startDate}</p>
      <p  className='nev_margin'nev_margin>End Date: {endDate}</p>
      <p className='nev_margin' >Recurring: {recurringPattern}</p>
    </div>
  );
};

export default PreviewCalendar;
