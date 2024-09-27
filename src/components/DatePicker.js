import React, { useState } from 'react';
import RecurringOptions from './RecurringOptions';
import CustomizationPanel from './CustomizationPanel';
import PreviewCalendar from './PreviewCalendar';
import DateRangePicker from './DateRangePicker';
import { useDatePickerStore } from '../state/useDatePickerStore';
import { Container, Card } from 'react-bootstrap';
import useAppStore from '../state/appStore'; 

const DatePicker = () => {
  const { recurringPattern, setRecurringPattern } = useDatePickerStore();
  const { updateUserData, userdata } = useAppStore();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = () => {
    updateUserData({
      recurringPattern,
      startDate,
      endDate,
    });

    alert(`Data submitted! 
    Recurring Pattern: ${recurringPattern}
    Start Date: ${startDate}
    End Date: ${endDate}`);
  };

  return (
    <Container className="p-2 bg-light rounded shadow " style={{ width:"500px", height:"700px" }}>
      <Card className="p-4"     style={{ marginRight: "10px", marginLeft: "10px" }} >
        <h2 className="text-xl font-bold mb-1 text-center ">Pick a Date</h2>

        <DateRangePicker
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />

        <RecurringOptions 
          recurringPattern={recurringPattern} 
          setRecurringPattern={setRecurringPattern} 
        />

        <CustomizationPanel />
        <PreviewCalendar />
        <div className='text-center'>
        <button
          onClick={handleSubmit}
          className=" btn btn-primary mt-1"
          style={{
            backgroundColor: '#007bff',
            borderColor: '#007bff',
            fontWeight: 'bold',
            padding: '10px 20px',
            fontSize: '16px',
            width:"120px",
          }}
        >
          Submit
        </button>
        </div>

        < hr/ >
        
        <div>
          <h4 className='text-center'>Submitted Data:</h4>
          <p>Recurring Pattern: {userdata.recurringPattern}</p>
          <p>Start Date: {userdata.startDate}</p>
          <p>End Date: {userdata.endDate || 'No end date'}</p>
        </div>
      </Card>
    </Container>
  );
};

export default DatePicker;
