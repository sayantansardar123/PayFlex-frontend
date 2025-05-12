import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function BankBalancePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { bankId } = useParams();
  const [showBalance, setShowBalance] = useState(true);

  const bankDetails = {
    name: location.state?.name,
    balance: location.state?.balance,
    accountNumber: location.state?.accountNumber
  };

  /* const bankDetails = {
    '1535': {
      name: 'IDFC First Bank',
      balance: '₹24,500.75',
      accountNumber: 'XXXX XXXX 1535'
    },
    '7483': {
      name: 'State Bank of India',
      balance: '₹12,750.50',
      accountNumber: 'XXXX XXXX 7483'
    }
  }[bankId] || { 
    name: 'Unknown Bank', 
    balance: '₹0.00', 
    accountNumber: 'XXXX XXXX XXXX' 
  }; */

  return (
    <div className="app-container flex flex-col h-full bg-gray-50">
      <div className="sticky top-0 bg-purple-700 text-white z-10">
        <div className="flex items-center p-4">
          <button onClick={() => navigate(-1)} className="mr-3">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-semibold">Account Balance</h1>
        </div>
      </div>

      <div className="flex-1 p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-sm"
        >
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold mb-2">{bankDetails.name}</h2>
            <p className="text-gray-500">{bankDetails.accountNumber}</p>
          </div>

          <div className="text-center mb-8">
            <p className="text-gray-600 mb-2">Available Balance</p>
            <div className="flex items-center justify-center">
              <span className="text-4xl font-bold">
                {showBalance ? bankDetails.balance : '••••••'}
              </span>
              <button 
                onClick={() => setShowBalance(!showBalance)}
                className="ml-3 p-2"
              >
                {showBalance ? <Eye size={24} /> : <EyeOff size={24} />}
              </button>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.98 }}
            className="w-full bg-purple-700 text-white py-4 rounded-lg font-semibold text-lg"
            onClick={() => navigate('/check-balance')}
          >
            Done
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default BankBalancePage