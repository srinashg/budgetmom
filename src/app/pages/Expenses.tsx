"use client";

import React, { useState } from 'react';

const Expenses: React.FC = () => {
  // Sample data for demonstration
  const initialTransactions = [
    { id: 1, date: '2023-07-22', description: 'Grocery Shopping', category: 'Food', amount: -85.42 },
    { id: 2, date: '2023-07-21', description: 'Salary Deposit', category: 'Income', amount: 2500.00 },
    { id: 3, date: '2023-07-20', description: 'Electric Bill', category: 'Utilities', amount: -124.79 },
    { id: 4, date: '2023-07-18', description: 'Coffee Shop', category: 'Dining', amount: -4.50 },
    { id: 5, date: '2023-07-15', description: 'Gas Station', category: 'Transportation', amount: -45.00 },
    { id: 6, date: '2023-07-14', description: 'Online Shopping', category: 'Shopping', amount: -67.89 },
    { id: 7, date: '2023-07-10', description: 'Movie Tickets', category: 'Entertainment', amount: -24.99 },
    { id: 8, date: '2023-07-05', description: 'Internet Bill', category: 'Utilities', amount: -79.99 },
    { id: 9, date: '2023-07-01', description: 'Rent Payment', category: 'Housing', amount: -1200.00 },
    { id: 10, date: '2023-07-01', description: 'Side Gig Payment', category: 'Income', amount: 350.00 },
  ];

  const categories = [
    'All',
    'Food',
    'Income',
    'Utilities',
    'Dining',
    'Transportation',
    'Shopping',
    'Entertainment',
    'Housing',
  ];

  const [transactions, setTransactions] = useState(initialTransactions);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: '',
    category: 'Food',
    date: new Date().toISOString().split('T')[0],
  });

  // Filter transactions based on category and search term
  const filteredTransactions = transactions.filter(transaction => {
    const matchesCategory = selectedCategory === 'All' || transaction.category === selectedCategory;
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle adding a new expense
  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    const newTransaction = {
      id: transactions.length + 1,
      date: newExpense.date,
      description: newExpense.description,
      category: newExpense.category,
      amount: parseFloat(newExpense.amount) * (newExpense.category === 'Income' ? 1 : -1),
    };
    setTransactions([newTransaction, ...transactions]);
    setNewExpense({
      description: '',
      amount: '',
      category: 'Food',
      date: new Date().toISOString().split('T')[0],
    });
    setShowAddExpense(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Expenses</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Track and manage your expenses and income.
          </p>
        </div>
        <button
          onClick={() => setShowAddExpense(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Add Transaction
        </button>
      </div>

      {/* Add Expense Form */}
      {showAddExpense && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Add Transaction</h2>
              <button
                onClick={() => setShowAddExpense(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleAddExpense}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    value={newExpense.description}
                    onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Amount
                  </label>
                  <input
                    type="number"
                    id="amount"
                    value={newExpense.amount}
                    onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    step="0.01"
                    min="0"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Category
                  </label>
                  <select
                    id="category"
                    value={newExpense.category}
                    onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    {categories.filter(cat => cat !== 'All').map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={newExpense.date}
                    onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAddExpense(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Add Transaction
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Transactions List */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Description
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {filteredTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {transaction.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {transaction.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {transaction.category}
                  </span>
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-right ${
                  transaction.amount >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`}>
                  {transaction.amount >= 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Expenses;