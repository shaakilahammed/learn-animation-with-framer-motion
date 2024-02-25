import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import BasicAnimation from './BasicAnimation';
import ButtonAnimation from './ButtonAnimation';
import DefaultPage from './DefaultPage';
import Home from './Home';
import ScrollRevealAnimation from './ScrollRevealAnimation';
import StaggerAnimation from './StaggerAnimation';
import TextAnimation from './TextAnimation';
import TransitionTypeAnimation from './TransitionTypeAnimation';
import VariantsAnimation from './VariantsAnimation';

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />}>
                    <Route element={<DefaultPage />} index />
                    <Route path="/basic" element={<BasicAnimation />} />
                    <Route
                        key={'text'}
                        path="/text"
                        element={<TextAnimation />}
                    />
                    <Route path="/varients" element={<VariantsAnimation />} />
                    <Route path="/buttons" element={<ButtonAnimation />} />
                    <Route
                        path="/transition"
                        element={<TransitionTypeAnimation />}
                    />
                    <Route
                        path="/scroll-reveal"
                        element={<ScrollRevealAnimation />}
                    />
                    <Route path="/stagger" element={<StaggerAnimation />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
