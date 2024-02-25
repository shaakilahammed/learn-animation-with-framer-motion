import { motion } from 'framer-motion';
const Circle = () => {
    return (
        <motion.div
            animate={{ x: [0, 450, 460, 270, 480, 500] }}
            whileHover={{ rotate: [0, 30, 90, 270, 330, 0] }}
            // drag="x"
            // dragConstraints={{ left: 10, right: 500 }}
            className="bg-green-600 w-36 h-36 rounded-md"
            transition={{ duration: 2 }}
            exit={{
                x: '-100vw',
                transition: {
                    ease: 'easeInOut',
                    duration: 0.5,
                },
            }}
        ></motion.div>
    );
};

export default Circle;
