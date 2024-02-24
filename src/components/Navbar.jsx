import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="py-2 mb-3 bg-gray-600 text-white flex md:flex-row flex-col justify-evenly ">
            <Link
                className="border border-x-0 border-t-0 border-b-2 border-green-50 hover:border-green-500"
                to="/"
            >
                Home
            </Link>
            <Link
                className="border border-x-0 border-t-0 border-b-2 border-green-50 hover:border-green-500"
                to="/basic"
            >
                Basic
            </Link>
            <Link
                className="border border-x-0 border-t-0 border-b-2 border-green-50 hover:border-green-500"
                to="/text"
            >
                Text
            </Link>
            <Link
                className="border border-x-0 border-t-0 border-b-2 border-green-50 hover:border-green-500"
                to="/varients"
            >
                Varients
            </Link>
            <Link
                className="border border-x-0 border-t-0 border-b-2 border-green-50 hover:border-green-500"
                to="/buttons"
            >
                Buttons
            </Link>
            <Link
                className="border border-x-0 border-t-0 border-b-2 border-green-50 hover:border-green-500"
                to="/transition"
            >
                Transition
            </Link>
            <Link
                className="border border-x-0 border-t-0 border-b-2 border-green-50 hover:border-green-500"
                to="/scroll-reveal"
            >
                Scroll Reveal
            </Link>
            <Link
                className="border border-x-0 border-t-0 border-b-2 border-green-50 hover:border-green-500"
                to="/stagger"
            >
                Stagger
            </Link>
        </div>
    );
};

export default Navbar;
