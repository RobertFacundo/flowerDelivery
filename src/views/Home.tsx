import Brand from "../features/home/Brand";
import CategoryGrid from "../features/home/CategoryGrid";

const Home = () => {
    return (
        <div className="grid grid-cols-2 grid-rows-5">
            <div className="row-span-2 border-b">
                <Brand />
            </div>
            <CategoryGrid />
        </div>
    )
};

export default Home;