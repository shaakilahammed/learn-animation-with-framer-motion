import { motion } from 'framer-motion';
const Text = () => {
    const text =
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, error. Itaque, reiciendis voluptates.';
    const textArr = text.split('');

    return (
        <motion.div
            className="my-2 font-semibold text-center text-3xl text-black"
            exit={{
                x: '-100vw',
                transition: {
                    ease: 'easeInOut',
                    duration: 0.5,
                },
            }}
        >
            {textArr.map((item, index) => (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { duration: 0.1, delay: index / 15 },
                    }}
                    key={index}
                >
                    {item}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default Text;
