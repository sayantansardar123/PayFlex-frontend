import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, ArrowUpRight, ArrowDownLeft, HelpCircle } from 'lucide-react';
import axios from 'axios';

function HistoryPage() {
  const [transactions, setTransactions] = useState([]);

  /* const transactions = [
    {
      id: 1,
      type: 'debit',
      title: 'Paid to',
      name: 'SWIGGY',
      amount: '₹389',
      time: '1 day ago',
      status: 'Debited from'
    },
    {
      id: 2,
      type: 'credit',
      title: 'Received from',
      name: 'SALIL KUMAR HAZRA',
      amount: '₹450',
      time: '1 day ago',
      status: 'Credited to'
    },
    {
      id: 3,
      type: 'debit',
      title: 'Paid to',
      name: 'Sattwik Roy Chowdhury',
      amount: '₹10',
      time: '16 Apr 2025',
      status: 'Debited from'
    },
    {
      id: 4,
      type: 'debit',
      title: 'Paid to',
      name: 'CHOTON ROLL CENTER',
      amount: '₹60',
      time: '13 Apr 2025',
      status: 'Debited from'
    },
    {
      id: 5,
      type: 'credit',
      title: 'Received from',
      name: 'SALIL KUMAR HAZRA',
      amount: '₹120',
      time: '13 Apr 2025',
      status: 'Credited to'
    }
  ]; */

  useEffect(() => {
    const fetchTransactionsOfUser = async () => {
      try {
        const userId = '6820c001d108d7596e5442bd';
        const { data } = await axios.get(
          `${import.meta.env.VITE_BASEURL}/api/v1/transactions/get/${userId}`,
        );
        if(data) setTransactions(data);
      } catch(err) {
        console.error(err);
      }
    }
    
    fetchTransactionsOfUser();
  }, []);

  return (
    <div className="app-container flex flex-col h-full bg-gray-50">
      <div className="sticky top-0 bg-white z-10">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl font-semibold">History</h1>
          <button className="w-8 h-8 flex items-center justify-center rounded-full">
            <HelpCircle size={20} className="text-gray-600" />
          </button>
        </div>
        
        <div className="px-4 pb-0">
          <div className="relative flex items-center mb-4">
            <Search size={20} className="absolute left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search transactions"
              className="w-full bg-gray-100 pl-10 pr-10 py-2.5 rounded-full text-sm focus:outline-none"
            />
            <button className="absolute right-3">
              <SlidersHorizontal size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="divide-y divide-gray-100">
          {transactions.map((transaction) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center bg-white p-4"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                {transaction.type === 'debit' ? (
                  <ArrowUpRight size={20} className="text-red-500" />
                ) : (
                  <ArrowDownLeft size={20} className="text-green-500" />
                )}
              </div>
              
              <div className="flex-1">
                <div className="text-sm text-gray-500">{transaction.title}</div>
                <div className="font-medium">{transaction.name}</div>
                <div className="text-xs text-gray-500">{transaction.time}</div>
              </div>
              
              <div className="text-right">
                <div className={`font-semibold ${
                  transaction.type === 'credit' ? 'text-green-600' : ''
                }`}>
                  {transaction.type === 'credit' ? '+' : ''}{transaction.amount}
                </div>
                <div className="text-xs text-gray-500">{transaction.status}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="h-[100px]"></div>
      </div>
    </div>
  );
}

export default HistoryPage;