import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

const HeroSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-gradient-luxury"
        >
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-champagne/30 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            opacity: 0
                        }}
                        animate={{
                            y: [null, Math.random() * -500],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                    />
                ))}
            </div>

            {/* Main content */}
            <motion.div
                style={{ y, opacity, scale }}
                className="relative z-10 flex flex-col items-center justify-center h-full px-4"
            >
                {/* Decorative top line */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 200 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-px bg-champagne mb-8"
                />

                {/* Main title */}
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="font-display text-5xl md:text-7xl lg:text-8xl text-center tracking-wider"
                >
                    <span className="text-gold-gradient">Eternity</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-6 text-xl md:text-2xl font-body text-ivory/80 tracking-[0.3em] uppercase"
                >
                    In a Moment
                </motion.p>

                {/* Decorative bottom line */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 200 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    className="h-px bg-champagne mt-8"
                />

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="mt-12 text-sm font-body text-champagne/60 tracking-widest"
                >
                    A Luxury Valentine Experience
                </motion.p>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="w-6 h-6 text-champagne/60" />
                </motion.div>
            </motion.div>

            {/* Corner decorations */}
            <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-champagne/30" />
            <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-champagne/30" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-champagne/30" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-champagne/30" />
        </section>
    );
};

export default HeroSection;
