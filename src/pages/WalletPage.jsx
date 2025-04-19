import React, { useState } from 'react';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function WalletPage() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('100');
  const recommendedAmounts = ['1,000', '1,500', '2,000'];

  return (
    <div className="app-container flex flex-col h-full bg-gray-50">
      <div className="sticky top-0 bg-white z-10 border-b border-gray-100">
        <div className="flex justify-between items-center p-4">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold">PhonePe Wallet</h1>
          <button className="p-2 -mr-2">
            <HelpCircle size={24} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="flex-1 p-4">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="mb-8">
            <h2 className="text-red-500 text-2xl mb-4">Low Balance</h2>
            <div className="flex items-baseline">
              <span className="text-red-500 text-2xl">₹</span>
              <span className="text-red-500 text-6xl font-bold ml-1">0</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Top-up Wallet</h3>
            <div className="relative mb-6">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-semibold">₹</div>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full text-2xl font-bold py-4 px-8 border-2 border-purple-600 rounded-xl focus:outline-none focus:border-purple-700"
              />
            </div>

            <div className="mb-8">
              <h4 className="text-gray-600 text-lg mb-3">Recommended</h4>
              <div className="flex gap-3">
                {recommendedAmounts.map((amt) => (
                  <motion.button
                    key={amt}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setAmount(amt)}
                    className="flex-1 py-2 px-4 border-2 border-purple-600 rounded-xl text-purple-600 text-lg font-semibold hover:bg-purple-50"
                  >
                    ₹{amt}
                  </motion.button>
                ))}
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              className="w-full bg-purple-600 text-white py-4 rounded-full text-xl font-semibold"
            >
              PROCEED TO TOPUP
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletPage;