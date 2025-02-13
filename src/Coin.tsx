import React from 'react';
import './Coin.css';
import { ReactComponent as Avalanche } from './chains/avalanche.svg';
import { ReactComponent as Bitcoin } from './chains/bitcoin.svg';
import { ReactComponent as Optimism } from './chains/optimism-2.svg';
import { ReactComponent as Starknet } from './chains/starknet.svg';
import { ReactComponent as Sui } from './chains/sui.svg';

interface CoinProps {
  chain: 'BTC' | 'OP' | 'AVAX' | 'STR' | 'SUI';
}

const iconMap = {
  AVAX: Avalanche,
  BTC: Bitcoin,
  OP: Optimism,
  STR: Starknet,
  SUI: Sui
}

function Coin({ chain }: CoinProps) {
  const Icon = iconMap[chain];
  return (
    <div className='coin'>
      <Icon />
    </div>
  );
}

export default Coin;