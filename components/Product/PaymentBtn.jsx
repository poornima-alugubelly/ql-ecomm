// YourBillingComponent.jsx
'use client';
import { rzpHandlerFunc } from '@/utils/razorpay.utils';
import Script from 'next/script';

export const PaymentBtn = () => {
    const makePayment = async ({ productId = null }) => {
        const data = await fetch('/api/rzp', {
            method: 'POST',

            body: JSON.stringify({ productId }),
        }).then((t) => t.json());
        console.log('data', data);
        const options = {
            currency: 'INR',
            amount: data.amount,
            order_id: data.id,
            handler: function (response) {
                // Validate payment at server - using webhooks is a better idea.
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature);
                console.log('success');
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();

        paymentObject.on('payment.failed', function (response) {
            alert('Payment failed. Please try again. Contact support for help');
        });
    };

    return (
        <>
            <Script id="razorpay-checkout-js" src="https://checkout.razorpay.com/v1/checkout.js" />

            <button
                onClick={() => {
                    makePayment({ productId: 'example_ebook' });
                }}
            >
                Buy
            </button>
        </>
    );
};
