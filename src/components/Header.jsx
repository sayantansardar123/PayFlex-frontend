import React, { useState, useEffect } from 'react';
import { Bell, User, Search, ChevronDown } from 'lucide-react';

function Header() {
  const [scrolled, setScrolled] = useState(false);

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
    <div className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-purple-700 text-white shadow-md' : 'bg-transparent text-gray-800'
    }`}>
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2">
            <User size={18} className={scrolled ? 'text-purple-700' : 'text-purple-700'} />
          </div>
          <div>
            <div className="text-sm font-medium flex items-center">
              Alex Johnson <ChevronDown size={16} className="ml-1" />
            </div>
            <div className={`text-xs ${scrolled ? 'text-purple-200' : 'text-gray-500'}`}>
              Welcome back!
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className={`w-8 h-8 rounded-full flex items-center justify-center ${
            scrolled ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'
          }`}>
            <Search size={18} />
          </button>
          <button className={`w-8 h-8 rounded-full flex items-center justify-center ${
            scrolled ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'
          }`}>
            <Bell size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;