import React, { useState, useEffect } from 'react';
import { Bell, Search, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfilePage from '../pages/ProfilePage';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const profileImage =
    localStorage.getItem('profileImage') ||
    'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

  const handleScroll = (e) => {
    const scrollTop = e.currentTarget.scrollTop;
    setScrolled(scrollTop > 20);
  };

  useEffect(() => {
    const appContainer = document.querySelector('.app-container');
    if (appContainer) {
      appContainer.addEventListener('scroll', handleScroll);
      return () => {
        appContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <>
      <div
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-purple-700 text-white shadow-md' : 'bg-transparent text-gray-800'
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <button onClick={() => setShowProfile(true)} className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2 overflow-hidden">
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-sm font-medium flex items-center">
                  Alex Johnson <ChevronDown size={16} className="ml-1" />
                </div>
                <div className={`text-xs ${scrolled ? 'text-purple-200' : 'text-gray-500'}`}>
                  Welcome back!
                </div>
              </div>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                scrolled ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              <Search size={18} />
            </button>
            <button
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                scrolled ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              <Bell size={18} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showProfile && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setShowProfile(false)}
            />

            {/* Slide-in profile panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed left-0 top-0 bottom-0 w-full max-w-md z-50"
            >
              <ProfilePage onClose={() => setShowProfile(false)} isModal={true} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;