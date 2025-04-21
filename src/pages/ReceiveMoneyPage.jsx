import React from 'react';
import { ArrowLeft, HelpCircle, Share2, Download, Copy } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function ReceiveMoneyPage() {
  const navigate = useNavigate();
  
  const handleDownloadQR = () => {
    const qrImage = document.getElementById('qr-code');
    const canvas = document.createElement('canvas');
    canvas.width = qrImage.width;
    canvas.height = qrImage.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(qrImage, 0, 0);
    
    const link = document.createElement('a');
    link.download = 'phonepe-qr.png';
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="app-container flex flex-col h-full bg-gray-50">
      <div className="sticky top-0 bg-white z-10">
        <div className="flex justify-between items-center p-4">
          <button onClick={() => navigate(-1)} className="p-2">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold">Receive Money</h1>
          <button className="p-2">
            <HelpCircle size={24} className="text-gray-600" />
          </button>
        </div>
        
        <div className="px-4 pb-2">
          <p className="text-sm text-gray-600">From any UPI app</p>
          <div className="flex items-center gap-2 mt-1">
            <img src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png" alt="PhonePe" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1280px-UPI-Logo-vector.svg.png" alt="BHIM" className="h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Pay_Logo.svg/2560px-Google_Pay_Logo.svg.png" alt="GPay" className="h-4" />
            <img src="https://logos-download.com/wp-content/uploads/2021/01/Paytm_Logo.png" alt="Paytm" className="h-4" />
          </div>
        </div>
      </div>

      <div className="flex-1 p-4">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-2">
              <img src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png" alt="Bank" className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="font-medium">IDFC First Bank - 1535</div>
              <div className="text-xs text-green-600 font-medium">Primary</div>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <img
              id="qr-code"
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=example@upi&pn=John%20Doe"
              alt="QR Code"
              className="w-64 h-64"
              crossOrigin="anonymous"
            />
          </div>

          <div className="flex justify-between gap-4 mb-6">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 bg-purple-100 text-purple-700 py-3 rounded-lg font-medium"
              onClick={() => {/* Handle share */}}
            >
              <Share2 size={20} />
              SHARE QR
            </motion.button>
            
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 bg-purple-100 text-purple-700 py-3 rounded-lg font-medium"
              onClick={handleDownloadQR}
            >
              <Download size={20} />
              DOWNLOAD QR
            </motion.button>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">UPI IDs and Numbers</h3>
            {['sayantansardar2003@ybl', 'sayantansardar2003@ibl', 'sayantansardar2003@axl'].map((id, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <div>
                  <div className="font-medium">{id}</div>
                  {index === 0 && <div className="text-xs text-gray-500">Displayed on home</div>}
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="p-2"
                  onClick={() => navigator.clipboard.writeText(id)}
                >
                  <Copy size={20} className="text-gray-600" />
                </motion.button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReceiveMoneyPage;