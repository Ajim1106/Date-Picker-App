import React from 'react';
import { Form } from 'react-bootstrap';
import { useDatePickerStore } from '../state/useDatePickerStore';

const RecurringOptions = () => {
  const { recurringPattern, setRecurringPattern } = useDatePickerStore();

  return (
    <Form.Group>
      <Form.Label>Recurrence Pattern</Form.Label>
      <Form.Control
        as="select"
        value={recurringPattern} 
        onChange={(e) => setRecurringPattern(e.target.value)}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </Form.Control>
    </Form.Group>
  );
};

export default RecurringOptions;
