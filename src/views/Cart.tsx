import CartItems from "../features/cart/Cartitems";
import CartSummary from "../features/cart/CartSummary";
import { useAppSelector } from "../shared/redux/hooks";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Cart = () => {
    const root = useRef<HTMLDivElement>(null);
    const items = useAppSelector(state => state.cart.items)

    const total = items.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
    )

    useEffect(() => {

        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: root.current,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse",
                },
            });

            tl.from(".cart-items", {
                opacity: 0,
                x: -100,
                duration: 0.9,
            });

            tl.from(".cart-summary", {
                opacity: 0,
                x: 100,
                duration: 0.9,
            }, "-=0.6");

            tl.from(".cart-item", {
                opacity: 0,
                y: 40,
                stagger: 0.15,
                duration: 0.6,
            }, "-=0.4");

        }, root);

        return () => ctx.revert();

    }, []);

    return (
        <div
            ref={root}
            className="grid md:grid-cols-2 border-b"
        >

            <div className="cart-items">
                <CartItems items={items} />
            </div>

            <div className="cart-summary">
                <CartSummary total={total} />
            </div>

        </div>
    )
};

export default Cart;