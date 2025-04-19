import React, { useState } from 'react';
import { ArrowLeft, Search, RefreshCw, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function TransferToContactPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const contacts = [
    {
      id: '1',
      name: 'A M Akankshit',
      phone: '+919337407174',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '2',
      name: 'A M Akankshit',
      phone: '+919692750014',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '3',
      name: 'Abhilash Patel',
      phone: '+917504886291',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '4',
      name: 'Abhinav Sharma',
      phone: '+919948197023',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '5',
      name: 'Abhishek (Arpan Friend)',
      phone: '+919901061010',
      initials: 'AF'
    },
    {
      id: '6',
      name: 'Address Verification',
      phone: '+919886912836',
      initials: 'AV'
    },
    {
      id: '7',
      name: 'Adiraju (Flat Owner)',
      phone: '+918095777997',
      initials: 'AO'
    },
    {
      id: '8',
      name: 'Aditya Birla HR',
      phone: '+917980238813',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.phone.includes(searchQuery)
  );

  return (
    <div className="app-container flex flex-col h-full bg-gray-50">
      <div className="sticky top-0 bg-white z-10">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-xl font-bold">Select Contact</h1>
          </div>
          <div className="flex items-center gap-3">
            <button>
              <RefreshCw size={20} className="text-gray-600" />
            </button>
            <button>
              <HelpCircle size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        <div className="px-4 pb-4">
          <div className="relative">
            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Enter a mobile number or name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 pl-12 pr-4 py-3 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="px-4 py-2">
          <h2 className="text-gray-500 text-sm mb-2">ALL CONTACTS</h2>
          <div className="space-y-4">
            {filteredContacts.map((contact) => (
              <motion.button
                key={contact.id}
                className="w-full flex items-center"
                onClick={() => navigate(`/chat-and-send/${contact.id}`)}
                whileTap={{ scale: 0.98 }}
              >
                {contact.image ? (
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                    <img src={contact.image} alt={contact.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center mr-3">
                    <span className="text-white text-lg font-medium">{contact.initials}</span>
                  </div>
                )}
                <div className="flex-1 text-left">
                  <div className="font-medium">{contact.name}</div>
                  <div className="text-gray-500 text-sm">{contact.phone}</div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferToContactPage;