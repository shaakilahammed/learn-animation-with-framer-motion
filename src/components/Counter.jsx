import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const Counter = () => {
    const count = useMotionValue(0);
    const roundedValue = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, 100, { duration: 5 });
        return () => animation.stop();
    }, [count]);
    return (
        <motion.div
            className="flex justify-center align-middle"
            exit={{
                x: '-100vw',
                transition: {
                    ease: 'easeInOut',
                    duration: 1,
                },
            }}
        >
            {roundedValue}
        </motion.div>
    );
};

export default Counter;
