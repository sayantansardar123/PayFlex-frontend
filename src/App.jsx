import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import ScanPayPage from './pages/ScanPayPage';
import PinEntryPage from './pages/PinEntryPage';
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import WalletPage from './pages/WalletPage';
import CheckBalancePage from './pages/CheckBalancePage';
import BankBalancePage from './pages/BankBalancePage';
import AddBankPage from './pages/AddBankPage';
import TransferToContactPage from './pages/TransferToContactPage';
import ChatAndSendPage from './pages/ChatAndSendPage';
import ProfilePage from './pages/ProfilePage';
import ReceiveMoneyPage from './pages/ReceiveMoneyPage';
import ManagePaymentsPage from './pages/ManagePaymentsPage';
import BottomNavigation from './components/BottomNavigation';
import FloatingActionButton from './components/FloatingActionButton';
import './index.css';

function AppContent() {
  const location = useLocation();
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative max-w-md w-full h-[800px] bg-white shadow-lg rounded-xl overflow-hidden">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/scan-pay" element={<ScanPayPage />} />
            <Route path="/pin-entry" element={<PinEntryPage />} />
            <Route path="/payment-success" element={<PaymentSuccessPage />} />
            <Route path="/wallet" element={<WalletPage />} />
            <Route path="/check-balance" element={<CheckBalancePage />} />
            <Route path="/bank-balance/:bankId" element={<BankBalancePage />} />
            <Route path="/add-bank" element={<AddBankPage />} />
            <Route path="/transfer" element={<TransferToContactPage />} />
            <Route path="/chat-and-send/:contactId" element={<ChatAndSendPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/receive-money" element={<ReceiveMoneyPage />} />
            <Route path="/manage-payments" element={<ManagePaymentsPage />} />
          </Routes>
        </AnimatePresence>
        {location.pathname === '/' && <FloatingActionButton />}
        {['/', '/history', '/finance', '/profile'].includes(location.pathname) && <BottomNavigation />}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;