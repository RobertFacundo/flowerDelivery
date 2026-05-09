import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../shared/data";
import { useAppDispatch } from "../shared/redux/hooks";
import { addToCart } from "../shared/redux/slices/cartSlice";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slugify = (text: string) =>
    text.toLowerCase().replaceAll(" ", "-");

const Product = () => {
    const [added, setAdded] = useState(false);
    const { productName } = useParams();
    const dispatch = useAppDispatch();
    const root = useRef<HTMLDivElement>(null);

    const product = products.find(
        (p) => slugify(p.title) === productName
    );

    useEffect(() => {

        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: root.current,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse",
                },
            });

            tl.from(".product-image", {
                opacity: 0,
                x: -120,
                duration: 1,
            });

            tl.from(".product-content", {
                opacity: 0,
                x: 120,
                duration: 1,
            }, "-=0.7");

            tl.from(".product-title", {
                opacity: 0,
                y: 50,
                duration: 0.7,
            }, "-=0.5");

            tl.from(".product-info", {
                opacity: 0,
                y: 30,
                stagger: 0.2,
                duration: 0.6,
            }, "-=0.4");

        }, root);

        return () => ctx.revert();

    }, []);


    if (!product) return <p>Product not found</p>

    const handleAddToCart = () => {
        dispatch(addToCart(product));

        setAdded(true);

        setTimeout(() => {
            setAdded(false)
        }, 1500)
    }

    return (
        <div ref={root} className="grid md:grid-cols-2 border-b">

            <img
                src={product.img}
                alt={product.title}
                className="product-image w-full md:h-[320px] h-full md:h-full object-cover"
            />

            <div className="product-content flex flex-col items-start p-8 gap-6 justify-around">

                <div className="flex flex-col gap-16">
                    <h1 className="product-title text-5xl md:text-6xl">{product.title}</h1>
                    <p className="product-info text-2xl font-semibold">${product.price}</p>
                    <p className="product-info text-gray-600">{product.description}</p>
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