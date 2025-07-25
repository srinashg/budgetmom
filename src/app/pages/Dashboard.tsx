import React from 'react';

const Dashboard: React.FC = () => {
  // Sample data for demonstration
  const recentTransactions = [
    { id: 1, date: '2023-07-22', description: 'Grocery Shopping', category: 'Food', amount: -85.42 },
    { id: 2, date: '2023-07-21', description: 'Salary Deposit', category: 'Income', amount: 2500.00 },
    { id: 3, date: '2023-07-20', description: 'Electric Bill', category: 'Utilities', amount: -124.79 },
    { id: 4, date: '2023-07-18', description: 'Coffee Shop', category: 'Dining', amount: -4.50 },
    { id: 5, date: '2023-07-15', description: 'Gas Station', category: 'Transportation', amount: -45.00 },
  ];

  const budgetCategories = [
    { id: 1, name: 'Housing', allocated: 1200, spent: 1100, color: 'bg-blue-500' },
    { id: 2, name: 'Food', allocated: 500, spent: 420, color: 'bg-green-500' },
    { id: 3, name: 'Transportation', allocated: 300, spent: 275, color: 'bg-yellow-500' },
    { id: 4, name: 'Utilities', allocated: 250, spent: 230, color: 'bg-purple-500' },
    { id: 5, name: 'Entertainment', allocated: 200, spent: 180, color: 'bg-pink-500' },
  ];

  const totalIncome = 3200;
  const totalExpenses = 2205;
  const savings = totalIncome - totalExpenses;
  const savingsPercentage = Math.round((savings / totalIncome) * 100);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Welcome back! Here&#39;s an overview of your finances.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-green-100 dark:bg-green-900 rounded-md p-3">
                <svg className="h-6 w-6 text-green-600 dark:text-green-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                    Total Income
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900 dark:text-white">
                      ${totalIncome.toFixed(2)}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-red-100 dark:bg-red-900 rounded-md p-3">
                <svg className="h-6 w-6 text-red-600 dark:text-red-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4M20 12a8 8 0 01-8 8m8-8a8 8 0 00-8-8m8 8h-8" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                    Total Expenses
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900 dark:text-white">
                      ${totalExpenses.toFixed(2)}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900 rounded-md p-3">
                <svg className="h-6 w-6 text-purple-600 dark:text-purple-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                    Savings
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900 dark:text-white">
                      ${savings.toFixed(2)} ({savingsPercentage}%)
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Budget Progress */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Budget Progress</h2>
        <div className="space-y-4">
          {budgetCategories.map((category) => {
            const percentage = Math.round((category.spent / category.allocated) * 100);
            return (
              <div key={category.id}>
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{category.name}</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    ${category.spent} / ${category.allocated}
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className={`${category.color} h-2.5 rounded-full`} 
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Recent Transactions</h2>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{transaction.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{transaction.date} • {transaction.category}</p>
                </div>
                <div className={`text-sm font-medium ${transaction.amount >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {transaction.amount >= 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
          <a href="/expenses" className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300">
            View all transactions →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;