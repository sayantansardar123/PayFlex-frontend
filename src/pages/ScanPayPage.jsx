import React, { useState } from 'react';
import { ArrowLeft, QrCode, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function ScanPayPage() {
  const navigate = useNavigate();
  const [showAmountInput, setShowAmountInput] = useState(false);
  const [amount, setAmount] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount) {
      navigate('/pin-entry', { state: { amount } });
    }
  };

  const handleScanComplete = () => {
    // Simulating QR scan completion
    setShowAmountInput(true);
  };

  if (!showAmountInput) {
    return (
      <div className="app-container flex flex-col h-full bg-black">
        <div className="sticky top-0 z-10">
          <div className="flex justify-between items-center p-4">
            <button onClick={() => navigate(-1)} className="text-white">
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-white text-lg font-semibold">Scan QR Code</h1>
            <button className="text-white">
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="relative w-72 h-72 mb-8">
            <div className="absolute inset-0 border-2 border-white/30 rounded-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-0.5 bg-purple-500 animate-scan"></div>
            </div>
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-purple-500 rounded-tl-xl"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-purple-500 rounded-tr-xl"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-purple-500 rounded-bl-xl"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-purple-500 rounded-br-xl"></div>
          </div>
          
          <p className="text-white/70 text-center mb-4">
            Align QR code within the frame to scan
          </p>
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleScanComplete}
            className="bg-white text-purple-700 py-3 px-6 rounded-lg font-medium"
          >
            Tap to Scan
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container flex flex-col h-full bg-gray-50">
      <div className="sticky top-0 bg-purple-700 text-white z-10">
        <div className="flex items-center p-4">
          <button onClick={() => setShowAmountInput(false)} className="mr-3">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-semibold">Enter Amount</h1>
        </div>
      </div>

      <div className="flex-1 p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-sm"
        >
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center">
              <QrCode size={40} className="text-purple-700" />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm text-gray-600 mb-2">Enter Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-semibold">₹</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full text-2xl font-bold py-3 px-8 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none text-center"
                  placeholder="0"
                  required
                  autoFocus
                />
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              className="w-full bg-purple-700 text-white py-4 rounded-lg font-semibold text-lg"
              type="submit"
            >
              Proceed to Pay
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default ScanPayPage;