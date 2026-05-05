import { Link } from "react-router-dom";
import { categories } from "../../shared/data";

const CategoryGrid = () => {
    return (
        <>
            {categories.map((cat, i) => {
                const isEven = i % 2 === 0;

                return (
                    <div
                        key={cat.title}
                        className={`col-start-2 flex ${isEven ? 'flex-row' : 'flex-row-reverse'} `}
                    >
                        <img
                            src={cat.img}
                            alt={cat.title}
                            className="w-1/2 object-cover "
                        />

                        <div className="flex flex-col w-1/2 border-l">

                            <p className="font-semibold text-4xl text-center my-auto">
                                {cat.title}
                            </p>

                            <Link to={`/${cat.title}`} className="self-center pb-5">
                                Shop now
                            </Link>

                        </div>
                    </div>
                );
            })}
        </>
    )
};

export default CategoryGrid;