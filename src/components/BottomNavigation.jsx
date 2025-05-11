import React from 'react';
import { Home, Repeat, QrCode, PieChart, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';

function NavItem({ icon, label, isActive, onClick }) {
  return (
    <motion.button 
      className={`nav-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
    >
      <div className="mb-1">
        {icon}
      </div>
      <span>{label}</span>
      {isActive && (
        <motion.div 
          className="h-1 w-5 bg-purple-700 rounded-full mt-1"
          layoutId="activeTab"
        />
      )}
    </motion.button>
  );
}

NavItem.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { id: 'home', icon: <Home size={20} />, label: 'Home', path: '/home' },
    { id: 'history', icon: <Repeat size={20} />, label: 'History', path: '/history/681f7d12e791885f87b254a5' },
    { id: 'scan', icon: <QrCode size={20} />, label: 'Scan & Pay', path: '/scan-pay' },
    { id: 'finance', icon: <PieChart size={20} />, label: 'Finance', path: '/finance' },
    { id: 'profile', icon: <Settings size={20} />, label: 'Profile', path: '/profile' },
  ];
  
  return (
    <div className="fixed bottom-0 w-full max-w-md bg-white border-t border-gray-100 shadow-lg rounded-t-xl">
      <div className="grid grid-cols-5 py-2">
        {navItems.map(item => (
          <NavItem 
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={location.pathname === item.path}
            onClick={() => navigate(item.path)}
          />
        ))}
      </div>
    </div>
  );
}

export default BottomNavigation;