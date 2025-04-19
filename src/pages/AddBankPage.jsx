import React, { useState } from 'react';
import { ArrowLeft, HelpCircle, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function AddBankPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const popularBanks = [
    { id: 'sbi', name: 'State Bank of India', logo: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 'pnb', name: 'Punjab National Bank', logo: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 'apbl', name: 'Airtel Payments Bank Limited', logo: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 'bob', name: 'Bank Of Baroda', logo: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 'ib', name: 'Indian Bank', logo: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 'bb', name: 'Bandhan Bank', logo: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 'boi', name: 'Bank Of India', logo: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 'iib', name: 'IndusInd Bank', logo: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 'axis', name: 'Axis Bank', logo: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  ];

  const allBanks = [
    { id: 'army', name: '510 ARMY BASE WORKSHOP CREDIT COOPERATIVE SOCIETY LTD' },
    { id: 'ace', name: 'ACE Cooperative Bank Ltd' },
  ];

  return (
    <div className="app-container flex flex-col h-full bg-gray-50">
      <div className="sticky top-0 bg-white z-10">
        <div className="flex justify-between items-center p-4 border-b border-gray-100">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold">Add Bank Linked To +91 629077****</h1>
          <button className="p-2 -mr-2">
            <HelpCircle size={24} className="text-gray-600" />
          </button>
        </div>
        
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-4">This is required to set up your UPI account</p>
          <button className="text-purple-600 text-sm font-medium mb-4">Use a different mobile number</button>
          
          <div className="relative">
            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search By Bank Name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 pl-12 pr-4 py-3 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4">
        <h2 className="text-lg font-bold mb-4">Popular Banks</h2>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {popularBanks.map((bank) => (
            <motion.button
              key={bank.id}
              className="flex flex-col items-center text-center"
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden mb-2">
                <img src={bank.logo} alt={bank.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-sm">{bank.name}</span>
            </motion.button>
          ))}
        </div>

        <h2 className="text-lg font-bold mb-4">All Banks</h2>
        <div className="space-y-4">
          {allBanks.map((bank) => (
            <motion.button
              key={bank.id}
              className="w-full flex items-center p-4 bg-white rounded-lg"
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mr-3">
                <img src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt={bank.name} className="w-8 h-8" />
              </div>
              <div className="flex-1 text-left font-medium">{bank.name}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AddBankPage