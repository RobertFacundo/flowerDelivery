import { useParams } from "react-router-dom";
import { products } from "../shared/data";

const slugify = (text: string) =>
    text.toLowerCase().replaceAll(" ", "-");

const Product = () => {
    const { productName } = useParams();

    const product = products.find(
        (p) => slugify(p.title) === productName
    );

    if (!product) return <p>Product not found</p>

    return (
        <div className="grid md:grid-cols-2 border-b">

            <img
                src={product.img}
                alt={product.title}
                className="w-full md:h-[320px] h-full md:h-full object-cover"
            />

            <div className="flex flex-col items-start p-8 gap-6 justify-around">

                <div className="flex flex-col gap-16">
                    <h1 className="text-5xl md:text-6xl">{product.title}</h1>
                    <p className="text-2xl font-semibold">${product.price}</p>
                    <p className="text-gray-600">{product.description}</p>
                </div>

                <button className="px-8 py-4 bg-black text-white hover:bg-gray-800 transition">
                    Add to basket
                </button>

            </div>
        </div>
    )
};

export default Product;