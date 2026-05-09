import { useAppDispatch } from "../../shared/redux/hooks";
import { removeFromCart, decreaseQuantity, incrementQuantity } from "../../shared/redux/slices/cartSlice";
import type { CartItem } from "./types";

type Props = {
    items: CartItem[]
}

const CartItems = ({ items }: Props) => {
    const dispatch = useAppDispatch();
    return (
        <div className="flex flex-col border-r">
            <h1 className="text-4xl font-semibold p-8 border-b">
                Shopping Cart
            </h1>


            {items.length === 0 && (
                <p className="p-8 text-gray-500">
                    Your cart is empty.
                </p>
            )}
            {items.map(item => (
                <div
                    key={item.id}
                    className="cart-item grid grid-cols-[140px_1fr] gap-6 p-6 border-b"
                >
                    <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-[180px] object-cover"
                    />

                    <div className="flex flex-col justify-between">

                        <div className="flex flex-col gap-3">
                            <h2 className="text-2xl font-medium">
                                {item.title}
                            </h2>

                            <div className="flex items-center gap-4 border self-start px-4 py-2">

                                <button
                                    onClick={() => dispatch(decreaseQuantity(item.id))}
                                    className="text-xl cursor-pointer"
                                >
                                    -
                                </button>

                                <span>{item.quantity}</span>

                                <button
                                    onClick={() => dispatch(incrementQuantity(item.id))}
                                    className="text-xl cursor-pointer"
                                >
                                    +
                                </button>

                            </div>

                            <p className="text-xl font-semibold">
                                ${item.price}
                            </p>
                        </div>

                        <button onClick={() => dispatch(removeFromCart(item.id))} className="self-start text-sm border-b cursor-pointer">
                            Remove
                        </button>

                    </div>
                </div>
            ))}
        </div>
    )
};

export default CartItems;