// pages/api/razorpay.js
const Razorpay = require('razorpay');
const shortid = require('shortid');

// Initialize razorpay object

export async function POST(req: Response, res: Request) {
    const razorpay = new Razorpay({
        key_id: process.env.RZP_KEY,
        key_secret: process.env.RZP_SECRET,
    });

    const payment_capture = 1;
    const price = 500; //Put your desired amount here

    const currency = 'INR'; //Put your desired currency's code , check in razorpay docs for allowed codes.
    const options = {
        amount: (price * 100).toString(),
        currency,
        receipt: shortid.generate(), //use uid() if installed uid
        payment_capture,
    };

    try {
        const response = await razorpay.orders.create(options);
        console.log(response);
        return new Response(JSON.stringify(response));
    } catch (err) {
        console.log('error');
        // res.status(400).json(err);
    }
    return new Response(JSON.stringify({ success: false }));
}
