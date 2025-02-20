import React from 'react';
import Address from './Address';
import ProgressBar from './ProgressBar';
import { Transaction } from './util/use-data';
import './Transaction.css';
import classNames from 'classnames';
import StatusBadge from './StatusBadge';
import Coin from './Coin';

interface TransactionProps {
  transaction: Transaction;
  addApproval: () => void;
}

type TxStatus = 'Submitted' | 'Approved' | 'Rejected';

function TransactionComponent({ transaction, addApproval }: TransactionProps) {
  // const { mutate } = useMutation();
  // This isn't an accurate representation of the status, I'm just using this to
  // show some diverse mock data
  let status: TxStatus;
  if (transaction.approvals.received === 3) {
    status = 'Rejected';
  } else if (transaction.approvals.received === 5) {
    status = 'Approved';
  } else {
    status = 'Submitted';
  }
  const finished = transaction.approvals.received === 5;
  return (
    <div className='transaction'>
      <div className='header'>
        <span>{(transaction.submitted && (status === 'Submitted' || status === 'Approved')) ? 'Sent' : 'Sending'}</span>
        <span className='highlighted'>{transaction.value} {transaction.unit}</span>
        <span>to</span>
        <Address address={transaction.receiver} />
        {transaction.submitted && <StatusBadge status={status} />}
      </div>
      <div className='sending-account'>
        <Coin chain={transaction.unit} />
        <Address address={transaction.sender} />
      </div>
      {!finished && (
        <div className='footer'>
          <span className='approvals'>
            <span className={classNames({ active: transaction.approvals.received > 0 })}>
              {transaction.approvals.received}
            </span>
            <span>/{transaction.approvals.required}</span>
          </span>
          <ProgressBar value={transaction.approvals.received / transaction.approvals.required} />
          <button onClick={addApproval}>Approve</button>
          <span className='timestamp'>{transaction.timestamp} hr{transaction.timestamp !== 1 && 's'} ago</span>
        </div>
      )}
    </div>
  );
}

export default TransactionComponent;
