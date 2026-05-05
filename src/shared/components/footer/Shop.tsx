const categories = ["All Products", "Fresh Flowers", "Dried Flowers", "Live Plants", "Designer Vases", "Aroma Candles", "Freshener diffuser"];

const Shop = () => {
    return (
        <div className="p-12 border-r">
            <h1>Shop</h1>
            {categories.map(cat => (
                <p>{cat}</p>
            ))}
        </div>
    )
};

export default Shop;