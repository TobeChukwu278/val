import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GoldenOrbitCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        // Add hover detection for interactive elements
        const handleMouseOver = (e) => {
            const target = e.target;
            const isInteractive =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('cursor-pointer') ||
                target.getAttribute('role') === 'button';

            setIsHovering(!!isInteractive);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseover', handleMouseOver);

        // Hide default cursor
        document.body.style.cursor = 'none';

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseover', handleMouseOver);
            document.body.style.cursor = 'auto';
        };
    }, []);

    return (
        <>
            {/* Main cursor */}
            <motion.div
                animate={{
                    x: position.x - 10,
                    y: position.y - 10,
                    scale: isHovering ? 2.5 : 1,
                    opacity: isVisible ? 1 : 0
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5
                }}
                className="fixed top-0 left-0 w-5 h-5 pointer-events-none z-[9999]"
            >
                {/* Inner dot */}
                <div className="absolute inset-0 rounded-full bg-champagne" />
            </motion.div>

            {/* Outer ring */}
            <motion.div
                animate={{
                    x: position.x - 20,
                    y: position.y - 20,
                    scale: isHovering ? 1.5 : 1,
                    opacity: isVisible ? 0.6 : 0
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    mass: 0.8
                }}
                className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9998]"
            >
                <div className="w-full h-full rounded-full border-2 border-champagne" />
            </motion.div>

            {/* Trailing ring */}
            <motion.div
                animate={{
                    x: position.x - 30,
                    y: position.y - 30,
                    scale: isHovering ? 1.2 : 0.8,
                    opacity: isVisible ? 0.3 : 0
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                    mass: 1
                }}
                className="fixed top-0 left-0 w-16 h-16 pointer-events-none z-[9997]"
            >
                <div className="w-full h-full rounded-full border border-champagne" />
            </motion.div>

            {/* Click ripple effect */}
            <motion.div
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed w-8 h-8 pointer-events-none z-[9996] rounded-full border border-champagne"
                style={{
                    left: position.x - 16,
                    top: position.y - 16
                }}
            />
        </>
    );
};

export default GoldenOrbitCursor;
