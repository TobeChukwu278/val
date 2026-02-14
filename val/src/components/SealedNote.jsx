import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Mail, Heart } from 'lucide-react';

const letterContent = `My Dearest,

In the quiet moments when I think of you, I realize that some feelings transcend the boundaries of ordinary language. You are not just a chapter in my story—you are the entire book.

Every heartbeat whispers your name. Every breath reminds me of your presence. In the tapestry of my life, you are the golden thread that makes everything beautiful.

This Valentine, I give you not just my heart, but my endless devotion. Through every season, through every tomorrow, my love for you grows stronger.

Until forever,
Your devoted admirer`;

const SealedNote = () => {
    const [isOpened, setIsOpened] = useState(false);
    const [isBreaking, setIsBreaking] = useState(false);

    const handleSealBreak = () => {
        setIsBreaking(true);
        setTimeout(() => {
            setIsOpened(true);
        }, 800);
    };

    return (
        <section className="relative py-32 bg-onyx overflow-hidden">
            {/* Background texture */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZiIvPgo8cGF0aCBkPSJNMzAgMEwzMCA2MCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIvPgo8L3N2Zz4=')]" />
            </div>

            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16 px-4"
            >
                <h2 className="font-display text-4xl md:text-5xl text-ivory mb-4">
                    <span className="text-gold-gradient">The Sealed Note</span>
                </h2>
                <p className="font-body text-champagne/60 tracking-widest text-sm uppercase">
                    A Message From The Heart
                </p>
            </motion.div>

            {/* Envelope container */}
            <div className="relative flex justify-center items-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-lg"
                >
                    {/* Envelope shadow */}
                    <div className="absolute inset-0 bg-champagne/20 blur-3xl transform translate-y-8" />

                    {/* Envelope body */}
                    <div className="relative bg-gradient-to-br from-charcoal to-onyx border border-champagne/20 p-8 md:p-12">
                        {/* Envelope flap (top) */}
                        <div className={`relative h-0 transition-transform duration-1000 ${isOpened ? 'envelope-open' : ''}`}>
                            <svg
                                viewBox="0 0 400 200"
                                className="absolute -top-px left-0 w-full"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M0 0 L200 120 L400 0"
                                    fill="none"
                                    stroke="#D4AF37"
                                    strokeWidth="1"
                                    className="opacity-30"
                                />
                            </svg>
                        </div>

                        {/* Letter content */}
                        <AnimatePresence>
                            {isOpened ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    className="relative z-10"
                                >
                                    <div className="bg-ivory/5 border border-champagne/20 p-8 md:p-10">
                                        <p className="font-display text-lg md:text-xl leading-loose text-ivory/90 whitespace-pre-line">
                                            {letterContent}
                                        </p>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex flex-col items-center justify-center py-12"
                                >
                                    {/* Wax seal */}
                                    <motion.button
                                        onClick={handleSealBreak}
                                        className="relative group cursor-pointer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {/* Seal glow */}
                                        <div className="absolute inset-0 bg-crimson/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Seal base */}
                                        <div className={`relative w-24 h-24 rounded-full flex items-center justify-center 
                      bg-gradient-to-br from-crimson via-crimson to-crimson/80 border-4 border-champagne/30
                      shadow-2xl ${isBreaking ? 'seal-break' : ''}`}
                                        >
                                            <Heart className="w-8 h-8 text-champagne" fill="currentColor" />
                                        </div>

                                        {/* Instruction text */}
                                        <p className="mt-6 font-body text-champagne/60 text-sm tracking-widest text-center">
                                            Click to break the seal
                                        </p>
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Envelope bottom decoration */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                            <Mail className="w-6 h-6 text-champagne/20" />
                        </div>
                    </div>

                    {/* Corner decorations */}
                    <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-champagne/40" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-champagne/40" />
                    <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-champagne/40" />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-champagne/40" />
                </motion.div>
            </div>

            {/* Decorative lines */}
            <div className="absolute top-1/2 left-0 w-48 h-px bg-gradient-to-r from-transparent via-champagne/20 to-transparent" />
            <div className="absolute top-1/2 right-0 w-48 h-px bg-gradient-to-r from-transparent via-champagne/20 to-transparent" />
        </section>
    );
};

export default SealedNote;
