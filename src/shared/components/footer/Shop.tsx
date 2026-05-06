const categories = ["All Products", "Fresh Flowers", "Dried Flowers", "Live Plants", "Designer Vases", "Aroma Candles", "Freshener diffuser"];

const Shop = () => {
    return (
        <div className=" flex flex-col p-12 border-r border-t md:border-t-0 gap-1">
            <h1 className="text-2xl text-gray-500">Shop</h1>
            {categories.map(cat => (
                <p key={cat} className="p-1">{cat}</p>
            ))}
        </div>
    )
};

export default Shop;