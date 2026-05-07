import CartItems from "../features/cart/Cartitems";
import CartSummary from "../features/cart/CartSummary";
import { useAppSelector } from "../shared/redux/hooks";


const Cart = () => {
    const items = useAppSelector(state => state.cart.items)

    const total = items.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
    )

    return (
        <div className="grid md:grid-cols-2 border-b">
            <CartItems items={items}/>
            <CartSummary total={total}/>
        </div>
    )
};

export default Cart;