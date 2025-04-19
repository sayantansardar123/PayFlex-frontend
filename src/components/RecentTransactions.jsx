import React from 'react';
import { 
  ShoppingBag, 
  Coffee, 
  Smartphone, 
  ChevronRight, 
  ArrowDown
} from 'lucide-react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function TransactionItem({ transaction }) {
  return (
    <motion.div 
      className="transaction-item"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
        transaction.type === 'credit' ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600'
      }`}>
        {transaction.icon}
      </div>
      
      <div className="flex-1">
        <div className="font-medium text-sm">{transaction.name}</div>
        <div className="text-xs text-gray-500">{transaction.time}</div>
      </div>
      
      <div className="text-right">
        <div className={`font-semibold text-sm ${
          transaction.type === 'credit' ? 'text-green-600' : 'text-gray-800'
        }`}>
          {transaction.type === 'credit' ? '+' : ''}{transaction.amount}
        </div>
        <div className={`text-xs ${
          transaction.status === 'success' ? 'text-green-600' : 
          transaction.status === 'pending' ? 'text-yellow-600' : 'text-red-600'
        }`}>
          {transaction.status === 'success' ? 'Completed' : 
          transaction.status === 'pending' ? 'Pending' : 'Failed'}
        </div>
      </div>
    </motion.div>
  );
}

TransactionItem.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['credit', 'debit']).isRequired,
    amount: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    time: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['success', 'pending', 'failed']).isRequired,
  }).isRequired,
};

function RecentTransactions() {
  const transactions = [
    {
      id: 1,
      name: 'Starbucks Coffee',
      type: 'debit',
      amount: '₹280.00',
      icon: <Coffee size={16} />,
      time: '10:32 AM',
      status: 'success'
    },
    {
      id: 2,
      name: 'Mobile Recharge',
      type: 'debit',
      amount: '₹649.00',
      icon: <Smartphone size={16} />,
      time: 'Yesterday',
      status: 'success'
    },
    {
      id: 3,
      name: 'Received from Raj',
      type: 'credit',
      amount: '₹1,500.00',
      icon: <ArrowDown size={16} />,
      time: 'May 11',
      status: 'success'
    },
    {
      id: 4,
      name: 'Amazon Shopping',
      type: 'debit',
      amount: '₹1,299.00',
      icon: <ShoppingBag size={16} />,
      time: 'May 10',
      status: 'success'
    },
  ];

  return (
    <div className="mx-4 mb-6 bg-white rounded-xl p-4 shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <h2 className="section-title">Recent Transactions</h2>
        <button className="text-purple-700 text-sm flex items-center">
          See All <ChevronRight size={16} />
        </button>
      </div>
      
      <div className="divide-y divide-gray-100">
        {transactions.map(transaction => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
}

export default RecentTransactions;