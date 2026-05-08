import AboutUs from "../features/home/AboutUs";
import Brand from "../features/home/Brand";
import CategoryGrid from "../features/home/CategoryGrid";
import ChooseUs from "../features/home/ChooseUs";

const Home = () => {
    return (
        <div className="flex flex-col">
            <div className="grid md:grid-cols-2 ">
                <Brand />
                <CategoryGrid />
            </div>
            <AboutUs />
            <ChooseUs />
        </div>
    )
};

export default Home;