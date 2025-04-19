import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

function PaymentSuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const amount = location.state?.amount || '0';

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="app-container flex flex-col h-full bg-purple-700">
      <div className="flex-1 flex flex-col items-center justify-center p-4 text-white">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mb-6"
        >
          <CheckCircle size={80} className="text-white" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
          <p className="text-xl mb-4">₹{amount}</p>
          <p className="text-sm opacity-80">Redirecting to home...</p>
        </motion.div>
      </div>
    </div>
  );
}

export default PaymentSuccessPage;