import React from 'react';
import { Send, Smartphone, CreditCard, Zap, Clock, Wallet, Gift, Percent } from 'lucide-react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function QuickAction({ icon, label, bgColor, onClick }) {
  return (
    <motion.button 
      className="quick-action-btn"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <div className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center mb-1 text-white`}>
        {icon}
      </div>
      <span className="text-xs text-gray-700">{label}</span>
    </motion.button>
  );
}

QuickAction.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    { icon: <Send size={20} />, label: 'Transfer', bgColor: 'bg-blue-500', onClick: () => navigate('/transfer') },
    { icon: <Smartphone size={20} />, label: 'Mobile', bgColor: 'bg-purple-500' },
    { icon: <CreditCard size={20} />, label: 'Cards', bgColor: 'bg-indigo-500' },
    { icon: <Zap size={20} />, label: 'Balance', bgColor: 'bg-yellow-500', onClick: () => navigate('/check-balance') },
    { icon: <Clock size={20} />, label: 'History', bgColor: 'bg-gray-700', onClick: () => navigate('/history') },
    { icon: <Wallet size={20} />, label: 'Wallet', bgColor: 'bg-green-500', onClick: () => navigate('/wallet') },
    { icon: <Gift size={20} />, label: 'Rewards', bgColor: 'bg-red-500' },
    { icon: <Percent size={20} />, label: 'Offers', bgColor: 'bg-orange-500' },
  ];

  return (
    <div className="mx-4 mb-6 bg-white rounded-xl p-4 shadow-sm">
      <h2 className="section-title">Quick Actions</h2>
      <div className="grid grid-cols-4 gap-3">
        {actions.map((action, index) => (
          <QuickAction 
            key={index} 
            icon={action.icon} 
            label={action.label} 
            bgColor={action.bgColor}
            onClick={action.onClick}
          />
        ))}
      </div>
    </div>
  );
}

export default QuickActions;