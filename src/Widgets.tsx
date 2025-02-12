import React from 'react';
import TransactionsWidget from './TransactionsWidget';
import './Widgets.css';

interface WidgetsProps {
  loading: boolean;
}

function Widgets({ loading }: WidgetsProps) {
  return (
    <div className='widgets'>
      <div className='widget fake-widget'></div>
      <TransactionsWidget loading={loading} />
      <div className='widget fake-widget'></div>
    </div>
  )
}

export default Widgets;
