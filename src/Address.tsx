import React from 'react';
import './Address.css';

/**
 * Truncates an address but always shows the last 4 characters 
 */
function Address({ address }: { address: string }) {
  const first = address.slice(0, -4);
  const last = address.slice(-4);
  return (
    <span className='address' title={address}>
      <span className='first'>{first}</span>
      <span className='last'>{last}</span>
    </span>
  )
}

export default Address;
