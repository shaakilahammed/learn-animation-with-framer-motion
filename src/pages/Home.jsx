import { AnimatePresence } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
    const location = useLocation();
    return (
        <>
            <Navbar />
            <AnimatePresence mode="wait" initial={true}>
                <Outlet key={location.pathname} />
            </AnimatePresence>
        </>
    );
};

export default Home;
