import hero from '../../assets/hero.png'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Brand = () => {
    const root = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: root.current,
                    start: "top 80%",
                },
            });

            tl.from(".brand-title", {
                opacity: 0,
                y: 80,
                duration: 0.8,
            });

            tl.from(
                ".brand-desc",
                {
                    opacity: 0,
                    x: 50,
                    duration: 0.8,
                },
                "-=0.4"
            );

            tl.from(
                ".brand-img",
                {
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                },
                "-=0.5"
            );

            tl.from(
                ".brand-right",
                {
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                },
                "-=0.5"
            );
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={root} className='flex flex-col gap-10 p-10 '>
            <div className='flex flex-col border-b gap-5 max-max-w-[560px] mt-8'>
                <div className='flex flex-col brand-title'>
                    <h1 className='font-bold text-6xl'>Kyiv </h1>
                    <h1 className='font-bold text-6xl'>LuxeBouquets</h1>
                </div>
                <p className=' brand-desc text-xl font-light pb-20 pt-7'>
                    Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service
                </p>
            </div>
            <div className='flex flex-row gap-8 p-4 '>
                <img src={hero} alt="" className='brand-img md:w-[280px] w-[155px]' />
                <div className='brand-right border-l flex items-end justify-bottom'>
                    <p className='pl-5 md:text-l text-sm'>Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.</p>
                </div>
            </div>
        </div>
    )
};

export default Brand;