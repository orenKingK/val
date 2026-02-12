import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Cat, Flower2 } from 'lucide-react';

// Floating Icon Component
const FloatingIcon = ({ icon, color, delay }) => (
    <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: -100, opacity: [0, 1, 1, 0] }}
        transition={{
            duration: 5, // Slower float
            delay: delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 2
        }}
        style={{
            position: 'absolute',
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            zIndex: 1,
            color: color
        }}
    >
        {icon}
    </motion.div>
);

const WelcomeScreen = ({ onStart }) => {
    // Icons configuration
    const icons = [
        { component: <Cat size={40} />, color: '#ffffff' }, // White Cat
        { component: <Cat size={40} />, color: '#fb923c' }, // Orange Cat
        { component: <span style={{ fontSize: '2rem' }}>🍫</span>, color: 'inherit' }, // Chocolate (Emoji is best for food)
        { component: <Flower2 size={40} />, color: '#ffffff' }, // White Flower
        { component: <Flower2 size={40} />, color: '#f472b6' }, // Pink Flower
        { component: <Heart size={30} />, color: '#e11d48' }, // Heart
    ];

    // Create a larger array for more particles
    const particles = [...icons, ...icons, ...icons].map((icon, i) => ({
        ...icon,
        delay: i * 0.8
    }));

    return (
        <motion.div
            className="welcome-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                width: '100%',
                background: 'var(--bg-gradient)',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 50,
                overflow: 'hidden'
            }}
        >
            {/* Background Floating Particles */}
            {particles.map((p, index) => (
                <FloatingIcon key={index} icon={p.component} color={p.color} delay={p.delay} />
            ))}

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.5
                }}
                style={{ marginBottom: '2rem', zIndex: 2, position: 'relative' }}
            >
                <div style={{ position: 'relative' }}>
                    <Heart fill="var(--color-primary)" color="var(--color-accent)" size={100} />
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 }}
                        style={{ position: 'absolute', top: '30%', left: '30%', color: 'white' }}
                    >
                        <Cat size={40} />
                    </motion.div>
                </div>
            </motion.div>

            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                style={{ fontSize: '3.5rem', color: 'var(--color-accent)', marginBottom: '1rem', zIndex: 2 }}
            >
                מיכל שלי
            </motion.h1>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
                style={{
                    fontSize: '1.5rem',
                    color: 'var(--color-text)',
                    marginBottom: '3rem',
                    maxWidth: '80%',
                    zIndex: 2,
                    lineHeight: '1.6'
                }}
            >
                הכנתי לך משהו קטן... <br />
                תלחצי על כפתור ההפתעה
            </motion.p>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 0.5 }}
                onClick={onStart}
                style={{
                    padding: '1rem 4rem',
                    fontSize: '1.5rem',
                    borderRadius: '50px',
                    border: 'none',
                    background: 'var(--button-gradient)',
                    color: 'white',
                    boxShadow: '0 4px 15px rgba(255, 77, 109, 0.4)',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    zIndex: 2
                }}
            >
                הפתעה ❤️
            </motion.button>
        </motion.div>
    );
};

export default WelcomeScreen;
