import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <h1 className="text-2xl font-bold">BudgetMom</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-purple-200 transition-colors">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/expenses" className="hover:text-purple-200 transition-colors">
                Expenses
              </Link>
            </li>
            <li>
              <Link href="/budgets" className="hover:text-purple-200 transition-colors">
                Budgets
              </Link>
            </li>
            <li>
              <Link href="/reports" className="hover:text-purple-200 transition-colors">
                Reports
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="bg-white text-purple-600 px-4 py-2 rounded-full font-medium hover:bg-purple-100 transition-colors">
            Add Expense
          </button>
          <div className="w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center">
            <span className="text-purple-700 font-bold">JD</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;