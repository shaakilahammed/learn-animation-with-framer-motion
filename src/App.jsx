import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import BasicAnimation from './pages/BasicAnimation';
import ButtonAnimation from './pages/ButtonAnimation';
import DefaultPage from './pages/DefaultPage';
import Home from './pages/Home';
import ScrollRevealAnimation from './pages/ScrollRevealAnimation';
import TextAnimation from './pages/TextAnimation';
import TransitionTypeAnimation from './pages/TransitionTypeAnimation';
import VariantsAnimation from './pages/VariantsAnimation';
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<Home />}
            errorElement={<span className="text-red-700">No page found!</span>}
        >
            <Route element={<DefaultPage />} index />
            <Route path="/basic" element={<BasicAnimation />} />
            <Route key={'text'} path="/text" element={<TextAnimation />} />
            <Route path="/varients" element={<VariantsAnimation />} />
            <Route path="/buttons" element={<ButtonAnimation />} />
            <Route path="/transition" element={<TransitionTypeAnimation />} />
            <Route path="/scroll-reveal" element={<ScrollRevealAnimation />} />
            <Route path="/stagger" />
        </Route>
    )
);
function App() {
    return (
        // <>
        //     <Text />
        //     <Circle />
        //     <div className="flex justify-evenly">
        //         <Button />
        //     </div>
        //     <TypesOfTransition />
        //     <Variants />
        //     <ScrollReveal />
        // </>

        <RouterProvider router={router} />
    );
}

export default App;
