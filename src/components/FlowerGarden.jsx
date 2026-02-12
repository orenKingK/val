import React, { useState, useRef, useEffect } from 'react';
import Flower from './Flower';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const FlowerGarden = () => {
    const [currentSentence, setCurrentSentence] = useState(null);
    const [clicks, setClicks] = useState([]); // Visual click effects
    const timerRef = useRef(null);

    const sentences = [
        "אני אוהב את החיוך שלך", "כיף לי איתך תמיד",
        "את מהממת", "אין כמוך בעולם", "כל יום איתך הוא מתנה",
        "את האושר שלי", "אוהב אותך מלא!", "את החצי השני שלי",
        "תודה שאת את",
        "אני זכיתי בך", "את מצחיקה אותי כל כך",
        "העיניים שלך כובשות", "את הכי יפה בעולם", "אוהב לחבק אותך",
        "את החברה הכי טובה שלי", "כל רגע איתך הוא קסם",
        "אוהב אותך המון ❤️"
    ];

    const handleFlowerClick = (e, position) => {
        // Clear timer
        if (timerRef.current) clearTimeout(timerRef.current);

        // Random sentence
        const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
        setCurrentSentence(randomSentence);

        timerRef.current = setTimeout(() => {
            setCurrentSentence(null);
            timerRef.current = null;
        }, 3000);

        // Add visual click effect (Heart burst)
        const id = Date.now();
        setClicks(prev => [...prev, { id, x: position.x, y: position.y }]);
        setTimeout(() => {
            setClicks(prev => prev.filter(c => c.id !== id));
        }, 1000);
    };

    // Generate lots of flowers
    const flowers = Array.from({ length: 15 }).map((_, i) => ({
        x: `${Math.random() * 90 + 5}%`,
        y: Math.random() * 20 - 10, // Slight vertical variation
        size: 0.5 + Math.random() * 0.8, // Random size
        delay: Math.random() * 2,
        color: ['#e11d48', '#be123c', '#fda4af', '#fb7185', '#f43f5e', '#ec4899'][Math.floor(Math.random() * 6)]
    })).sort((a, b) => a.size - b.size); // Render smaller (background) first

    return (
        <div style={{
            width: '100%',
            height: '400px', // Taller
            position: 'relative',
            marginTop: '4rem',
            overflow: 'hidden',
            background: 'linear-gradient(to top, #ecfccb 0%, #ffffff 100%)', // Ground to sky
            borderTop: '1px solid #e5e7eb'
        }}>
            {/* Sentence Display */}
            <AnimatePresence>
                {currentSentence && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        style={{
                            position: 'absolute',
                            top: '20%',
                            left: 0,
                            right: 0,
                            margin: 'auto',
                            width: 'fit-content',
                            zIndex: 40,
                            pointerEvents: 'none'
                        }}
                    >
                        <div style={{
                            background: 'white',
                            padding: '1.5rem 3rem',
                            borderRadius: '50px',
                            boxShadow: '0 10px 25px rgba(225, 29, 72, 0.2)',
                            fontSize: '1.8rem',
                            color: '#e11d48',
                            fontWeight: 'bold',
                            border: '3px solid #fda4af',
                            whiteSpace: 'nowrap'
                        }}>
                            {currentSentence} <span style={{ fontSize: '1.5rem' }}>❤️</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Click Visual Effects */}
            {clicks.map(click => (
                <div key={click.id} style={{
                    position: 'fixed', // Fixed to screen coordinates
                    left: click.x,
                    top: click.y,
                    pointerEvents: 'none',
                    zIndex: 50
                }}>
                    <motion.div
                        initial={{ y: 0, opacity: 1, scale: 0.5 }}
                        animate={{ y: -100, opacity: 0, scale: 1.5 }}
                        transition={{ duration: 1 }}
                    >
                        <Heart fill="#e11d48" color="#e11d48" />
                    </motion.div>
                </div>
            ))}

            {/* Flowers */}
            <div style={{ position: 'absolute', bottom: 50, width: '100%', height: '200px' }}>
                {flowers.map((f, i) => (
                    <Flower key={i} {...f} onClick={handleFlowerClick} />
                ))}
            </div>

            {/* Grass Foreground */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: '60px',
                background: '#4ade80',
                borderRadius: '50% 50% 0 0 / 20px 20px 0 0',
                transform: 'scaleX(1.1)',
                zIndex: 20
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: -20,
                width: '100%',
                height: '80px',
                background: '#22c55e',
                borderRadius: '50% 50% 0 0 / 10px 10px 0 0',
                transform: 'scaleX(1.2)',
                zIndex: 21
            }}></div>

            {/* Instruction */}
            <div style={{
                position: 'absolute',
                bottom: 10,
                width: '100%',
                textAlign: 'center',
                zIndex: 30,
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}>
                תלחצי על הפרחים 🌸
            </div>

            {/* Butterflies/Particles */}
            <Butterfly delay={0} duration={15} top="30%" />
            <Butterfly delay={5} duration={18} top="40%" />
            <Butterfly delay={10} duration={12} top="20%" />
        </div>
    );
};

// Simple visual butterfly
const Butterfly = ({ delay, duration, top }) => (
    <motion.div
        initial={{ x: '-10%', top: top }}
        animate={{ x: '110%' }}
        transition={{
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: "linear"
        }}
        style={{ position: 'absolute', zIndex: 10 }}
    >
        <div style={{ fontSize: '2rem' }}>🦋</div>
    </motion.div>
);

export default FlowerGarden;
