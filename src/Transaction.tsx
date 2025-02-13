import React from 'react';
import Address from './Address';
import { Transaction } from './util/use-data';
import './Transaction.css';

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
    </div>
  );
}

export default TransactionComponent;
