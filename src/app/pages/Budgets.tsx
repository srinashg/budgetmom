"use client";

import React, { useState } from 'react';

const Budgets: React.FC = () => {
  // Sample data for demonstration
  const initialBudgets = [
    { id: 1, name: 'Housing', allocated: 1200, spent: 1100, color: 'bg-blue-500' },
    { id: 2, name: 'Food', allocated: 500, spent: 420, color: 'bg-green-500' },
    { id: 3, name: 'Transportation', allocated: 300, spent: 275, color: 'bg-yellow-500' },
    { id: 4, name: 'Utilities', allocated: 250, spent: 230, color: 'bg-purple-500' },
    { id: 5, name: 'Entertainment', allocated: 200, spent: 180, color: 'bg-pink-500' },
    { id: 6, name: 'Shopping', allocated: 150, spent: 145, color: 'bg-indigo-500' },
    { id: 7, name: 'Healthcare', allocated: 100, spent: 45, color: 'bg-red-500' },
    { id: 8, name: 'Education', allocated: 80, spent: 60, color: 'bg-teal-500' },
  ];

  const [budgets, setBudgets] = useState(initialBudgets);
  const [showAddBudget, setShowAddBudget] = useState(false);
  const [newBudget, setNewBudget] = useState({
    name: '',
    allocated: '',
  });
  const [editingBudget, setEditingBudget] = useState<number | null>(null);

  // Calculate total budget and spending
  const totalAllocated = budgets.reduce((sum, budget) => sum + budget.allocated, 0);
  const totalSpent = budgets.reduce((sum, budget) => sum + budget.spent, 0);
  const remainingBudget = totalAllocated - totalSpent;
  const spentPercentage = Math.round((totalSpent / totalAllocated) * 100);

  // Colors for new budgets
  const colors = [
    'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 
    'bg-pink-500', 'bg-indigo-500', 'bg-red-500', 'bg-teal-500',
    'bg-orange-500', 'bg-cyan-500', 'bg-lime-500', 'bg-emerald-500'
  ];

  // Handle adding a new budget
  const handleAddBudget = (e: React.FormEvent) => {
    e.preventDefault();
    const newBudgetItem = {
      id: budgets.length + 1,
      name: newBudget.name,
      allocated: parseFloat(newBudget.allocated),
      spent: 0,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
    setBudgets([...budgets, newBudgetItem]);
    setNewBudget({
      name: '',
      allocated: '',
    });
    setShowAddBudget(false);
  };

  // Handle editing a budget
  const handleEditBudget = (id: number, newAllocated: number) => {
    setBudgets(
      budgets.map((budget) =>
        budget.id === id ? { ...budget, allocated: newAllocated } : budget
      )
    );
    setEditingBudget(null);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Budgets</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Set and manage your monthly budget allocations.
          </p>
        </div>
        <button
          onClick={() => setShowAddBudget(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Add Budget
        </button>
      </div>

      {/* Add Budget Form */}
      {showAddBudget && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Add Budget</h2>
              <button
                onClick={() => setShowAddBudget(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleAddBudget}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Budget Category
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={newBudget.name}
                    onChange={(e) => setNewBudget({ ...newBudget, name: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="allocated" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Allocated Amount
                  </label>
                  <input
                    type="number"
                    id="allocated"
                    value={newBudget.allocated}
                    onChange={(e) => setNewBudget({ ...newBudget, allocated: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    step="0.01"
                    min="0"
                    required
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAddBudget(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Add Budget
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Budget Summary */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Budget Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Budget</div>
            <div className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">${totalAllocated.toFixed(2)}</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Spent</div>
            <div className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">${totalSpent.toFixed(2)}</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Remaining</div>
            <div className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">${remainingBudget.toFixed(2)}</div>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-center justify-between mb-1">
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Budget Usage</div>
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {spentPercentage}%
            </div>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div 
              className={`bg-purple-500 h-2.5 rounded-full`} 
              style={{ width: `${spentPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Budget Categories */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Budget Categories</h2>
        <div className="space-y-6">
          {budgets.map((budget) => {
            const percentage = Math.round((budget.spent / budget.allocated) * 100);
            return (
              <div key={budget.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full ${budget.color} mr-2`}></div>
                    <h3 className="text-md font-medium text-gray-900 dark:text-white">{budget.name}</h3>
                  </div>
                  <div className="flex items-center mt-2 sm:mt-0">
                    {editingBudget === budget.id ? (
                      <div className="flex items-center">
                        <input
                          type="number"
                          value={budget.allocated}
                          onChange={(e) => {
                            const newAllocated = parseFloat(e.target.value);
                            if (!isNaN(newAllocated) && newAllocated > 0) {
                              setBudgets(
                                budgets.map((b) =>
                                  b.id === budget.id ? { ...b, allocated: newAllocated } : b
                                )
                              );
                            }
                          }}
                          className="w-24 px-2 py-1 text-sm border border-gray-300 rounded-md mr-2 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                          min="0"
                          step="0.01"
                        />
                        <button
                          onClick={() => handleEditBudget(budget.id, budget.allocated)}
                          className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                        >
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">
                          ${budget.spent.toFixed(2)} / ${budget.allocated.toFixed(2)}
                        </div>
                        <button
                          onClick={() => setEditingBudget(budget.id)}
                          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                  <div 
                    className={`${budget.color} h-2.5 rounded-full`} 
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1">
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {percentage}% used
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    ${(budget.allocated - budget.spent).toFixed(2)} remaining
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Budgets;