import React, { useState } from 'react';
import axios from 'axios';

// Interface for component props
interface PaymentComponentProps {
  amount: number;
}

// Interface for Create Order API response
interface CreateOrderResponse {
  amount: number;
  razorpayOrderId: string;
  orderId: string;
}

// Interface for Razorpay success handler response
interface RazorpaySuccessHandlerResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

// Interface for Razorpay options
interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  order_id: string;
  handler: (response: RazorpaySuccessHandlerResponse) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
}

// Global declaration for Razorpay
declare global {
  interface Window {
    Razorpay: any;
  }
}

const PaymentComponent: React.FC<PaymentComponentProps> = ({ amount }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const loadScript = (src: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const initializePayment = async (): Promise<void> => {
    setLoading(true);
    setError('');

    try {
      // Load Razorpay script
      const scriptLoaded = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
      if (!scriptLoaded) {
        throw new Error('Razorpay SDK failed to load');
      }


      const options: RazorpayOptions = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID as string,
        amount: data.amount,
        currency: "INR",
        name: "My Store",
        order_id: data.razorpayOrderId,
        handler: async (response) => {
          try {
            await axios.post('/api/payments/verify', {
              orderId: data.orderId,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature
            });
            alert('Payment Successful!');
          } catch (err) {
            alert('Payment verification failed');
          }
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999"
        },
        theme: {
          color: "#3399cc"
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', (response: any) => {
        alert(`Payment Failed: ${response.error.description}`);
      });
      rzp.open();

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to initialize payment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button 
        onClick={initializePayment}
        disabled={loading}
      >
        {loading ? 'Processing...' : `Pay ₹${amount}`}
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default PaymentComponent;