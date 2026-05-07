import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../shared/data";
import { useAppDispatch } from "../shared/redux/hooks";
import { addToCart } from "../shared/redux/slices/cartSlice";

const slugify = (text: string) =>
    text.toLowerCase().replaceAll(" ", "-");

const Product = () => {
    const [added, setAdded] = useState(false);
    const { productName } = useParams();
    const dispatch = useAppDispatch();

    const product = products.find(
        (p) => slugify(p.title) === productName
    );

    if (!product) return <p>Product not found</p>

    const handleAddToCart = () => {
        dispatch(addToCart(product));

        setAdded(true);

        setTimeout(() => {
            setAdded(false)
        }, 1500)
    }

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

                <button
                    onClick={handleAddToCart}
                    className={`
    px-8 py-4 text-white transition cursor-pointer
    ${added ? 'bg-green-700' : 'bg-black hover:bg-black/90'}
`}
                >
                    {added ? "Added ✓" : "Add to basket"}
                </button>

            </div>
        </div>
    )
};

export default Product;