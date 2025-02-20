import React, { useMemo, useState } from 'react';
import './TransactionsWidget.css';
import Skeleton from './Skeleton';
import TransactionComponent from './Transaction';
import { Transaction } from './util/use-data';
import { ReactComponent as TransactionIcon } from './nav-approvals.svg'
import ToggleButton from './ToggleButton';

interface TransactionsProps {
  loading: boolean;
  transactions?: Transaction[];
  mutate: (tx: Transaction) => void;
}

type TabTypes = 'Pending' | 'History';

function TransactionsWidget({ loading, transactions, mutate }: TransactionsProps) {
  const [activeTab, setActiveTab] = useState<TabTypes>('Pending');

  const visibleTransactions = useMemo(() => transactions?.filter((tx) => {
    if (activeTab === 'Pending') {
      // A transaction is "pending" in this case if there are no rejections
      // and we are waiting on at least one approval
      return tx.approvals.received !== tx.approvals.required;
    } else if (activeTab === 'History') {
      return tx.approvals.received === tx.approvals.required;
    } else {
      return false;
    }
  }),
    [activeTab, transactions]
  );

  const addApproval = (tx: Transaction) => {
    const newTx: Transaction = {
      ...tx,
      approvals: {
        ...tx.approvals,
        received: tx.approvals.received + 1
      }
    };
    mutate(newTx);
  };

  return (
    <div className='widget transactions-widget'>
      <div className='transactions-header'>
        {loading ? (
          <>
            <Skeleton type='icon' secondary={true} />
            <Skeleton type='text' secondary={true} size='small' />
          </>
        ) : (
          <>
            <div className='icon-circle'>
              <TransactionIcon />
            </div>
            <span>Transactions</span>
            <ToggleButton<TabTypes> options={['Pending', 'History']} value={activeTab} setValue={(val) => setActiveTab(val)} />
          </>
        )}
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
        ) : (
          <>
            {visibleTransactions?.map((transaction) => <TransactionComponent key={transaction.transactionId} transaction={transaction} addApproval={() => addApproval(transaction)} />)}
          </>
        )}
      </div>
    </div>
  );
}

export default TransactionsWidget;
