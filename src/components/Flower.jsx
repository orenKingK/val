import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Flower = ({ x, y, size = 1, delay, color, onClick }) => {
    const [grown, setGrown] = useState(false);

    const handleClick = (e) => {
        if (!grown) {
            setGrown(true);
        }
        if (onClick) {
            onClick(e, { x: e.clientX, y: e.clientY });
        }
    };

    // Sway animation variants
    const sway = {
        swaying: {
            rotate: [0, 5, 0, -5, 0],
            transition: {
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
            }
        }
    };

    return (
        <motion.div
            style={{
                position: 'absolute',
                bottom: y,
                left: x,
                transformOrigin: 'bottom center',
                zIndex: 25 + Math.floor(size * 10),
                cursor: 'pointer',
                filter: `brightness(${0.8 + size * 0.4})`
            }}
            variants={sway}
            animate="swaying"
            whileHover={{ scale: 1.1 }} // Scale relative to current size
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: size }} // Animate scale from 0 to size here
                transition={{ duration: 1.5, delay: delay, ease: "easeOut" }}
                style={{ originY: 1 }} // Grow from bottom
            >
                <svg
                    width="60"
                    height="150"
                    viewBox="0 0 60 150"
                    overflow="visible"
                >
                    {/* Stem */}
                    <motion.path
                        d="M30 150 Q30 100 30 50"
                        stroke="#166534"
                        strokeWidth="4"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: delay }}
                    />

                    {/* Leaves */}
                    <motion.path
                        d="M30 100 Q10 90 20 110"
                        fill="#22c55e"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: delay + 0.5 }}
                    />
                    <motion.path
                        d="M30 120 Q50 110 40 130"
                        fill="#22c55e"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: delay + 0.7 }}
                    />

                    {/* Petals Group */}
                    <motion.g
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: delay + 1.2, type: 'spring' }}
                    >
                        {/* Petals */}
                        <circle cx="30" cy="10" r="12" fill={color} />
                        <circle cx="50" cy="30" r="12" fill={color} />
                        <circle cx="30" cy="50" r="12" fill={color} />
                        <circle cx="10" cy="30" r="12" fill={color} />

                        {/* Diagonal Petals */}
                        <circle cx="16" cy="16" r="10" fill={color} opacity="0.8" />
                        <circle cx="44" cy="16" r="10" fill={color} opacity="0.8" />
                        <circle cx="44" cy="44" r="10" fill={color} opacity="0.8" />
                        <circle cx="16" cy="44" r="10" fill={color} opacity="0.8" />

                        {/* Center */}
                        <circle cx="30" cy="30" r="10" fill="#fbbf24" />
                    </motion.g>
                </svg>
            </motion.div>
        </motion.div>
    );
};

export default Flower;
