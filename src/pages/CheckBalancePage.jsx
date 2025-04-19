import React from 'react';
import { ArrowLeft, HelpCircle, ChevronRight, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function CheckBalancePage() {
  const navigate = useNavigate();

  const banks = [
    {
      id: '1535',
      name: 'IDFC First Bank',
      accountNumber: '1535',
      logo: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '7483',
      name: 'State Bank of India',
      accountNumber: '7483',
      logo: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <div className="app-container flex flex-col h-full bg-gray-50">
      <div className="sticky top-0 bg-white z-10 border-b border-gray-100">
        <div className="flex justify-between items-center p-4">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold">Check Balance</h1>
          <button className="p-2 -mr-2">
            <HelpCircle size={24} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="flex-1">
        <div className="p-4">
          <h2 className="text-gray-500 font-medium mb-4">ACCOUNTS ON UPI</h2>
          
          <div className="space-y-4">
            {banks.map((bank) => (
              <motion.button
                key={bank.id}
                className="w-full flex items-center bg-white p-4 rounded-lg"
                onClick={() => navigate(`/bank-balance/${bank.id}`)}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full overflow-hidden mr-3">
                  <img src={bank.logo} alt={bank.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-medium">{bank.name}</div>
                  <div className="text-gray-500">- {bank.accountNumber}</div>
                </div>
                <ChevronRight size={20} className="text-gray-400" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-100">
        <motion.button
          className="w-full flex items-center p-4"
          onClick={() => navigate('/add-bank')}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-3">
            <Plus size={24} className="text-gray-600" />
          </div>
          <div className="flex-1 text-left">
            <div className="font-medium">Add UPI account</div>
            <div className="text-gray-500 text-sm">to check balance for RuPay card, bank accounts & more.</div>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </motion.button>
      </div>
    </div>
  );
}

export default CheckBalancePage