import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shield, Users, BookOpen, Scale, Gavel, Heart, ChevronRight, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    
    // Image rotation state
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    
    // Array of images with metadata for the gallery
    const galleryImages = [
        { 
            src: "/public/manudama.png", 
            alt: "Manudama - Human Rights Movement",
            title: "Manudama Human Rights",
            description: "Leading the charge for justice and equality"
        },
        { 
            src: "/public/mainLogo.png", 
            alt: "Rights Advocacy Event",
            title: "Rights Advocacy",
            description: "Standing up for fundamental rights"
        },
        { 
            src: "/public/pl.png", 
            alt: "Legal Education Workshop",
            title: "Legal Education",
            description: "Empowering through knowledge"
        },
        { 
            src: "/public/manurawa01.png", 
            alt: "Community Building",
            title: "Community Building",
            description: "Creating networks of change-makers"
        },
        { 
            src: "/public/manurawa02.png", 
            alt: "Advocacy March",
            title: "Advocacy March",
            description: "Making our voices heard"
        },
    ];

    // Auto-rotate images every 5 seconds
    useEffect(() => {
        if (isPaused) return;
        
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [galleryImages.length, isPaused]);

    // Manual navigation functions
    const nextImage = () => {
        setIsPaused(true);
        setCurrentImageIndex((prevIndex) => 
            prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
        );
        setTimeout(() => setIsPaused(false), 8000);
    };

    const prevImage = () => {
        setIsPaused(true);
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
        );
        setTimeout(() => setIsPaused(false), 8000);
    };

    const goToImage = (index) => {
        setIsPaused(true);
        setCurrentImageIndex(index);
        setTimeout(() => setIsPaused(false), 8000);
    };

    return (
        <div className="home-page">
            {/* Hero Section with Parallax - Left Content & Right Gallery */}
            <section className="hero">
                <div className="hero-background">
                    <div className="hero-gradient"></div>
                    <div className="hero-pattern"></div>
                </div>
                
                <div className="container hero-container">
                    {/* Left Side - Content */}
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span 
                            className="hero-tag"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="tag-line"></span>
                            Defending Excellence Since 1990
                        </motion.span>
                        
                        <h1 className="hero-title">
                            Human Rights{' '}
                            <span className="gradient-text">Movement</span>
                        </h1>
                        
                        <p className="hero-subtitle">
                            Sri Lanka Law College. A movement dedicated to the protection 
                            and promotion of fundamental rights, fostering a culture of 
                            justice and equality within the legal fraternity.
                        </p>
                        
                        <div className="hero-btns">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link to="/about" className="btn btn-primary">
                                    <span>Discover More</span>
                                    <ArrowRight className="btn-icon" />
                                </Link>
                            </motion.div>
                            
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link to="/contact" className="btn btn-outline">
                                    <span>Join Movement</span>
                                    <ChevronRight className="btn-icon" />
                                </Link>
                            </motion.div>
                        </div>

                        <div className="hero-stats">
                            <motion.div 
                                className="stat-item"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <span className="stat-number">30+</span>
                                <span className="stat-label">Years of Service</span>
                            </motion.div>
                            <motion.div 
                                className="stat-item"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <span className="stat-number">500+</span>
                                <span className="stat-label">Active Members</span>
                            </motion.div>
                            <motion.div 
                                className="stat-item"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <span className="stat-number">100+</span>
                                <span className="stat-label">Cases Won</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Side - Full Screen Rotating Gallery */}
                    <motion.div
                        className="hero-gallery-wrapper"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ scale }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div className="hero-gallery-container">
                            {/* Animated Images with Crossfade */}
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentImageIndex}
                                    src={galleryImages[currentImageIndex].src}
                                    alt={galleryImages[currentImageIndex].alt}
                                    className="gallery-image"
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.8 }}
                                />
                            </AnimatePresence>
                            
                            {/* Gradient Overlay */}
                            <div className="gallery-overlay"></div>
                            
                            {/* Image Counter */}
                            {/* <div className="gallery-counter">
                                {currentImageIndex + 1} / {galleryImages.length}
                            </div> */}

                            {/* Content Overlay for Current Image */}
                            <motion.div 
                                className="gallery-content"
                                key={`content-${currentImageIndex}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                {/* <span className="gallery-tag">Featured</span> */}
                                <h3 className="gallery-title">
                                    {galleryImages[currentImageIndex].title}
                                </h3>
                                <p className="gallery-description">
                                    {galleryImages[currentImageIndex].description}
                                </p>
                            </motion.div>

                            {/* Navigation Arrows */}
                            {/* <button 
                                className="gallery-nav prev" 
                                onClick={prevImage} 
                                aria-label="Previous image"
                            >
                                <ChevronRight size={24} />
                            </button>
                            <button 
                                className="gallery-nav next" 
                                onClick={nextImage} 
                                aria-label="Next image"
                            >
                                <ChevronRight size={24} />
                            </button> */}

                            {/* Image Indicators */}
                            <div className="gallery-indicators">
                                {galleryImages.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`gallery-indicator ${index === currentImageIndex ? 'active' : ''}`}
                                        onClick={() => goToImage(index)}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="hero-scroll-indicator">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ChevronRight className="scroll-arrow" />
                    </motion.div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="highlights">
                <div className="container">
                    <motion.div 
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-subtitle">What We Do</span>
                        <h2 className="section-title">
                            Championing <span className="gradient-text">Human Rights</span>
                        </h2>
                        <p className="section-description">
                            Through advocacy, education, and community building, we're creating lasting change
                        </p>
                    </motion.div>

                    <div className="highlights-grid">
                        <motion.div
                            className="highlight-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="card-icon">
                                <Shield />
                                <div className="icon-glow"></div>
                            </div>
                            <h3>Rights Advocacy</h3>
                            <p>Standing at the forefront of legal advocacy for human rights within the Law College and beyond.</p>
                            <Link to="/advocacy" className="card-link">
                                Learn More <ArrowRight size={16} />
                            </Link>
                        </motion.div>

                        <motion.div
                            className="highlight-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="card-icon">
                                <BookOpen />
                                <div className="icon-glow"></div>
                            </div>
                            <h3>Legal Education</h3>
                            <p>Educating future legal professionals on the importance of human rights and international law.</p>
                            <Link to="/education" className="card-link">
                                Learn More <ArrowRight size={16} />
                            </Link>
                        </motion.div>

                        <motion.div
                            className="highlight-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="card-icon">
                                <Users />
                                <div className="icon-glow"></div>
                            </div>
                            <h3>Community Building</h3>
                            <p>Creating a network of like-minded individuals dedicated to social justice and equality.</p>
                            <Link to="/community" className="card-link">
                                Learn More <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="stats-background"></div>
                <div className="container">
                    <div className="stats-grid">
                        <motion.div 
                            className="stat-card"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Award className="stat-icon" />
                            <h3>30+</h3>
                            <p>Years of Excellence</p>
                        </motion.div>
                        
                        <motion.div 
                            className="stat-card"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Users className="stat-icon" />
                            <h3>500+</h3>
                            <p>Active Members</p>
                        </motion.div>
                        
                        <motion.div 
                            className="stat-card"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Scale className="stat-icon" />
                            <h3>100+</h3>
                            <p>Cases Championed</p>
                        </motion.div>
                        
                        <motion.div 
                            className="stat-card"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Globe className="stat-icon" />
                            <h3>10+</h3>
                            <p>Global Partners</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="quote-section">
                <div className="quote-pattern"></div>
                <div className="container">
                    <motion.div
                        className="quote-content"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div 
                            className="quote-icon"
                            animate={{ 
                                rotate: [0, 5, -5, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{ 
                                duration: 6,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        >
                            <span className="quote-mark">"</span>
                        </motion.div>
                        
                        <blockquote>
                            "To deny people their human rights is to challenge their very humanity."
                        </blockquote>
                        
                        <div className="quote-author">
                            <div className="author-line"></div>
                            <cite>Nelson Mandela</cite>
                            <div className="author-line"></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <motion.div 
                        className="cta-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Ready to Make a Difference?</h2>
                        <p>Join the movement and be part of something greater</p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="/join" className="btn btn-primary btn-large">
                                Become a Member <ArrowRight size={20} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;