import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDatePickerStore } from '../state/useDatePickerStore';

const CustomizationPanel = () => {
  const { customization, setCustomization } = useDatePickerStore();
  const [interval, setInterval] = useState(customization.interval || 1);

  const handleCustomization = (e) => {
    const value = e.target.value;
    setInterval(value);
    setCustomization({ ...customization, interval: value });
  };

  return (
    <Form.Group className="mt-2">
      <Form.Label className= 'font-bold text-center'>Customize Recurrence</Form.Label>
      <Form.Control
      className="form-control mt-2"
        type="number"
        min="1"
        value={interval}
        onChange={handleCustomization}
      />
    </Form.Group>
  );
};

export default CustomizationPanel;
