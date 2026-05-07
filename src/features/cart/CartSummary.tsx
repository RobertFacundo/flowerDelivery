type Props = {
    total: number
}

const CartSummary = ({ total }: Props) => {
    return (
        <div className=" p-8 h-fit md:sticky top-0">

            <h1 className="text-3xl font-semibold border-b pb-6">
                Order Summary
            </h1>

            <div className="flex justify-between py-6 ">
                <p>Total</p>
                <span className="font-semibold">
                    ${total}
                </span>
            </div>

            <button className="w-full bg-black text-white py-4 mt-8 hover:bg-black/90 transition cursor-pointer">
                Checkout
            </button>

        </div>
    )
};

export default CartSummary;