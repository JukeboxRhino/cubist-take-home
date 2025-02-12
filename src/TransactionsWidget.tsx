import React from 'react';
import './TransactionsWidget.css';
import Skeleton from './Skeleton';

interface TransactionsProps {
  loading: boolean;
}

function TransactionsWidget({ loading }: TransactionsProps) {
  return (
    <div className='widget transactions-widget'>
      <div className='transactions-header'>
        {loading ? (
          <>
            <Skeleton type='icon' secondary={true} />
            <Skeleton type='text' secondary={true} size='small' />
          </>
        ) : null}
      </div>
      <div className='transactions-body'>
        {loading ? (
          <>
            <Skeleton type='box' secondary={true} />
            <Skeleton type='box' secondary={true} />
            <Skeleton type='box' secondary={true} />
            <Skeleton type='box' secondary={true} />
            <Skeleton type='box' secondary={true} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default TransactionsWidget;
