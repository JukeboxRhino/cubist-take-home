import { useState } from 'react';

export interface Transaction {
  unit: string;
  value: string; // Don't want to use a JS number where precision is needed
  sender: string;
  receiver: string;
  timestamp: number; // For simplicity here, I'm just going to generate a number
  // between 1-24 and use that as "- hours ago". In a real environment, I would
  // use/create a component that can be passed a timestamp and renders a user-friendly
  // string.
  approvals: (boolean | null)[]; // These would be more detailed in a real app,
  // probably with user IDs. In this case null means an approval/rejection was
  // not received yet, false means rejected, true means approved.
}

export interface AppData {
  user: {
    displayName: string;
  },
  transactions: Transaction[]
}

const mockCurrencies = ['BTC', 'OP', 'AVAX', 'STR', 'SUI'];

const randomHexString = () => Math.floor(Math.random() * Math.pow(2, 32)).toString(16);

const generateMockTransaction = (): Transaction => {
  return {
    unit: mockCurrencies[Math.floor(Math.random() * mockCurrencies.length)],
    value: Math.floor(Math.random() * 100).toString(),
    sender: `0x${randomHexString()}${randomHexString()}${randomHexString()}${randomHexString()}`,
    receiver: `0x${randomHexString()}${randomHexString()}${randomHexString()}${randomHexString()}`,
    timestamp: Math.ceil(Math.random() * 24),
    approvals: new Array(5).fill(null).map(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        return true;
      } else if (rand < 0.9) {
        return null;
      } else {
        return false;
      }
    })
  };
};

const mockData: AppData = {
  user: {
    displayName: 'Austin Pearce'
  },
  transactions: new Array(5).fill(null).map(generateMockTransaction)
};

/**
 * Custom hook to simulate making a network call for the data
 */
export const useData = (): { loading: boolean, data?: AppData } => {
  const [loading, setLoading] = useState(true);

  // Simulate network delay by waiting 1-2 seconds once when the hook is called
  if (loading) {
    setTimeout(() => setLoading(false), Math.random() * 1_000 + 1_000);
  }

  return {
    loading,
    data: loading ? undefined : mockData
  };
};
