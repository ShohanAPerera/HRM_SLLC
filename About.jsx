import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Target, Eye, Award, Scale, Heart, Shield, BookOpen, Users, ChevronRight, Star, Globe, Sparkles, Quote, MessageCircle, User } from 'lucide-react';
import './About.css';

const About = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
    
    // Testimonial rotation state
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isTestimonialPaused, setIsTestimonialPaused] = useState(false);
    
    // Testimonials data
    const testimonials = [
        {
            id: 1,
            name: "Dr. Kamal Perera",
            position: "Senior Lecturer, Sri Lanka Law College",
            content: "The Human Rights Movement has been instrumental in shaping the consciousness of our students. Their dedication to justice and equality is truly inspiring.",
            rating: 5,
            image: "/public/testimonial1.jpg",
            icon: <User size={24} />
        },
        {
            id: 2,
            name: "Ms. Shanthi Fernando",
            position: "Human Rights Lawyer",
            content: "Working alongside HRM has shown me the power of youth in driving social change. These young advocates are the future of human rights protection in Sri Lanka.",
            rating: 5,
            image: "/public/testimonial2.jpg",
            icon: <User size={24} />
        },
        {
            id: 3,
            name: "Ravi Kumarasinghe",
            position: "Former President, HRM",
            content: "Being part of this movement transformed my understanding of law and justice. We're not just learning law; we're living it.",
            rating: 5,
            image: "/public/testimonial3.jpg",
            icon: <User size={24} />
        },
        {
            id: 4,
            name: "Prof. Nirmala Weerasinghe",
            position: "Dean, Faculty of Law",
            content: "HRM represents the best of legal education - combining academic excellence with passionate advocacy for fundamental rights.",
            rating: 5,
            image: "/public/testimonial4.jpg",
            icon: <User size={24} />
        }
    ];

    // Auto-rotate testimonials every 5 seconds
    useEffect(() => {
        if (isTestimonialPaused) return;
        
        const interval = setInterval(() => {
            setCurrentTestimonial((prevIndex) => 
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length, isTestimonialPaused]);

    // Manual navigation functions
    const nextTestimonial = () => {
        setIsTestimonialPaused(true);
        setCurrentTestimonial((prevIndex) => 
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setTimeout(() => setIsTestimonialPaused(false), 8000);
    };

    const prevTestimonial = () => {
        setIsTestimonialPaused(true);
        setCurrentTestimonial((prevIndex) => 
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
        setTimeout(() => setIsTestimonialPaused(false), 8000);
    };

    const goToTestimonial = (index) => {
        setIsTestimonialPaused(true);
        setCurrentTestimonial(index);
        setTimeout(() => setIsTestimonialPaused(false), 8000);
    };

    return (
        <div className="about-page">
            {/* Hero Section with Parallax */}
            <section className="about-hero">
                <div className="hero-background">
                    <div className="hero-gradient"></div>
                    <div className="hero-pattern"></div>
                </div>

                <div className="container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span 
                            className="hero-tag"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="tag-line"></span>
                            Since 1990
                        </motion.span>

                        <motion.h1 
                            className="page-title"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            About{' '}
                            <span className="gradient-text-wrapper">
                                <span className="gradient-text">The Movement</span>
                            </span>
                        </motion.h1>

                        <motion.div 
                            className="hero-stats-mini"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="stat-chip">
                                <Star size={16} />
                                <span>30+ Years</span>
                            </div>
                            <div className="stat-chip">
                                <Users size={16} />
                                <span>500+ Members</span>
                            </div>
                            <div className="stat-chip">
                                <Award size={16} />
                                <span>100+ Cases</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div 
                    className="scroll-indicator"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ChevronRight className="scroll-arrow" />
                </motion.div>
            </section>

            {/* History Section with Modern Layout */}
            <section className="history-section">
                <div className="container">
                    <div className="intro-grid">
                        <motion.div 
                            className="intro-text"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.span 
                                className="section-tag"
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -20 }}
                            >
                                Our Journey
                            </motion.span>
                            
                            <h2 className="section-title">
                                Forging a Legacy of{' '}
                                <span className="gradient-text">Justice</span>
                            </h2>
                            
                            <div className="text-content">
                                <p className="lead-text">
                                    The Human Rights Movement of Sri Lanka Law College (HRM) was established with the vision of creating a legal community deeply committed to human rights and social justice.
                                </p>
                                <p>
                                    Since its inception, HRM has been a vibrant platform for law students to engage in advocacy, research, and community service. We believe that as future legal professionals, it is our duty to protect the fundamental rights of all citizens and to hold power accountable.
                                </p>
                            </div>

                            <motion.div 
                                className="timeline-markers"
                                whileInView={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                            >
                                <div className="timeline-dot"></div>
                                <div className="timeline-dot"></div>
                                <div className="timeline-dot"></div>
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            className="intro-image"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{ scale, rotate }}
                        >
                            <div className="image-stack">
                                <div className="image-glow"></div>
                                <motion.div 
                                    className="image-box primary"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="image-overlay"></div>
                                    <div className="image-content">
                                        <Shield size={40} />
                                        <span>HRM</span>
                                    </div>
                                </motion.div>
                                
                                <motion.div 
                                    className="image-box secondary"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="image-overlay"></div>
                                    <div className="image-content">
                                        <Scale size={40} />
                                        <span>Justice</span>
                                    </div>
                                </motion.div>

                                {/* Floating Labels */}
                                <motion.div 
                                    className="floating-label label-1"
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                >
                                    <span>1990</span>
                                    <small>Founded</small>
                                </motion.div>
                                
                                <motion.div 
                                    className="floating-label label-2"
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                                >
                                    <span>2024</span>
                                    <small>Present</small>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Cards */}
            <section className="mission-vision">
                <div className="container">
                    <motion.div 
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-tag centered">Our Purpose</span>
                        <h2 className="section-title centered">
                            Driving <span className="gradient-text">Change</span> Forward
                        </h2>
                    </motion.div>

                    <div className="mv-grid">
                        <motion.div
                            className="mv-card"
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="card-glow"></div>
                            <div className="card-icon-wrapper">
                                <Target size={48} />
                                <div className="icon-ring"></div>
                            </div>
                            <h3>Our Mission</h3>
                            <p>To empower law students with the knowledge and skills necessary to advocate for human rights, fostering a culture of ethical legal practice and social responsibility.</p>
                            <div className="card-stats">
                                <div className="stat">
                                    <span className="stat-value">30+</span>
                                    <span className="stat-label">Years</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-value">500+</span>
                                    <span className="stat-label">Members</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="mv-card"
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="card-glow"></div>
                            <div className="card-icon-wrapper">
                                <Eye size={48} />
                                <div className="icon-ring"></div>
                            </div>
                            <h3>Our Vision</h3>
                            <p>A society where human rights are universally respected, and where the legal profession serves as a pillar of justice and equality for all.</p>
                            <div className="card-stats">
                                <div className="stat">
                                    <span className="stat-value">10+</span>
                                    <span className="stat-label">Partners</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-value">∞</span>
                                    <span className="stat-label">Impact</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS SECTION - NEW */}
            <section className="testimonials-section">
                <div className="testimonials-pattern"></div>
                <div className="container">
                    <motion.div 
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-tag centered">Testimonials</span>
                        <h2 className="section-title centered">
                            Voices of <span className="gradient-text">Impact</span>
                        </h2>
                        <p className="section-description">
                            What people say about the Human Rights Movement
                        </p>
                    </motion.div>

                    <div className="testimonials-container">
                        <motion.div 
                            className="testimonials-wrapper"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            onMouseEnter={() => setIsTestimonialPaused(true)}
                            onMouseLeave={() => setIsTestimonialPaused(false)}
                        >
                            {/* Main Testimonial Card with Rotation */}
                            <div className="testimonial-card">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentTestimonial}
                                        className="testimonial-content"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="testimonial-quote-icon">
                                            <Quote size={48} />
                                        </div>
                                        
                                        <blockquote className="testimonial-text">
                                            "{testimonials[currentTestimonial].content}"
                                        </blockquote>
                                        
                                        <div className="testimonial-author">
                                            <div className="testimonial-avatar">
                                                {testimonials[currentTestimonial].icon}
                                            </div>
                                            <div className="testimonial-author-info">
                                                <h4>{testimonials[currentTestimonial].name}</h4>
                                                <p>{testimonials[currentTestimonial].position}</p>
                                                <div className="testimonial-rating">
                                                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                                        <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Navigation Arrows */}
                                <button 
                                    className="testimonial-nav prev" 
                                    onClick={prevTestimonial}
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronRight size={24} />
                                </button>
                                <button 
                                    className="testimonial-nav next" 
                                    onClick={nextTestimonial}
                                    aria-label="Next testimonial"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>

                            {/* Indicators */}
                            <div className="testimonial-indicators">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`testimonial-dot ${index === currentTestimonial ? 'active' : ''}`}
                                        onClick={() => goToTestimonial(index)}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Counter */}
                            <div className="testimonial-counter">
                                {currentTestimonial + 1} / {testimonials.length}
                            </div>
                        </motion.div>

                        {/* Mini Stats for Testimonials */}
                        <motion.div 
                            className="testimonials-stats"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="testimonials-stat-card">
                                <MessageCircle size={24} />
                                <div className="stat-info">
                                    <span className="stat-number">100+</span>
                                    <span className="stat-label">Testimonials</span>
                                </div>
                            </div>
                            <div className="testimonials-stat-card">
                                <Users size={24} />
                                <div className="stat-info">
                                    <span className="stat-number">50+</span>
                                    <span className="stat-label">Partners</span>
                                </div>
                            </div>
                            <div className="testimonials-stat-card">
                                <Star size={24} />
                                <div className="stat-info">
                                    <span className="stat-number">4.9</span>
                                    <span className="stat-label">Avg Rating</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values with Modern Design */}
            <section className="core-values">
                <div className="container">
                    <motion.div 
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-tag centered">Our Foundation</span>
                        <h2 className="section-title centered">
                            Core <span className="gradient-text">Values</span>
                        </h2>
                        <p className="section-description">
                            The principles that guide every action we take
                        </p>
                    </motion.div>

                    <div className="values-grid">
                        {[
                            { name: 'Integrity', icon: Shield, color: '#2563eb' },
                            { name: 'Equality', icon: Scale, color: '#7c3aed' },
                            { name: 'Justice', icon: Award, color: '#059669' },
                            { name: 'Advocacy', icon: BookOpen, color: '#d97706' },
                            { name: 'Education', icon: Users, color: '#dc2626' }
                        ].map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={value.name}
                                    className="value-card"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ 
                                        y: -10,
                                        transition: { type: "spring", stiffness: 400 }
                                    }}
                                >
                                    <div className="value-icon-wrapper" style={{ background: `linear-gradient(135deg, ${value.color}20, ${value.color}40)` }}>
                                        <Icon color={value.color} size={32} />
                                        <div className="value-icon-glow" style={{ background: value.color }}></div>
                                    </div>
                                    <span className="value-name">{value.name}</span>
                                    <div className="value-line"></div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <div className="container">
                    <motion.div 
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-tag centered">Leadership</span>
                        <h2 className="section-title centered">
                            Meet Our <span className="gradient-text">Team</span>
                        </h2>
                    </motion.div>

                    <div className="team-grid">
                        {[1, 2, 3].map((_, index) => (
                            <motion.div
                                key={index}
                                className="team-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="team-image">
                                    <div className="image-placeholder"></div>
                                </div>
                                <h3>John Doe</h3>
                                <p>President</p>
                                <div className="team-social">
                                    <a href="#" className="social-link">in</a>
                                    <a href="#" className="social-link">tw</a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta">
                <div className="container">
                    <motion.div 
                        className="cta-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Join the Movement</h2>
                        <p>Be part of something greater than yourself</p>
                        <motion.button
                            className="cta-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Become a Member
                            <ChevronRight size={20} />
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;