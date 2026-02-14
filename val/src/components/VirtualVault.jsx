import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { useState } from 'react';

const galleryItems = [
    {
        id: 1,
        title: 'Golden Hour',
        category: 'Memories',
        height: 'h-64',
        image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&h=400&fit=crop'
    },
    {
        id: 2,
        title: 'Timeless Elegance',
        category: 'Portrait',
        height: 'h-80',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=500&fit=crop'
    },
    {
        id: 3,
        title: 'Whispers of Love',
        category: 'Moments',
        height: 'h-56',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=350&fit=crop'
    },
    {
        id: 4,
        title: 'Cherished Seconds',
        category: 'Treasures',
        height: 'h-72',
        image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=600&h=450&fit=crop'
    },
    {
        id: 5,
        title: 'Silent Promises',
        category: 'Dreams',
        height: 'h-60',
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=380&fit=crop'
    },
    {
        id: 6,
        title: 'Eternal Flame',
        category: 'Passion',
        height: 'h-84',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=520&fit=crop'
    },
    {
        id: 7,
        title: 'Velvet Nights',
        category: 'Memories',
        height: 'h-68',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=420&fit=crop'
    },
    {
        id: 8,
        title: 'Precious Moments',
        category: 'Collection',
        height: 'h-76',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=480&fit=crop'
    }
];

const VirtualVault = () => {
    const [hoveredId, setHoveredId] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section className="relative py-32 bg-gradient-to-b from-onyx to-charcoal">
            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-20 px-4"
            >
                <h2 className="font-display text-4xl md:text-5xl text-ivory mb-4">
                    <span className="text-gold-gradient">The Virtual Vault</span>
                </h2>
                <p className="font-body text-champagne/60 tracking-widest text-sm uppercase">
                    Treasured Moments
                </p>
            </motion.div>

            {/* Masonry grid */}
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="masonry-grid"
                >
                    {galleryItems.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            className={`masonry-item ${item.height} relative group overflow-hidden cursor-pointer`}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-onyx/90 via-onyx/20 to-transparent 
                transition-opacity duration-500 ${hoveredId === item.id ? 'opacity-100' : 'opacity-0'}`}
                            />

                            {/* Content */}
                            <div className={`absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500
                ${hoveredId === item.id ? 'translate-y-0' : 'translate-y-4'}`}
                            >
                                <span className="font-body text-champagne/60 text-xs tracking-[0.2em] uppercase">
                                    {item.category}
                                </span>
                                <h3 className="font-display text-xl text-ivory mt-1">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Expand icon */}
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                transition-all duration-300 ${hoveredId === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                            >
                                <div className="w-12 h-12 rounded-full border border-champagne/50 flex items-center justify-center bg-onyx/50 backdrop-blur-sm">
                                    <Maximize2 className="w-5 h-5 text-champagne" />
                                </div>
                            </div>

                            {/* Border effect */}
                            <div className={`absolute inset-0 border-2 border-champagne/30 transition-opacity duration-500
                ${hoveredId === item.id ? 'opacity-100' : 'opacity-0'}`}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 left-0 w-32 h-32 border-l-2 border-champagne/10" />
            <div className="absolute bottom-20 right-0 w-32 h-32 border-r-2 border-champagne/10" />
        </section>
    );
};

export default VirtualVault;
