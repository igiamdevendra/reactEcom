import React from 'react';
import { QRCode } from 'react-qr-code';

const Payment = () => {
  const paymentData = "https://your-payment-link.com"; 

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Payment Page</h1>
      <p className="mb-4">Scan the QR code below to make a payment:</p>
      <QRCode value={paymentData} size={256} />
      <p className="mt-4">
        Or visit: <a href={paymentData} className="text-blue-500 underline">{paymentData}</a>
      </p>
    </div>
  );
};

export default Payment;
