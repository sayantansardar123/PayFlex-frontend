import React, { useContext, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppContext } from '../AppContext';
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';


function PinEntryPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const store = useContext(AppContext);
  const [pin, setPin] = useState(['', '', '', '', '', '']);
  const amount = location.state?.amount || '0';

  const handlePinChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
      
      if (value && index < 5) {
        document.getElementById(`pin-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      senderId: store.user._id,
      receiverId: location.state?.userData.userId,
      amount: amount
    };
    console.log('Payload: ', payload);
    let pinString = pin.join('');

    if (pin.join('').length === 6) {
      console.log('pinString: ', pinString);
      console.log('user.upiPin: ', store.user.upiPin);
      if(Number(pinString) === store.user.upiPin){
        try {
          const { data } = await axios.post(
            `${import.meta.env.VITE_BASEURL}/api/v1/send-money`, 
            payload
          );
          if(data.success){
            console.log(data.message);
            navigate('/payment-success', { state: { amount } });
          }
        } catch(err) {
          console.error(err);
        }
      }
      else {
        toast.error("Wrong Pin Entered");
      }
    }
  };

  return (
    <div className="app-container flex flex-col h-full bg-gray-50">
      <Toaster position="top-center" />
      <div className="sticky top-0 bg-purple-700 text-white z-10">
        <div className="flex items-center p-4">
          <button onClick={() => navigate(-1)} className="mr-3">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-semibold">Enter UPI PIN</h1>
        </div>
      </div>

      <div className="flex-1 p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-sm"
        >
          <div className="text-center mb-6">
            <div className="text-gray-600 mb-2">Amount to Pay</div>
            <div className="text-3xl font-bold">₹{amount}</div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex justify-center gap-3 mb-8">
              {pin.map((digit, index) => (
                <input
                  key={index}
                  id={`pin-${index}`}
                  type="password"
                  value={digit}
                  onChange={(e) => handlePinChange(index, e.target.value)}
                  className="w-12 h-12 border-2 border-purple-200 rounded-lg text-center text-xl font-bold focus:border-purple-500 focus:outline-none"
                  maxLength="1"
                />
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              className="w-full bg-purple-700 text-white py-4 rounded-lg font-semibold text-lg"
              type="submit"
            >
              Pay Now
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default PinEntryPage;