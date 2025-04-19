import React, { useState } from 'react';
import { Eye, EyeOff, Wallet, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

function BalanceCard() {
  const [showBalance, setShowBalance] = useState(true);
  
  return (
    <motion.div 
      className="mx-4 mt-2 mb-4"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-gradient-to-r from-purple-700 to-indigo-600 rounded-xl p-4 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-2">
              <Wallet size={16} className="text-white" />
            </div>
            <span className="text-white text-sm font-medium">PhonePe Balance</span>
          </div>
          <button 
            onClick={() => setShowBalance(!showBalance)}
            className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
          >
            {showBalance ? <Eye size={16} className="text-white" /> : <EyeOff size={16} className="text-white" />}
          </button>
        </div>
        
        <div className="text-white mb-3">
          <div className="text-sm opacity-80">Available Balance</div>
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              {showBalance ? '₹12,543.75' : '••••••••'}
            </span>
            <button className="ml-2 w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <RefreshCw size={12} className="text-white" />
            </button>
          </div>
        </div>
        
        <div className="flex justify-between">
          <button className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all px-4 py-2 rounded-lg text-white text-sm">
            Add Money
          </button>
          <button className="bg-white hover:bg-opacity-90 transition-all px-4 py-2 rounded-lg text-purple-700 text-sm font-medium">
            UPI Lite
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default BalanceCard;