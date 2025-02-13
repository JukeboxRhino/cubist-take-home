import React from 'react';
import Address from './Address';
import ProgressBar from './ProgressBar';
import { Transaction } from './util/use-data';
import './Transaction.css';
import classNames from 'classnames';

interface TransactionProps {
  transaction: Transaction
}

function TransactionComponent({ transaction }: TransactionProps) {
  return (
    <div className='transaction'>
      <div className='header'>
        <span>Sending</span>
        <span className='highlighted'>{transaction.value} {transaction.unit}</span>
        <span>to</span>
        <Address address={transaction.receiver} />
      </div>
      <div className='sending-account'>
        <div className='fake-coin-logo'></div>
        <Address address={transaction.sender} />
      </div>
      {!transaction.submitted && (
        <div className='footer'>
          <span className='approvals'>
            <span className={classNames({ active: transaction.approvals.received > 0 })}>
              {transaction.approvals.received}
            </span>
            <span>/{transaction.approvals.required}</span>
          </span>
          <ProgressBar value={transaction.approvals.received / transaction.approvals.required} />
          <span className='timestamp'>{transaction.timestamp} hr{transaction.timestamp !== 1 && 's'} ago</span>
        </div>
      )}
    </div>
  );
}

export default TransactionComponent;
