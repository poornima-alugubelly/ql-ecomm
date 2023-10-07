// YourBillingComponent.jsx
'use client';
import Script from 'next/script';

export const PaymentBtn = (price) => {
    const makePayment = async () => {
        try {
            const data = await fetch('/api/rzp', {
                method: 'POST',
                body: JSON.stringify(price),
            }).then((t) => t.json());
            console.log('data', data);
            const options = {
                currency: 'INR',
                amount: data.amount,
                name: 'Origins',
                description: 'Luxury Products',
                order_id: data.id,
                handler: function (response) {
                    // Validate payment at server - using webhooks is a better idea.
                    // alert(response.razorpay_payment_id);
                    // alert(response.razorpay_order_id);
                    // alert(response.razorpay_signature);
                    // TODO:toast
                    console.log('success');
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();

            paymentObject.on('payment.failed', function (response) {
                alert('Payment failed. Please try again. Contact support for help');
            });
        } catch {
            // TODO:toast
            console.log('error');
        }
    };

    return (
        <>
            <Script id="razorpay-checkout-js" src="https://checkout.razorpay.com/v1/checkout.js" />

            <button
                onClick={() => {
                    makePayment();
                }}
            >
                Buy
            </button>
        </>
    );
};
