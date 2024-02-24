import { motion } from 'framer-motion';
import Counter from './Counter';

const Variants = () => {
    const shapeVarients = {
        initial: {
            x: 0,
        },
        animate: {
            rotate: 45,
            transition: {
                duration: 5,
            },
        },
    };

    const circleVarients = {
        initial: {
            x: 0,
        },
        animate: {
            x: -50,
        },
        whileHover: {
            scale: 0.8,
        },
    };
    return (
        <motion.div
            variants={shapeVarients}
            initial="inital"
            animate="animate"
            className="w-48 h-48 bg-gray-500 mx-auto my-3"
            exit={{
                x: '-100vw',
                transition: {
                    ease: 'easeInOut',
                    duration: 1,
                },
            }}
        >
            <motion.div
                variants={circleVarients}
                whileHover="whileHover"
                className="w-24 h-24 bg-yellow-200 mx-auto my-3 rounded-full"
            >
                <Counter />
            </motion.div>
        </motion.div>
    );
};

export default Variants;
