import { useState } from 'react';

export interface Transaction {
  unit: Chain;
  value: string; // Don't want to use a JS number where precision is needed
  sender: string;
  receiver: string;
  timestamp: number; // For simplicity here, I'm just going to generate a number
  // between 1-24 and use that as "- hours ago". In a real environment, I would
  // use/create a component that can be passed a timestamp and renders a user-friendly
  // string.
  submitted: boolean;
  approvals: {
    received: number;
    required: number;
  }
}

export type Chain = 'BTC' | 'OP' | 'AVAX' | 'STR' | 'SUI';

export interface AppData {
  user: {
    displayName: string;
  },
  transactions: Transaction[]
}

const mockCurrencies: Chain[] = ['BTC', 'OP', 'AVAX', 'STR', 'SUI'];

const randomHexString = () => Math.floor(Math.random() * Math.pow(2, 32)).toString(16);

const generateMockTransaction = (submitted: boolean = false): Transaction => {
  return {
    unit: mockCurrencies[Math.floor(Math.random() * mockCurrencies.length)],
    value: Math.floor(Math.random() * 100).toString(),
    sender: `0x${randomHexString()}${randomHexString()}${randomHexString()}${randomHexString()}`,
    receiver: `0x${randomHexString()}${randomHexString()}${randomHexString()}${randomHexString()}`,
    timestamp: Math.ceil(Math.random() * 24),
    submitted,
    approvals: {
      received: submitted ? Math.floor(Math.random() * 3 + 3) : Math.floor(Math.random() * 5),
      required: 5
    }
  };
};

const pendingTransactions = new Array(5).fill(null).map(generateMockTransaction);
const submittedTransactions = new Array(8).fill(null).map(() => generateMockTransaction(true));

const mockData: AppData = {
  user: {
    displayName: 'Austin Pearce'
  },
  transactions: [...pendingTransactions, ...submittedTransactions]
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
