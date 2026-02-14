import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Disc3 } from 'lucide-react';

const track = {
    title: 'Forever Yours',
    artist: 'The Luxury Collection',
    album: 'Valentine Dreams',
    duration: '4:32'
};

const Ambiance = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(35);

    return (
        <section className="fixed bottom-8 right-8 z-50">
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="relative"
            >
                {/* Widget container */}
                <div className="bg-charcoal/90 backdrop-blur-md border border-champagne/20 rounded-2xl p-4 shadow-2xl">
                    <div className="flex items-center gap-4">
                        {/* Vinyl record */}
                        <div className="relative w-16 h-16 flex-shrink-0">
                            {/* Vinyl disc */}
                            <motion.div
                                animate={{ rotate: isPlaying ? 360 : 0 }}
                                transition={{
                                    duration: isPlaying ? 3 : 0,
                                    repeat: isPlaying ? Infinity : 0,
                                    ease: "linear"
                                }}
                                className="w-full h-full rounded-full bg-gradient-to-br from-charcoal to-onyx border border-champagne/30 overflow-hidden"
                            >
                                {/* Vinyl grooves */}
                                <div className="absolute inset-0 border-4 border-double border-champagne/10 rounded-full" />
                                <div className="absolute inset-2 border border-champagne/10 rounded-full" />
                                <div className="absolute inset-4 border border-champagne/10 rounded-full" />
                                <div className="absolute inset-6 border border-champagne/10 rounded-full" />

                                {/* Center label */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-5 h-5 rounded-full bg-champagne/20 border border-champagne/40 flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-champagne" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Disc icon overlay */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <Disc3 className={`w-6 h-6 text-champagne/40 ${isPlaying ? 'vinyl-spin' : ''}`} />
                            </div>
                        </div>

                        {/* Track info */}
                        <div className="flex-1 min-w-0">
                            <h4 className="font-display text-sm text-ivory truncate">
                                {track.title}
                            </h4>
                            <p className="font-body text-xs text-champagne/60 truncate">
                                {track.artist}
                            </p>

                            {/* Progress bar */}
                            <div className="mt-2 h-0.5 bg-champagne/20 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-champagne to-champagne/60 rounded-full"
                                    style={{ width: `${progress}%` }}
                                    animate={{ width: isPlaying ? '60%' : `${progress}%` }}
                                    transition={{ duration: 30 }}
                                />
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-1">
                            <button className="p-2 hover:bg-champagne/10 rounded-full transition-colors">
                                <SkipBack className="w-4 h-4 text-champagne/60" />
                            </button>

                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="p-2 bg-champagne/10 hover:bg-champagne/20 rounded-full transition-colors"
                            >
                                {isPlaying ? (
                                    <Pause className="w-5 h-5 text-champagne" />
                                ) : (
                                    <Play className="w-5 h-5 text-champagne" fill="currentColor" />
                                )}
                            </button>

                            <button className="p-2 hover:bg-champagne/10 rounded-full transition-colors">
                                <SkipForward className="w-4 h-4 text-champagne/60" />
                            </button>
                        </div>
                    </div>

                    {/* Now playing indicator */}
                    {isPlaying && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute -top-3 -right-3"
                        >
                            <div className="flex gap-0.5 items-end h-4">
                                {[0, 1, 2, 3].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="w-1 bg-champagne rounded-full"
                                        animate={{ height: [4, 12, 8, 16] }}
                                        transition={{
                                            duration: 0.8,
                                            repeat: Infinity,
                                            delay: i * 0.1
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Decorative corner */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-champagne/40" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-champagne/40" />
            </motion.div>
        </section>
    );
};

export default Ambiance;
