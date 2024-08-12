import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const SliderRating = ({ onChange }) => {
  const [value, setValue] = useState(0);

  const handleSliderChange = (newValue) => {
    setValue(newValue);
    onChange && onChange(newValue);
  };

  return (
    <div style={{ margin: '20px' }}>
      <Slider
        min={0}
        max={10}
        step={1}
        value={value}
        onChange={handleSliderChange}
      />
      <p>Rating: {value}</p>
    </div>
  );
};

export default SliderRating;