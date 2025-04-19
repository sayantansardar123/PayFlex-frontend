import React, { useState } from 'react';
import { ArrowLeft, Clock, HelpCircle, MoreVertical, Image, Plus, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';

function ChatAndSendPage() {
  const navigate = useNavigate();
  const { contactId } = useParams();
  const [amount, setAmount] = useState('');

  const contact = {
    name: 'MeAirtel',
    phone: '+917750826267',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  };

  const transactions = [
    { id: 1, amount: '₹29', status: 'Sent Securely', time: '3:44 PM' },
    { id: 2, amount: '₹1', status: 'Received Instantly', time: '9:48 PM' },
    { id: 3, amount: '₹2', status: 'Sent Securely', time: '10:07 PM' },
    { id: 4, amount: '₹600', status: 'Sent Securely', time: '10:08 PM' }
  ];

  const handleSend = () => {
    if (amount) {
      navigate('/pin-entry', { state: { amount } });
    }
  };

  return (
    <div className="app-container flex flex-col h-full bg-gray-50">
      <div className="sticky top-0 bg-white z-10 border-b border-gray-100">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center flex-1">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
              <img src={contact.image} alt={contact.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-medium">{contact.name}</div>
              <div className="text-sm text-gray-500">{contact.phone}</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button>
              <Clock size={20} className="text-gray-600" />
            </button>
            <button>
              <HelpCircle size={20} className="text-gray-600" />
            </button>
            <button>
              <MoreVertical size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4">
        <div className="space-y-4">
          <div className="text-center text-sm text-gray-500">August 16, 2024</div>
          {transactions.map((transaction) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-end"
            >
              <div className="bg-purple-100 rounded-lg p-3 max-w-[80%]">
                <div className="text-lg font-medium">{transaction.amount}</div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 size={16} className="mr-1" />
                  {transaction.status}
                </div>
                <div className="text-right text-xs text-gray-500 mt-1">{transaction.time}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Enter amount or chat"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-gray-100 px-4 py-3 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none"
            />
          </div>
          <button className="p-2">
            <Image size={24} className="text-gray-600" />
          </button>
          <button className="p-2">
            <Plus size={24} className="text-gray-600" />
          </button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleSend}
            className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center"
            disabled={!amount}
          >
            <Send size={20} className="text-white" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default ChatAndSendPage;