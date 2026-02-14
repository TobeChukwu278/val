import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Star, Sparkles, Moon } from 'lucide-react';

const milestones = [
    {
        year: 'First Glance',
        title: 'Where It Began',
        description: 'In that fleeting moment, time stood still. The universe conspired to bring two souls together.',
        icon: Heart,
        color: 'text-crimson'
    },
    {
        year: 'Whispered Promises',
        title: 'The Confession',
        description: 'Words unspoken found their way through glances and subtle touches, building a bridge between hearts.',
        icon: Star,
        color: 'text-champagne'
    },
    {
        year: 'Golden Moments',
        title: 'Treasured Memories',
        description: 'Each day together woven with threads of laughter, creating a tapestry of infinite beauty.',
        icon: Sparkles,
        color: 'text-champagne'
    },
    {
        year: 'Eternal Bond',
        title: 'Forever Yours',
        description: 'A promise sealed in time, transcending the boundaries of mere mortality.',
        icon: Moon,
        color: 'text-ivory'
    }
];

const ArchiveSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["10%", "-75%"]);

    return (
        <section
            ref={containerRef}
            className="relative py-32 bg-onyx overflow-hidden"
        >
            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-20 px-4"
            >
                <h2 className="font-display text-4xl md:text-5xl text-ivory mb-4">
                    <span className="text-gold-gradient">The Archive</span>
                </h2>
                <p className="font-body text-champagne/60 tracking-widest text-sm uppercase">
                    Our Journey Together
                </p>
            </motion.div>

            {/* Horizontal scroll container */}
            <div className="relative overflow-hidden">
                <motion.div
                    style={{ x }}
                    className="flex gap-16 px-8 md:px-20 pb-8"
                >
                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="flex-shrink-0 w-[350px] md:w-[450px]"
                        >
                            {/* Timeline connector */}
                            <div className="relative flex items-center mb-8">
                                <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-champagne/30 flex items-center justify-center">
                                    <milestone.icon className={`w-6 h-6 ${milestone.color}`} />
                                </div>
                                <div className="flex-1 h-px bg-gradient-to-r from-champagne/30 via-champagne/60 to-champagne/30 ml-4" />
                            </div>

                            {/* Content card */}
                            <div className="relative p-8 border border-champagne/20 bg-charcoal/50 backdrop-blur-sm">
                                {/* Corner accents */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-champagne/40" />
                                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-champagne/40" />
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-champagne/40" />
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-champagne/40" />

                                <span className="font-body text-champagne/60 text-xs tracking-[0.3em] uppercase">
                                    {milestone.year}
                                </span>

                                <h3 className="font-display text-2xl text-ivory mt-3 mb-4">
                                    {milestone.title}
                                </h3>

                                <p className="font-body text-ivory/70 text-sm leading-relaxed">
                                    {milestone.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll hint */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-2">
                <span className="font-body text-champagne/40 text-xs tracking-widest writing-vertical">
                    Scroll →
                </span>
            </div>
        </section>
    );
};

export default ArchiveSection;
