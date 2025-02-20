import React from 'react';
import TransactionsWidget from './TransactionsWidget';
import './Widgets.css';
import { AppData, Transaction } from './util/use-data';

interface WidgetsProps {
  data?: AppData;
  loading: boolean;
  mutate: (tx: Transaction) => void;
}

function Widgets({ data, loading, mutate }: WidgetsProps) {
  const transactions = data?.transactions;
  return (
    <div className='widgets'>
      <div className='widget fake-widget'></div>
      <TransactionsWidget loading={loading} transactions={transactions} mutate={mutate} />
      <div className='widget fake-widget'></div>
    </div>
  )
}

export default Widgets;
