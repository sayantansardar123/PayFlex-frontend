import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import BalanceCard from '../components/BalanceCard';
import QuickActions from '../components/QuickActions';
import RecentTransactions from '../components/RecentTransactions';
import RewardsSection from '../components/RewardsSection';
import BottomNavigation from '../components/BottomNavigation';
// import FloatingActionButton from '../components/FloatingActionButton';

function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="app-container flex flex-col h-full">
      <Header />
      
      <motion.div 
        className="flex-1 overflow-auto pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <BalanceCard />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <QuickActions />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <RecentTransactions />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <RewardsSection />
        </motion.div>
        
        <div className="h-20"></div>
      </motion.div>
      
      {/* <FloatingActionButton /> */}
      <BottomNavigation />
    </div>
  );
}

export default HomePage;