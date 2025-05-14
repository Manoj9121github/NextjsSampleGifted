// src/app/payment/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../CartContext/CartContext';

const PaymentPage = () => {
  const router = useRouter();
  const { cart } = useCart();

  useEffect(() => {
    const checkout = async () => {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cartItems: cart }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; 
      }
    };

    checkout();
  }, [cart]);

  return <p>Redirecting to payment...</p>;
};

export default PaymentPage;
