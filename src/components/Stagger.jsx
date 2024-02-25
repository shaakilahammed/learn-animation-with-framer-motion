import { motion } from 'framer-motion';
import { useState } from 'react';
const Stagger = () => {
    const [isShown, setIsShown] = useState(false);
    return (
        <nav className="menu">
            <div className="flex flex-col px-32 bg-white">
                <motion.button
                    onClick={() => setIsShown(!isShown)}
                    className="w-96 border border-gray-400 rounded-md text-xl font-bold text-purple-500"
                    whileTap={{ scale: 0.97 }}
                >
                    Menu
                </motion.button>
                {isShown && (
                    <motion.div
                        className="bg-white w-96 rounded-md border border-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: {
                                duration: 1,
                                ease: 'circInOut',
                            },
                        }}
                    >
                        <ul className="p-1">
                            <motion.li
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.2,
                                    delay: 0.2,
                                }}
                                className="font-semibold text-purple-500 p-2"
                            >
                                Item 1
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.4,
                                }}
                                className="font-semibold text-purple-500 p-2"
                            >
                                Item 2
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.6,
                                }}
                                className="font-semibold text-purple-500 p-2"
                            >
                                Item 3
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.8,
                                }}
                                className="font-semibold text-purple-500 p-2"
                            >
                                Item 4
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    delay: 1,
                                }}
                                className="font-semibold text-purple-500 p-2"
                            >
                                Item 5
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Stagger;
