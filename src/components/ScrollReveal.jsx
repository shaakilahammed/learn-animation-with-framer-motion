import { motion } from 'framer-motion';
const Box = ({ text }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -144 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className="w-36 h-36 text-center bg-black text-white m-5"
        >
            {text}
        </motion.div>
    );
};

const ScrollReveal = () => {
    const greetings = [
        'Good Morning',
        'Good Evening',
        'Good Afternoon',
        'Hi',
        'Hello',
    ];
    return (
        <motion.div
            exit={{
                x: '-100vw',
                transition: {
                    ease: 'easeInOut',
                    duration: 0.5,
                },
            }}
        >
            {greetings.map((item) => (
                <Box text={item} key={item} />
            ))}
        </motion.div>
    );
};

export default ScrollReveal;
