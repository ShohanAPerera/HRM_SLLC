import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Heart, Share2, Download, ChevronLeft, ChevronRight, Grid, Layers, Filter, Calendar, Users, MapPin, Camera, Sparkles, Eye } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState('all');
    const [likedImages, setLikedImages] = useState({});
    const [viewMode, setViewMode] = useState('grid'); // grid or masonry

    const categories = ['All', 'Events', 'Education', 'Movements', 'Workshops', 'Community'];

    const images = [
        { 
            id: 1, 
            title: 'Annual General Meeting', 
            category: 'Events',
            date: '2024-01-15',
            location: 'Main Hall',
            participants: 150,
            description: 'Annual gathering of members discussing future initiatives and celebrating achievements.',
            featured: true
        },
        { 
            id: 2, 
            title: 'Human Rights Workshop', 
            category: 'Education',
            date: '2024-02-10',
            location: 'Seminar Room',
            participants: 45,
            description: 'Interactive workshop on fundamental rights and legal procedures.',
            featured: false
        },
        { 
            id: 3, 
            title: 'Advocacy March', 
            category: 'Movements',
            date: '2024-03-05',
            location: 'Colombo Streets',
            participants: 300,
            description: 'Peaceful march advocating for human rights awareness.',
            featured: true
        },
        { 
            id: 4, 
            title: 'Legal Aid Clinic', 
            category: 'Workshops',
            date: '2024-03-20',
            location: 'Community Center',
            participants: 60,
            description: 'Free legal consultation for underserved communities.',
            featured: false
        },
        { 
            id: 5, 
            title: 'Panel Discussion', 
            category: 'Events',
            date: '2024-04-02',
            location: 'Auditorium',
            participants: 200,
            description: 'Expert panel discussing current human rights challenges.',
            featured: true
        },
        { 
            id: 6, 
            title: 'Awareness Campaign', 
            category: 'Movements',
            date: '2024-04-18',
            location: 'University Campus',
            participants: 180,
            description: 'Campus-wide campaign promoting human rights education.',
            featured: false
        },
        {
            id: 7,
            title: 'Community Outreach',
            category: 'Community',
            date: '2024-05-01',
            location: 'Rural Area',
            participants: 75,
            description: 'Bringing legal awareness to rural communities.',
            featured: true
        },
        {
            id: 8,
            title: 'Youth Leadership Summit',
            category: 'Workshops',
            date: '2024-05-15',
            location: 'Conference Center',
            participants: 120,
            description: 'Empowering young leaders in human rights advocacy.',
            featured: false
        }
    ];

    const filteredImages = filter === 'all' 
        ? images 
        : images.filter(img => img.category.toLowerCase() === filter.toLowerCase());

    const handleLike = (id, e) => {
        e.stopPropagation();
        setLikedImages(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const handleShare = async (image, e) => {
        e.stopPropagation();
        if (navigator.share) {
            try {
                await navigator.share({
                    title: image.title,
                    text: image.description,
                    url: window.location.href,
                });
            } catch (error) {
                console.log('Share cancelled');
            }
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(`${image.title} - ${image.description}`);
            alert('Image info copied to clipboard!');
        }
    };

    const handleDownload = (image, e) => {
        e.stopPropagation();
        // In a real app, this would download the actual image
        alert(`Downloading ${image.title}...`);
    };

    const nextImage = () => {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage?.id);
        const nextIndex = (currentIndex + 1) % filteredImages.length;
        setSelectedImage(filteredImages[nextIndex]);
    };

    const prevImage = () => {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage?.id);
        const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        setSelectedImage(filteredImages[prevIndex]);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedImage) return;
            
            if (e.key === 'ArrowRight') {
                nextImage();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            } else if (e.key === 'Escape') {
                setSelectedImage(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage]);

    return (
        <div className="gallery-page">
            {/* Hero Section */}
            <section className="gallery-hero">
                <div className="hero-background">
                    <div className="hero-gradient"></div>
                    <div className="floating-elements">
                        {[...Array(15)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="floating-element"
                                animate={{
                                    y: [0, -30, 0],
                                    x: [0, 20, -20, 0],
                                    rotate: [0, 180, 360]
                                }}
                                transition={{
                                    duration: Math.random() * 20 + 10,
                                    repeat: Infinity,
                                    delay: Math.random() * 5
                                }}
                            >
                                {i % 3 === 0 ? <Camera /> : i % 3 === 1 ? <Sparkles /> : <Eye />}
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="container">
                    <motion.div 
                        className="hero-content"
                        initial={{ opacity: 0, y: 30 }}
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
                            Visual Journey
                        </motion.span>

                        <h1 className="page-title">
                            Gallery{' '}
                            <span className="gradient-text-wrapper">
                                <span className="gradient-text">Highlights</span>
                                {/* <Sparkles className="title-sparkle" /> */}
                            </span>
                        </h1>

                        <p className="hero-description">
                            Capturing moments of advocacy, education, and community impact
                        </p>

                        {/* Stats */}
                        <motion.div 
                            className="gallery-stats"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="stat-item">
                                <span className="stat-value">{images.length}+</span>
                                <span className="stat-label">Moments</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">5</span>
                                <span className="stat-label">Categories</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">2024</span>
                                <span className="stat-label">This Year</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="filter-section">
                <div className="container">
                    <div className="filter-bar">
                        <div className="filter-tabs">
                            <motion.button
                                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                                onClick={() => setFilter('all')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Layers size={16} />
                                All
                            </motion.button>
                            {categories.slice(1).map(cat => (
                                <motion.button
                                    key={cat}
                                    className={`filter-btn ${filter === cat.toLowerCase() ? 'active' : ''}`}
                                    onClick={() => setFilter(cat.toLowerCase())}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {cat}
                                </motion.button>
                            ))}
                        </div>

                        <div className="view-toggle">
                            <motion.button
                                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                                onClick={() => setViewMode('grid')}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Grid size={18} />
                            </motion.button>
                            <motion.button
                                className={`view-btn ${viewMode === 'masonry' ? 'active' : ''}`}
                                onClick={() => setViewMode('masonry')}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Filter size={18} />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="gallery-section">
                <div className="container">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={filter + viewMode}
                            className={`gallery-grid ${viewMode === 'masonry' ? 'masonry' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {filteredImages.map((image, index) => (
                                <motion.div
                                    key={image.id}
                                    className={`gallery-item ${image.featured ? 'featured' : ''}`}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ y: -5 }}
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <div className="image-container">
                                        <div className="image-overlay-gradient"></div>
                                        
                                        {/* Image Placeholder (replace with actual images) */}
                                        <div className="image-placeholder">
                                            <div className="placeholder-pattern"></div>
                                            <span className="placeholder-text">{image.title}</span>
                                        </div>

                                        {/* Category Badge */}
                                        <span className="category-badge">{image.category}</span>

                                        {/* Featured Badge */}
                                        {image.featured && (
                                            <span className="featured-badge">
                                                <Sparkles size={14} />
                                                Featured
                                            </span>
                                        )}

                                        {/* Image Actions */}
                                        <div className="image-actions">
                                            <motion.button
                                                className="action-btn"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={(e) => handleLike(image.id, e)}
                                            >
                                                <Heart 
                                                    size={18} 
                                                    fill={likedImages[image.id] ? 'currentColor' : 'none'}
                                                />
                                            </motion.button>
                                            <motion.button
                                                className="action-btn"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={(e) => handleShare(image, e)}
                                            >
                                                <Share2 size={18} />
                                            </motion.button>
                                            <motion.button
                                                className="action-btn"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={(e) => handleDownload(image, e)}
                                            >
                                                <Download size={18} />
                                            </motion.button>
                                        </div>

                                        {/* Image Info Overlay */}
                                        <div className="image-info-overlay">
                                            <div className="info-content">
                                                <h3>{image.title}</h3>
                                                <div className="meta">
                                                    <span>
                                                        <Calendar size={14} />
                                                        {new Date(image.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                    </span>
                                                    <span>
                                                        <MapPin size={14} />
                                                        {image.location}
                                                    </span>
                                                    <span>
                                                        <Users size={14} />
                                                        {image.participants}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {filteredImages.length === 0 && (
                        <motion.div 
                            className="no-results"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <Camera size={48} />
                            <h3>No images found</h3>
                            <p>Try selecting a different category</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Lightbox Header */}
                        <div className="lightbox-header">
                            <div className="lightbox-title">
                                <h2>{selectedImage.title}</h2>
                                <span className="lightbox-category">{selectedImage.category}</span>
                            </div>
                            <div className="lightbox-actions">
                                <motion.button
                                    className="lightbox-btn"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={(e) => handleLike(selectedImage.id, e)}
                                >
                                    <Heart 
                                        size={20} 
                                        fill={likedImages[selectedImage.id] ? 'currentColor' : 'none'}
                                    />
                                </motion.button>
                                <motion.button
                                    className="lightbox-btn"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={(e) => handleShare(selectedImage, e)}
                                >
                                    <Share2 size={20} />
                                </motion.button>
                                <motion.button
                                    className="lightbox-btn"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={(e) => handleDownload(selectedImage, e)}
                                >
                                    <Download size={20} />
                                </motion.button>
                                <motion.button
                                    className="lightbox-btn close"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <X size={24} />
                                </motion.button>
                            </div>
                        </div>

                        {/* Lightbox Content */}
                        <motion.div
                            className="lightbox-content"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Navigation */}
                            <motion.button
                                className="nav-btn prev"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={prevImage}
                            >
                                <ChevronLeft size={32} />
                            </motion.button>

                            <motion.button
                                className="nav-btn next"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={nextImage}
                            >
                                <ChevronRight size={32} />
                            </motion.button>

                            {/* Image Display */}
                            <div className="lightbox-image-container">
                                <div className="lightbox-image-placeholder">
                                    <div className="placeholder-pattern"></div>
                                    <h3>{selectedImage.title}</h3>
                                    <p>{selectedImage.description}</p>
                                </div>

                                {/* Image Meta */}
                                <div className="lightbox-meta">
                                    <div className="meta-item">
                                        <Calendar size={18} />
                                        <div>
                                            <span className="meta-label">Date</span>
                                            <span className="meta-value">
                                                {new Date(selectedImage.date).toLocaleDateString('en-US', { 
                                                    month: 'long', 
                                                    day: 'numeric', 
                                                    year: 'numeric' 
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="meta-item">
                                        <MapPin size={18} />
                                        <div>
                                            <span className="meta-label">Location</span>
                                            <span className="meta-value">{selectedImage.location}</span>
                                        </div>
                                    </div>
                                    <div className="meta-item">
                                        <Users size={18} />
                                        <div>
                                            <span className="meta-label">Participants</span>
                                            <span className="meta-value">{selectedImage.participants}+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Lightbox Footer */}
                        <div className="lightbox-footer">
                            <div className="lightbox-counter">
                                {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
                            </div>
                            <div className="lightbox-thumbnails">
                                {filteredImages.slice(0, 5).map(img => (
                                    <motion.div
                                        key={img.id}
                                        className={`thumbnail ${img.id === selectedImage.id ? 'active' : ''}`}
                                        whileHover={{ scale: 1.1 }}
                                        onClick={() => setSelectedImage(img)}
                                    >
                                        <div className="thumbnail-placeholder"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CTA Section */}
            <section className="gallery-cta">
                <div className="container">
                    <motion.div 
                        className="cta-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Want to feature your moments?</h2>
                        <p>Share your photos from our events and movements</p>
                        <motion.button
                            className="cta-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Submit Your Photos
                            <Camera size={18} />
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;