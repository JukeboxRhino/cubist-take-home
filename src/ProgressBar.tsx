import React from 'react';
import './ProgressBar.css';

function ProgressBar({ value }: { value: number }) {
  const cappedValue = Math.max(Math.min(100, value), 0) * 100;
  const width1 = `${cappedValue}%`;
  const width2 = `${100 - cappedValue}%`;
  return (
    <div className='progress-bar'>
      <div className='active' style={{ width: width1 }}></div>
      <div className="remaining" style={{ width: width2 }}></div>
    </div>
  )
}

export default ProgressBar;
