import React from 'react';
import TransactionsWidget from './TransactionsWidget';
import './Widgets.css';
import { AppData } from './util/use-data';

interface WidgetsProps {
  data?: AppData;
  loading: boolean;
}

function Widgets({ data, loading }: WidgetsProps) {
  const transactions = data?.transactions;
  return (
    <div className='widgets'>
      <div className='widget fake-widget'></div>
      <TransactionsWidget loading={loading} transactions={transactions} />
      <div className='widget fake-widget'></div>
    </div>
  )
}

export default Widgets;
