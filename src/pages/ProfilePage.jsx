import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  HelpCircle, 
  Languages, 
  Bell, 
  Settings, 
  Moon, 
  AlertCircle,
  Fingerprint,
  KeyRound,
  UserX,
  LogOut,
  ChevronRight,
  QrCode,
  Wallet
} from 'lucide-react';
import { motion } from 'framer-motion';

function ProfilePage() {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.contains('dark'));
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem('profileImage') || 
    'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  );
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result;
        setProfileImage(imageData);
        localStorage.setItem('profileImage', imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleLogout = () => {
    // Add logout logic here
    navigate('/');
  };

  const menuItems = [
    {
      title: 'QUICK ACTIONS',
      items: [
        { icon: <QrCode size={24} />, label: 'QR codes & UPI IDs', onClick: () => navigate('/receive-money') },
        { icon: <Wallet size={24} />, label: 'Manage payments', onClick: () => navigate('/manage-payments') }
      ]
    },
    {
      title: 'PREFERENCES',
      items: [
        { icon: <Languages size={24} />, label: 'Languages' },
        { icon: <Bell size={24} />, label: 'Bill notifications' },
        { icon: <Settings size={24} />, label: 'Permissions' },
        { icon: <Moon size={24} />, label: 'Theme', toggle: true, isActive: isDarkMode, onToggle: toggleTheme },
        { icon: <AlertCircle size={24} />, label: 'Reminders' }
      ]
    },
    {
      title: 'SECURITY',
      items: [
        { icon: <Fingerprint size={24} />, label: 'Biometric & screen lock', toggle: true },
        { icon: <KeyRound size={24} />, label: 'Change passcode' },
        { icon: <UserX size={24} />, label: 'Blocked accounts' }
      ]
    }
  ];

  return (
    <div className={`app-container flex flex-col h-full ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className={`sticky top-0 z-10 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex justify-between items-center p-4">
          <button onClick={() => navigate(-1)} className="p-2">
            <ArrowLeft size={24} className={isDarkMode ? 'text-white' : 'text-gray-800'} />
          </button>
          <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Profile</h1>
          <button className="p-2">
            <HelpCircle size={24} className={isDarkMode ? 'text-white' : 'text-gray-800'} />
          </button>
        </div>

        <div className="p-4 flex items-center">
          <div className="relative">
            <motion.div
              whileTap={{ scale: 0.95 }}
              onClick={handleImageClick}
              className="w-16 h-16 rounded-full overflow-hidden cursor-pointer"
            >
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            </motion.div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
            />
          </div>
          <div className="ml-4">
            <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Sayantan Sardar
            </h2>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              +91 8207208709
            </p>
          </div>
          <button className="ml-auto text-purple-600 font-medium">
            Manage
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        {menuItems.map((section, index) => (
          <div key={index} className="mb-6">
            <h3 className={`px-4 py-2 text-sm font-medium ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {section.title}
            </h3>
            <div className={isDarkMode ? 'bg-gray-800' : 'bg-white'}>
              {section.items.map((item, itemIndex) => (
                <motion.button
                  key={itemIndex}
                  className="w-full flex items-center justify-between px-4 py-3 border-b border-gray-100"
                  onClick={item.onClick}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    <span className={`mr-3 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                      {item.icon}
                    </span>
                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                      {item.label}
                    </span>
                  </div>
                  {item.toggle ? (
                    <div 
                      className={`w-12 h-6 rounded-full relative ${
                        item.isActive ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        item.onToggle?.();
                      }}
                    >
                      <div className={`absolute w-5 h-5 rounded-full bg-white top-0.5 transition-all ${
                        item.isActive ? 'right-0.5' : 'left-0.5'
                      }`} />
                    </div>
                  ) : (
                    <ChevronRight size={20} className={isDarkMode ? 'text-gray-400' : 'text-gray-400'} />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        ))}

        <div className="px-4 py-6">
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={handleLogout}
            className="w-full flex items-center justify-center text-red-500 font-medium py-3 rounded-lg border-2 border-red-500"
          >
            <LogOut size={20} className="mr-2" />
            Log out
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;