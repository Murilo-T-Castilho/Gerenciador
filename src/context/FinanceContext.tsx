import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface Transaction {
    id: number;
    type: 'income' | 'expense';
    description: string;
    amount: number;
  }

interface FinanceContextData {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  editTransaction: (id: number, updatedTransaction: Transaction) => void;
  deleteTransaction: (id: number) => void;
  totalIncome: number;
  totalExpense: number;
  balance: number;
}

const FinanceContext = createContext<FinanceContextData | undefined>(undefined);

export const useFinance = () => {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error('useFinance must be used within a FinanceProvider');
  }
  return context;
};

export const FinanceProvider = ({ children }: { children: ReactNode }) => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
  
    const addTransaction = (transaction: Transaction) => {
      setTransactions([...transactions, transaction]);
    };
  
    const editTransaction = (id: number, updatedTransaction: Transaction) => {
      setTransactions(transactions.map(t => (t.id === id ? updatedTransaction : t)));
    };
  
    const deleteTransaction = (id: number) => {
      setTransactions(transactions.filter(t => t.id !== id));
    };
  
    const totalIncome = transactions
      .filter(t => t.type === 'income')
      .reduce((acc, t) => acc + t.amount, 0);
  
    const totalExpense = transactions
      .filter(t => t.type === 'expense')
      .reduce((acc, t) => acc + t.amount, 0);
  
    const balance = totalIncome - totalExpense;
  
    return (
      <FinanceContext.Provider value={{ transactions, addTransaction, editTransaction, deleteTransaction, totalIncome, totalExpense, balance }}>
        {children}
      </FinanceContext.Provider>
    );
  };
  
