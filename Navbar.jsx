import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Shield, ChevronDown } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import './Navbar.css';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/', icon: '' },
        { name: 'About Us', path: '/about', icon: '' },
        { name: 'Gallery', path: '/gallery', icon: '' },
        { name: 'Contact', path: '/contact', icon: '' },
    ];

    return (
        <>
            <motion.nav 
                className={`navbar ${scrolled ? 'scrolled' : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
            >
                {/* Gradient Background Overlay */}
                <div className="navbar-gradient"></div>
                
                {/* Noise Texture */}
                <div className="navbar-noise"></div>

                <div className="container nav-container">
                    {/* Logo with Animation */}
                    <motion.div
                    
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to="/" className="logo">
                            <img src="/mainLogo.png" alt="Logo" className="logo-img-navbar" />
                            <div className="logo-text">
                                <span className="logo-main">HUMAN RIGHTS MOVEMENT</span>
                                <span className="logo-light">Srilanka Law College</span>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="nav-links-wrapper">
                        <ul className="nav-links">
                            {navLinks.map((link, index) => (
                                <motion.li 
                                    key={link.path}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onHoverStart={() => setHoveredLink(link.path)}
                                    onHoverEnd={() => setHoveredLink(null)}
                                >
                                    <Link
                                        to={link.path}
                                        className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                    >
                                        <span className="nav-link-icon">{link.icon}</span>
                                        <span className="nav-link-text">{link.name}</span>
                                        
                                        {/* Active Indicator */}
                                        {location.pathname === link.path && (
                                            <motion.div 
                                                className="active-indicator"
                                                layoutId="activeIndicator"
                                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        
                                        {/* Hover Effect */}
                                        {hoveredLink === link.path && location.pathname !== link.path && (
                                            <motion.div 
                                                className="hover-indicator"
                                                layoutId="hoverIndicator"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            />
                                        )}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Theme Toggle with Animation */}
                        <motion.button 
                            onClick={toggleTheme} 
                            className="theme-toggle"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0, rotate: -180 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <motion.div
                                animate={{ rotate: theme === 'light' ? 0 : 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                            </motion.div>
                        </motion.button>
                    </div>

                    {/* Mobile Actions */}
                    <div className="mobile-actions">
                        <motion.button 
                            onClick={toggleTheme} 
                            className="theme-toggle"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </motion.button>
                        
                        <motion.button 
                            className={`menu-toggle ${isOpen ? 'open' : ''}`}
                            onClick={() => setIsOpen(!isOpen)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <motion.div
                                animate={{ rotate: isOpen ? 90 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </motion.div>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            <motion.div 
                                className="mobile-menu-backdrop"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsOpen(false)}
                            />
                            
                            <motion.div 
                                className="mobile-menu"
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            >
                                <div className="mobile-menu-header">
                                    <motion.div 
                                        className="mobile-logo"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <Shield size={24} />
                                        <span>HRM</span>
                                    </motion.div>
                                    <motion.button 
                                        className="close-menu"
                                        onClick={() => setIsOpen(false)}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <X size={24} />
                                    </motion.button>
                                </div>

                                <ul className="mobile-nav-links">
                                    {navLinks.map((link, index) => (
                                        <motion.li 
                                            key={link.path}
                                            initial={{ opacity: 0, x: -50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 + 0.3 }}
                                        >
                                            <Link
                                                to={link.path}
                                                className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                <span className="mobile-link-icon">{link.icon}</span>
                                                <span className="mobile-link-text">{link.name}</span>
                                                <motion.div 
                                                    className="mobile-link-arrow"
                                                    animate={{ x: [0, 5, 0] }}
                                                    transition={{ duration: 1, repeat: Infinity }}
                                                >
                                                    <ChevronDown size={20} />
                                                </motion.div>
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>

                                <motion.div 
                                    className="mobile-menu-footer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    <p>Human Rights Movement</p>
                                    <p className="footer-small">SL Law College • Since 1990</p>
                                </motion.div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Progress Bar */}
            <motion.div 
                className="scroll-progress"
                style={{ scaleX: useScrollProgress() }}
            />
        </>
    );
};

// Custom hook for scroll progress
const useScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollPx = document.documentElement.scrollTop;
            const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = scrollPx / winHeightPx;
            setProgress(scrolled);
        };

        window.addEventListener('scroll', updateProgress);
        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return progress;
};

export default Navbar;