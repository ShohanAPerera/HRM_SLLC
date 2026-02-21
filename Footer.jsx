import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone, Shield, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                {/* Main Footer Content */}
                <div className="footer-content">
                    {/* Brand Column */}
                    <div className="footer-section">
                        <div className="brand">
                            <Shield size={24} className="brand-icon" />
                            <div>
                                <span className="brand-name">HRM</span>
                                <span className="brand-college">SL Law College</span>
                            </div>
                        </div>
                        <p className="brand-description">
                            Human Rights Movement at Sri Lanka Law College. Advocating for justice and equality since 1990.
                        </p>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="footer-section">
                        <h4>Resources</h4>
                        <ul>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms of Use</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <ul className="contact-info">
                            <li>
                                <MapPin size={16} />
                                <span>244 Hulftsdorp St, Colombo 01200</span>
                            </li>
                            <li>
                                <Phone size={16} />
                                <span>+94 11 123 4567</span>
                            </li>
                            <li>
                                <Mail size={16} />
                                <span>hrm@lawcollege.lk</span>
                            </li>
                        </ul>
                        <p className="office-hours">Mon-Fri: 9am-6pm | Sat: 9am-1pm</p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p>© {currentYear} Human Rights Movement. All rights reserved.</p>
                    <p className="credit">Made with <Heart size={12} /> for human rights</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;