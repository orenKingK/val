import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const WishSection = () => {
    // Improved romantic text based on user input
    const lines = [
        "מיכל שלי,",
        "אז זאת הברכה הראשונה שאני כותב לך",
        "שהיא לא בווצאפ... 😉",
        "ואני יודע שחיכית לזה הרבה.",
        "",
        "אנצל את ההזדמנות של יום האהבה",
        "להגיד לך פשוט - שאני אוהב אותך.",
        "",
        "כל כך כיף לי להיות איתך,",
        "בכל הרגעים הקטנים והגדולים שלנו.",
        'מסופ"ש יום ההולדת במלון, ',
        "דרך כל המסעדות הטובות שבדקנו יחד,",
        "ועד למסאז' המפנק שעשינו...",
        "",
        "וצריך להעריך את הכל,",
        "כי שום דבר לא מובן מאליו.",
        "",
        "מאורן שלך, ",
        "שאוהב אותך המון ❤️"
    ];

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 1.5, delayChildren: 0.5 },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            style={{
                padding: '4rem 2rem',
                margin: '2rem auto',
                maxWidth: '650px',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '25px',
                boxShadow: '0 15px 35px rgba(255, 77, 109, 0.15)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                textAlign: 'right', // Align text to right for Hebrew
                direction: 'rtl'
            }}
        >
            <div style={{
                position: 'absolute',
                top: -25,
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--color-secondary)',
                padding: '10px',
                borderRadius: '50%',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}>
                <Heart fill="var(--color-primary)" color="var(--color-accent)" size={40} />
            </div>

            <div style={{
                fontSize: '1.35rem',
                lineHeight: '1.8',
                color: 'var(--color-text)',
                fontFamily: 'Assistant, sans-serif'
            }}>
                {lines.map((line, index) => (
                    <motion.div
                        variants={child}
                        key={index}
                        style={{
                            marginBottom: line === "" ? '1rem' : '0.5rem',
                            fontWeight: index === 0 || index === lines.length - 1 ? '700' : '400',
                            fontSize: index === 0 ? '1.5rem' : '1.35rem',
                            color: index === 0 ? 'var(--color-primary)' : 'inherit'
                        }}
                    >
                        {line || "\u00A0"}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default WishSection;
