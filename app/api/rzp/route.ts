const Razorpay = require('razorpay');
const shortid = require('shortid');

export async function POST(req: Response, res: Request) {
    const razorpay = new Razorpay({
        key_id: process.env.RZP_KEY,
        key_secret: process.env.RZP_SECRET,
    });
    const request = await req.json();

    const payment_capture = 1;
    const price = request.price;

    const currency = 'INR'; //Put your desired currency's code , check in razorpay docs for allowed codes.
    const options = {
        amount: (price * 100).toString(),
        currency,
        receipt: shortid.generate(),
        payment_capture,
    };

    try {
        const response = await razorpay.orders.create(options);
        return new Response(JSON.stringify(response));
    } catch (err) {
        return new Response(JSON.stringify({ error: 'Razorpay order creation failed' }));
    }
}
