import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularBar = ({ skillPercent }) => {
  return (
    <div style={{ width: '80px' }}>
      <CircularProgressbar
        value={skillPercent}
        text={`${skillPercent}%`}
        styles={buildStyles({
          textColor: 'black',
          pathColor: '#f57c00', // change the color as per your preference
          trailColor: '#757575',
        })}
      />
    </div>
  );
};

export default CircularBar;
