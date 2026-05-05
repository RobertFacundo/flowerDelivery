import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="flex h-[83px] justify-between border-b">
            <Link
                to="/"
                className="flex items-center px-8 border-r"
            >
                Home
            </Link>

            <Link
                to="/cart"
                className="flex items-center px-8 border-l"
            >
                Cart
            </Link>
        </nav>
    )
};

export default NavBar;