import { Link } from "react-router-dom";
import { categories } from "../../shared/data";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CategoryGrid = () => {
    const root = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            categories.forEach((_, i) => {
                const rowSelector = `.category-row-${i}`;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: rowSelector,
                        start: "top 80%",
                        toggleActions: "play reverse play reverse",
                    },
                });

                tl.from(`${rowSelector} .cat-img`, {
                    opacity: 0,
                    x: i % 2 === 0 ? -100 : 100, // imagen entra desde izquierda o derecha según posición
                    duration: 0.8,
                });

                tl.from(
                    `${rowSelector} .cat-text`,
                    {
                        opacity: 0,
                        y: 50,
                        duration: 0.8,
                    },
                    "-=0.5"
                );
            });
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={root} className="border-b">
            {categories.map((cat, i) => {
                const isEven = i % 2 === 0;

                return (
                    <div
                        ref={root}
                        key={cat.title}
                        className={`category-row-${i} md:col-start-2 flex ${isEven ? 'flex-row' : 'flex-row-reverse'} `}
                    >
                        <img
                            src={cat.img}
                            alt={cat.title}
                            className="cat-img w-1/2 object-cover "
                        />

                        <div className="cat-text flex flex-col w-1/2 border-l">

                            <p className="font-semibold text-4xl text-center my-auto">
                                {cat.title}
                            </p>

                            <Link to={`/category/${cat.title.toLowerCase().replace(" ", "-")}`} className="self-center pb-5 font-semibold">
                                {isEven ? "←" : ""} {" "} Shop now {" "} {isEven ? "" : "→"}
                            </Link>

                        </div>
                    </div>
                );
            })}
        </div>
    )
};

export default CategoryGrid;