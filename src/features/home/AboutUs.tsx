import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
    const root = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: root.current,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse",
                },
            });

            // Animamos el título principal
            tl.from(".about-title", {
                opacity: 0,
                y: 50,
                duration: 0.8,
            });

            // Animamos el bloque de contenido
            tl.from(".about-content > *", {
                opacity: 0,
                y: 50,
                stagger: 0.2,
                duration: 0.8,
            }, "-=0.5");

        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={root} className="grid md:grid-cols-2 min-h-[581px] border-b">
            <div className="about-title border-t p-15 font-semibold text-4xl">
                <h1>About Us</h1>
            </div>
            <div className="about-content flex flex-col gap-8 p-16 text-left border-l border-t">
                <h3>OUR STORY</h3>
                <h1 className="font-regular text-3xl">Kyiv LuxeBouquets</h1>
                <p>We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.</p>
                <button className="self-start border px-8 py-4">Learn more</button>
            </div>
        </div>
    )
};

export default AboutUs; 