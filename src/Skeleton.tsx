import React from 'react';
import classNames from 'classnames';
import './Skeleton.css'

interface SkeletonProps {
  type: 'text' | 'icon' | 'box';
  secondary?: boolean;
  size?: 'small'
}

function Skeleton({ type, secondary = false, size }: SkeletonProps) {
  return (
    <div className={classNames('skeleton', type, size, { secondary })}></div>
  )
}

export default Skeleton;
