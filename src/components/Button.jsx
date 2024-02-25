import { motion } from 'framer-motion';
const Button = () => {
    return (
        <motion.div
            className="flex justify-evenly"
            exit={{
                x: '-100vw',
                transition: {
                    ease: 'easeInOut',
                    duration: 0.5,
                },
            }}
        >
            <motion.button
                whileHover={{ scale: 1.5, transition: { duration: 1 } }}
                // whileTap={{ scale: 1.2 }}
                className="px-2 py-1 bg-black text-white rounded-md"
            >
                Tap me!
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.5 }}
                // whileTap={{ scale: 1.2 }}
                className="px-2 py-1 bg-black text-white rounded-md"
            >
                Tap me Default!
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.5, transition: { yoyo: Infinity } }}
                // whileTap={{ scale: 1.2 }}
                className="px-2 py-1 bg-black text-white rounded-md"
            >
                Tap me yoyo!
            </motion.button>
        </motion.div>
    );
};

export default Button;
