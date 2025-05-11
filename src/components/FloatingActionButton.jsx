// import React, { useState } from 'react';
// import { QrCode, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// function FloatingActionButton() {
//   const [isOpen, setIsOpen] = useState(false);
  
//   return (
//     <>
//       <motion.button 
//         className="floating-action-button pulse-animation"
//         onClick={() => setIsOpen(true)}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <QrCode size={24} />
//       </motion.button>
      
//       <AnimatePresence>
//         {isOpen && (
//           <>
//             <motion.div 
//               className="fixed inset-0 bg-black bg-opacity-50 z-40"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsOpen(false)}
//             />
            
//             <motion.div 
//               className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white rounded-t-2xl p-5 z-50"
//               initial={{ y: '100%' }}
//               animate={{ y: 0 }}
//               exit={{ y: '100%' }}
//               transition={{ type: 'spring', damping: 25 }}
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-lg font-semibold">Scan & Pay</h2>
//                 <button 
//                   onClick={() => setIsOpen(false)}
//                   className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
//                 >
//                   <X size={18} />
//                 </button>
//               </div>
              
//               <div className="flex flex-col items-center justify-center p-5">
//                 <div className="w-64 h-64 bg-purple-50 rounded-xl mb-5 flex items-center justify-center">
//                   <div className="w-56 h-56 border-2 border-purple-700 rounded-lg flex items-center justify-center">
//                     <div className="text-center p-4">
//                       <QrCode size={150} className="text-purple-700 mx-auto mb-2" />
//                       <p className="text-sm text-gray-500">Scan QR code to pay</p>
//                     </div>
//                   </div>
//                 </div>
                
//                 <motion.button 
//                   className="w-full py-3 bg-purple-700 text-white rounded-lg font-medium"
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   Open QR Scanner
//                 </motion.button>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// export default FloatingActionButton;