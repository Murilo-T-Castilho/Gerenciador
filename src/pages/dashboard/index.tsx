import React, { useState } from 'react';
import { useFinance, Transaction } from '../../context/FinanceContext';

const Dashboard: React.FC = () => {

  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);

  const handleEditTransaction = (transaction: Transaction) => {
    setEditingTransaction(transaction);
  };

  const handleUpdateTransaction = () => {
    if (editingTransaction) {
      editTransaction(editingTransaction.id, editingTransaction);
      setEditingTransaction(null);
    }
  };

  const { transactions, addTransaction, editTransaction, deleteTransaction, totalIncome, totalExpense, balance } = useFinance();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<'income' | 'expense'>('income');

  const handleAddTransaction = () => {
    const newTransaction = {
      id: Date.now(),
      type,
      description,
      amount,
    };
    addTransaction(newTransaction);
    setDescription('');
    setAmount(0);
  };

  return (
    <div>

      <h1>Gerenciamento Financeiro</h1>

      <div>
        <h2>Resumo</h2>
        <p>Total de Renda: {totalIncome}</p>
        <p>Total de Despesas: {totalExpense}</p>
        <p>Saldo Restante: {balance}</p>
      </div>

      <div>
        <h2>Nova Transação</h2>
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
        <select value={type} onChange={(e) => setType(e.target.value as 'income' | 'expense')}>
          <option value="income">Renda</option>
          <option value="expense">Despesa</option>
        </select>
        <button onClick={handleAddTransaction}>Adicionar</button>
      </div>

      <div>
        <h2>Transações</h2>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              {transaction.description} - {transaction.amount} ({transaction.type})
              <button onClick={() => deleteTransaction(transaction.id)}>Excluir</button>
              <button onClick={() => handleEditTransaction(transaction)}>Editar</button>
            </li>
          ))}
        </ul>
      </div>
      {editingTransaction && (
        <div>
          <h3>Editar Transação</h3>
          <input
            type="text"
            value={editingTransaction.description}
            onChange={(e) => setEditingTransaction({ ...editingTransaction, description: e.target.value })}
          />
          <input
            type="number"
            value={editingTransaction.amount}
            onChange={(e) => setEditingTransaction({ ...editingTransaction, amount: parseFloat(e.target.value) })}
          />
          <select
            value={editingTransaction.type}
            onChange={(e) => setEditingTransaction({ ...editingTransaction, type: e.target.value as 'income' | 'expense' })}
          >
            <option value="income">Renda</option>
            <option value="expense">Despesa</option>
          </select>
          <button onClick={handleUpdateTransaction}>Atualizar</button>
          <button onClick={() => setEditingTransaction(null)}>Cancelar</button>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
