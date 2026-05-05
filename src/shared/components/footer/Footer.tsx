import Subcribe from "./Subcribe";
import Contact from "./Contact";
import Shop from "./Shop";
import AboutUs from "./AboutUs";

const Footer = () => {
    return (
        <div className="grid grid-cols-4 mx-auto ">
            <Subcribe />
            <Contact />
            <Shop />
            <AboutUs />
        </div>
    )
};

export default Footer;