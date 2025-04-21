import React from 'react';
import { ArrowLeft, HelpCircle, ChevronRight, CreditCard, Wallet, Users, Building2, Gift, Globe, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function ManagePaymentsPage() {
  const navigate = useNavigate();

  const paymentOptions = [
    {
      title: 'UPI Lite for "Lite" payments',
      description: 'Top up now and make instant PIN-less payments',
      action: 'Top Up Now',
      image: 'https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png'
    },
    {
      title: 'RuPay on UPI',
      description: 'Earn credit card rewards on UPI',
      icon: <CreditCard className="text-purple-600" size={24} />
    },
    {
      title: 'Wallet',
      description: 'Pay on any UPI QR up to ₹2 lakh',
      icon: <Wallet className="text-purple-600" size={24} />
    },
    {
      title: 'UPI Circle',
      description: 'Pay for people you trust',
      icon: <Users className="text-purple-600" size={24} />
    }
  ];

  const moreOptions = [
    { icon: <Building2 size={24} />, label: 'UPI Bank accounts' },
    { icon: <CreditCard size={24} />, label: 'Credit & Debit cards' },
    { icon: <Wallet size={24} />, label: 'UPI Lite' },
    { icon: <Settings size={24} />, label: 'AutoPay' },
    { icon: <CreditCard size={24} />, label: 'Credit line on UPI' },
    { icon: <Globe size={24} />, label: 'International' },
    { icon: <Gift size={24} />, label: 'Gift card' },
    { icon: <Settings size={24} />, label: 'UPI settings' }
  ];

  return (
    <div className="app-container flex flex-col h-full bg-gray-50">
      <div className="sticky top-0 bg-white z-10">
        <div className="flex justify-between items-center p-4">
          <button onClick={() => navigate(-1)} className="p-2">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold">Manage Payments</h1>
          <button className="p-2">
            <HelpCircle size={24} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="bg-purple-900 p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">UPI Lite for "Lite" payments</h2>
          <p className="text-sm opacity-90 mb-4">Top up now and make instant PIN-less payments</p>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-900 px-4 py-2 rounded-lg font-medium inline-flex items-center"
          >
            Top Up Now
            <ChevronRight size={20} className="ml-1" />
          </motion.button>
        </div>

        <div className="p-4">
          <h3 className="text-xl font-bold mb-4">Manage Payments</h3>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {paymentOptions.slice(1).map((option, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm"
                whileTap={{ scale: 0.98 }}
              >
                <div className="mb-3">{option.icon}</div>
                <h4 className="font-medium mb-1">{option.title}</h4>
                <p className="text-sm text-gray-600">{option.description}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-4">More options</h3>
          <div className="grid grid-cols-4 gap-4">
            {moreOptions.map((option, index) => (
              <motion.button
                key={index}
                className="flex flex-col items-center text-center"
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                  {option.icon}
                </div>
                <span className="text-xs">{option.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagePaymentsPage;