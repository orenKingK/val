import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Star, Heart, Utensils } from 'lucide-react';

const GiftSelector = () => {
    const [selected, setSelected] = useState(null);

    const gifts = [
        // Updated options based on user feedback
        { id: 'dinner', icon: <Utensils size={40} />, label: 'ארוחת ערב רומנטית', response: 'זה כבר נהיה שגרה, לא? 😅🍕' },
        { id: 'massage', icon: <Star size={40} />, label: 'מסאז\' כל יום', response: 'את עושה לי, כן? 😂💆‍♂️' },
        { id: 'love', icon: <Heart size={40} />, label: 'חיבוק ונשיקה מאורן', response: 'זכית! הפרס הכי שווה בעולם! 🎉❤️' }
    ];

    const handleSelect = (gift) => {
        setSelected(gift);
    };

    return (
        <div style={{ padding: '2rem', textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>בחרתי לך מתנה... תנחשי מה?</h2>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                {gifts.map((gift) => (
                    <motion.div
                        key={gift.id}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleSelect(gift)}
                        style={{
                            background: 'white',
                            padding: '2rem',
                            borderRadius: '15px',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '150px'
                        }}
                    >
                        <div style={{ color: '#e11d48', marginBottom: '1rem' }}>{gift.icon}</div>
                        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{gift.label}</span>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence mode="wait">
                {selected && (
                    <motion.div
                        key={selected.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{ marginTop: '2rem', fontSize: '1.5rem', color: '#be123c', fontWeight: 'bold' }}
                    >
                        {selected.response}
                        {selected.id === 'love' && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ repeat: Infinity, duration: 1 }}
                                style={{ marginTop: '10px' }}
                            >
                                💖💖💖
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default GiftSelector;
