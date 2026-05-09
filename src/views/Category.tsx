import { useParams } from "react-router-dom";
import catImage from '../assets/images/catImage.png'
import { products } from "../shared/data";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger)

const Category = () => {
    const { categoryName } = useParams();
    const root = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: root.current,
                    start: "top 80%",
                },
            });

            tl.from(".cat-hero", {
                opacity: 0,
                x: -150,
                duration: 1,
            });

            tl.from(".cat-title", {
                opacity: 0,
                y: 80,
                duration: 0.8,
            }, "-=0.5");

            for (let i = 0; i < products.length; i += 2) {
                const left = `.cat-product-${i}`;
                const right = `.cat-product-${i + 1}`;

                const rowTL = gsap.timeline({
                    scrollTrigger: {
                        trigger: left,
                        start: "top 85%",
                        toggleActions: "play reverse play reverse",
                    },
                });

                rowTL.from(left, {
                    opacity: 0,
                    x: -100,
                    duration: 0.8,
                });

                if (products[i + 1]) {
                    rowTL.from(right, {
                        opacity: 0,
                        x: 100,
                        duration: 0.8,
                    }, "-=0.5")
                }
            }
        }, root);

        return () => ctx.revert()
    }, [])

    return (
        <div ref={root} className="grid md:grid-cols-2">
            <div className="relative">
                <img
                    src={catImage}
                    alt="Category"
                    className=" cat-hero w-full h-[420px] md:h-[720px] object-cover"
                />

                <h1 className="cat-title absolute md:top-1/5 top-1/2 left-1/2 
                   -translate-x-1/2 -translate-y-1/2
                   text-6xl text-white font-bold capitalize text-center z-10">
                    {categoryName?.replaceAll("-", " ")}
                </h1>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1">
                {products.map((product, i) => (
                    <Link to={`/product/${product.title.toLowerCase().replace(" ", "-")}`}>
                        <img
                            key={product.title}
                            src={product.img}
                            alt={product.title}
                            className={`cat-product-${i} w-full md:h-[360px] border-b object-cover`}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
};

export default Category;