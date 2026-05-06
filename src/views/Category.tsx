import { useParams } from "react-router-dom";
import catImage from '../assets/images/catImage.png'
import { products } from "../shared/data";
import { Link } from "react-router-dom";

const Category = () => {
    const { categoryName } = useParams();


    console.log(categoryName)
    return (
        <div className="grid md:grid-cols-2">
            <div className="relative">
                <img
                    src={catImage}
                    alt="Category"
                    className="w-full h-[420px] md:h-[720px] object-cover"
                />

                <h1 className="absolute md:top-1/5 top-1/2 left-1/2 
                   -translate-x-1/2 -translate-y-1/2
                   text-6xl text-white font-bold capitalize text-center z-10">
                    {categoryName?.replaceAll("-", " ")}
                </h1>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1">
                {products.map(product => (
                    <Link to={`/product/${product.title.toLowerCase().replace(" ", "-")}`}>
                        <img
                            key={product.title}
                            src={product.img}
                            alt={product.title}
                            className="w-full md:h-[360px] border-b object-cover"
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
};

export default Category;