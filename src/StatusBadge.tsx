import React from 'react';
import classNames from 'classnames';
import './StatusBadge.css';

export interface StatusBadgeProps {
  status: 'Submitted' | 'Approved' | 'Rejected'
}

function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={classNames('status-badge', status)}>{status}</span>
  );
}

export default StatusBadge;
