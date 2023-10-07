import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PaymentBtn } from '../../../components/Product/PaymentBtn';
// async function getProducts() {
//     try {
//         const res = await fetch('http://localhost:3000/products.json');
//         const data = await res.json();

//         return data;
//     } catch (error) {
//         if (error instanceof Error) {
//             console.error(error.message);
//         }
//     }
// }
const Products = async ({ params }: { params: { id: string } }) => {
    const item = {
        id: '123',
        name: 'Mink fur coat',
        description: 'amazing fur coat',
        brands: ['gucci', 'prada'],
        price: 14555,
        sizeOptions: ['L', 'M'],
        productImages: [
            'https://content.italic.com/df2eba8a-ca34-43a7-9f3c-780244f4266e.jpeg?ixlib=react-9.8.0&q=80&w=992&auto=format&fit=max',
            'https://content.italic.com/2055d867-f0de-473c-a9ee-dba053d6299f.jpeg?ixlib=react-9.8.0&q=80&w=992&auto=format&fit=max',
            'https://content.italic.com/c103b2bb-a9e4-4900-9e1f-0d53d0048e3f.jpeg?ixlib=react-9.8.0&q=80&w=992&auto=format&fit=max',
            'https://content.italic.com/7627c6de-bb49-440f-a56b-b281222951b4.jpeg?ixlib=react-9.8.0&q=80&w=992&auto=format&fit=max',
        ],
        materialsAndCare: [
            'Easy to wash',
            ['Easy to wash', 'made with top grade fur', 'hand wash only'],
            'hand wash only',
        ],
        aboutManufacturer: [
            'EST 1800',
            ['EST 1800', 'Manufacturer of products of gucci and prada', 'Delivers exquisite quality'],
            'Delivers exquisite quality',
        ],
        pricesComparison: {
            gucci: 30000,
            prada: 50000,
        },
    };
    // const products = await getProducts();

    return (
        <div className="flex gap-6 my-6">
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                {item.productImages.map((imgSrc) => {
                    return <Image src={imgSrc} width={400} height={400} alt="product" key={imgSrc}></Image>;
                })}
            </div>

            <div>
                <p className="text-5xl font-bold">{item.name}</p>
                <p className="text-gray-400">{item.description}</p>
                <div className="bg-yellow-300">
                    <span>From the makers of</span>
                    {item.brands.map((item) => {
                        return <span key={item}>{item},</span>;
                    })}
                </div>
                {item.sizeOptions.map((item, index) => {
                    return (
                        <Badge variant="outline" key={item + index}>
                            {item}
                        </Badge>
                    );
                })}
                <p>₹{item.price}</p>

                <ul>
                    <li>
                        {Object.entries(item.pricesComparison).map(([key, value]) => (
                            <div key={key}>
                                <span>{key}</span>
                                <span className="line-through">{value}</span>
                            </div>
                        ))}
                    </li>
                </ul>
                <Button>Reserve your piece</Button>
                <p>Only 10 pieces left</p>
                <p>Materials and care</p>
                <ul>
                    {item.materialsAndCare.map((point, index) => {
                        return <li key={index + 'materials'}>{point}</li>;
                    })}
                </ul>
                <p>Meet the manufacturer</p>
                <ul>
                    {item.aboutManufacturer.map((point, index) => {
                        return <li key={index + 'manufacterer'}>{point}</li>;
                    })}
                </ul>
                <PaymentBtn />
            </div>
        </div>
    );
};

export default Products;
