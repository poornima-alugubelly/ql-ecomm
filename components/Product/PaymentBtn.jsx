// YourBillingComponent.jsx
'use client';
import Script from 'next/script';
import { Button } from '../ui/button';
import { formatNumber } from '@/utils/numbers.utils';
import { BRAND_NAME } from '@/constants/common.constants';

export const PaymentBtn = ({ body, requiredPayment }) => {
    const { price, notes } = body;

    const makePayment = async () => {
        try {
            const data = await fetch('/api/rzp', {
                method: 'POST',
                body: JSON.stringify({ price, notes }),
            }).then((t) => t.json());

            const options = {
                currency: 'INR',
                amount: data.amount,
                name: BRAND_NAME,
                description: 'Luxury Products',
                order_id: data.id,
                notes: data.notes,
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
            <p className="text-xs flex gap-1 items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-info"
                >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                </svg>
                This product is in waitlist, book now to claim piece
            </p>
            <Button
                onClick={() => {
                    makePayment();
                }}
                disabled={requiredPayment && !notes.size}
            >
                Reserve your piece for ₹{formatNumber(price)}
            </Button>
        </>
    );
};
