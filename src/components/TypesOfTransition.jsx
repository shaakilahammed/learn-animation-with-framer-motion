import { motion } from 'framer-motion';
const TypesOfTransition = () => {
    return (
        <motion.div
            className="flex flex-col gap-2"
            exit={{
                x: '-100vw',
                transition: {
                    ease: 'easeInOut',
                    duration: 1,
                },
            }}
        >
            <motion.p
                className="text-md mx-2"
                initial={{ x: '-100vh' }}
                animate={{ x: 0, transition: { duration: 2 } }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                deserunt eligendi dicta ipsum vitae nisi esse itaque dolor
                minus, consequuntur molestias laudantium fugit quibusdam dolorem
                rem tenetur aliquid suscipit repellat.
            </motion.p>
            <motion.p
                className="text-md mx-2"
                initial={{ x: '-100vh' }}
                animate={{
                    x: 0,
                    transition: { duration: 2, type: 'spring', bounce: 0.5 },
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                deserunt eligendi dicta ipsum vitae nisi esse itaque dolor
                minus, consequuntur molestias laudantium fugit quibusdam dolorem
                rem tenetur aliquid suscipit repellat.
            </motion.p>
            <motion.p
                className="text-md mx-2"
                initial={{ x: '-100vh' }}
                animate={{
                    x: 0,
                    transition: {
                        type: 'spring',
                        velocity: 500,
                    },
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                deserunt eligendi dicta ipsum vitae nisi esse itaque dolor
                minus, consequuntur molestias laudantium fugit quibusdam dolorem
                rem tenetur aliquid suscipit repellat.
            </motion.p>
        </motion.div>
    );
};

export default TypesOfTransition;
