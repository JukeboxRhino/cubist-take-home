import React from 'react';
import './ToggleButton.css';
import classNames from 'classnames';

interface ToggleButtonProps<T> {
  options: T[];
  value: T;
  setValue: (arg0: T) => void;
}

function ToggleButton<T extends React.ReactNode>({ options, value, setValue }: ToggleButtonProps<T>) {
  return (
    <div className='toggle-button'>
      {options.map((opt) => (
        <span className={classNames('option', { active: value === opt })} onClick={() => setValue(opt)}>
          {opt}
        </span>
      ))}
    </div>
  )
}

export default ToggleButton;
