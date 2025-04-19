import React from 'react';
import { Gift, Star, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

function RewardsSection() {
  return (
    <div className="mx-4 mb-6">
      <motion.div 
        className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl p-4 shadow-md overflow-hidden relative"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-yellow-300 bg-opacity-30 rounded-full"></div>
        <div className="absolute right-8 bottom-8 w-12 h-12 bg-orange-300 bg-opacity-30 rounded-full"></div>
        
        <div className="flex items-start mb-3">
          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
            <Gift size={18} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold">PhonePe Rewards</h3>
            <p className="text-xs text-white text-opacity-80">Collect rewards on every transaction</p>
          </div>
        </div>
        
        <div className="bg-white bg-opacity-20 rounded-lg p-3 mb-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-white text-opacity-80">Your Rewards</div>
              <div className="flex items-center text-white">
                <Star size={16} className="text-yellow-300 mr-1" fill="#facc15" />
                <span className="font-bold text-lg">2,450</span>
                <span className="text-xs ml-1 text-opacity-80">points</span>
              </div>
            </div>
            <motion.button 
              className="bg-white text-orange-600 text-xs font-medium py-1.5 px-3 rounded-full"
              whileTap={{ scale: 0.95 }}
            >
              Redeem Now
            </motion.button>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-white text-xs">3 new offers available</div>
          <button className="text-white text-xs flex items-center">
            View All <ChevronRight size={14} />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default RewardsSection;