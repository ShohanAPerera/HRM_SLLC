import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Users, Map, Heart, Shield, Building, Calendar, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        success: false,
        message: ''
    });

    const [focusedField, setFocusedField] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setFormStatus({
            submitted: true,
            success: false,
            message: 'Sending...'
        });

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            const mailtoLink = `mailto:hrm@lawcollege.lk?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
            )}`;
            
            window.location.href = mailtoLink;
            
            setFormStatus({
                submitted: true,
                success: true,
                message: 'Message sent successfully!'
            });

            setTimeout(() => {
                setFormData({ name: '', email: '', subject: '', message: '' });
                setFormStatus({ submitted: false, success: false, message: '' });
            }, 3000);

        } catch (error) {
            setFormStatus({
                submitted: true,
                success: false,
                message: 'Failed to send. Please try again.'
            });
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="contact-page">
            {/* Header Section */}
            <section className="contact-header">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="header-content"
                    >
                        <h1 className="page-title">
                            Contact <span className="title-accent">Us</span>
                        </h1>
                        <p className="page-description">
                            Get in touch with the Human Rights Movement at Sri Lanka Law College
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Grid Section */}
            <section className="contact-section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Information */}
                        <motion.div 
                            className="info-panel"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>Office Information</h2>
                            <p className="info-intro">
                                Reach out to us through any of these channels. Our team is ready to assist you.
                            </p>

                            <div className="info-list">
                                <div className="info-item">
                                    <div className="info-icon">
                                        <MapPin size={22} />
                                    </div>
                                    <div className="info-details">
                                        <h4>Visit Us</h4>
                                        <p>244 Hulftsdorp Street, Colombo 01200, Sri Lanka</p>
                                        <a href="#map" className="info-link">Get Directions →</a>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <Phone size={22} />
                                    </div>
                                    <div className="info-details">
                                        <h4>Call Us</h4>
                                        <p>+94 11 123 4567</p>
                                        <span className="info-note">Mon-Fri, 9:00 AM - 6:00 PM</span>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <Mail size={22} />
                                    </div>
                                    <div className="info-details">
                                        <h4>Email Us</h4>
                                        <p>hrm@lawcollege.lk</p>
                                        <span className="info-note">Response within 24 hours</span>
                                    </div>
                                </div>
                            </div>

                            <div className="office-hours">
                                <h4>Office Hours</h4>
                                <div className="hours-grid">
                                    <div className="hours-row">
                                        <span>Monday - Friday</span>
                                        <span>9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="hours-row">
                                        <span>Saturday</span>
                                        <span>9:00 AM - 1:00 PM</span>
                                    </div>
                                    <div className="hours-row">
                                        <span>Sunday</span>
                                        <span>Closed</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div 
                            className="form-panel"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>Send a Message</h2>
                            <p className="form-intro">
                                Fill out the form below and we'll respond as soon as possible.
                            </p>

                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            className={focusedField === 'name' ? 'focused' : ''}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            className={focusedField === 'email' ? 'focused' : ''}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject *</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('subject')}
                                        onBlur={() => setFocusedField(null)}
                                        className={focusedField === 'subject' ? 'focused' : ''}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        className={focusedField === 'message' ? 'focused' : ''}
                                    ></textarea>
                                </div>

                                {formStatus.submitted ? (
                                    <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                                        {formStatus.success ? (
                                            <CheckCircle size={20} />
                                        ) : (
                                            <span>⚠️</span>
                                        )}
                                        <span>{formStatus.message}</span>
                                    </div>
                                ) : (
                                    <button type="submit" className="submit-button">
                                        Send Message
                                        <Send size={18} />
                                    </button>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <div className="container">
                    <motion.div 
                        className="map-container"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="map-card">
                            <div className="map-info">
                                <Shield size={24} className="map-icon" />
                                <h3>Sri Lanka Law College</h3>
                                <p>244 Hulftsdorp Street, Colombo 01200</p>
                                <a 
                                    href="https://maps.google.com/?q=Sri+Lanka+Law+College+Colombo" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="map-button"
                                >
                                    Open in Google Maps
                                </a>
                            </div>
                        </div>
                        <iframe
                            title="Sri Lanka Law College Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.771123456789!2d79.8580!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2591600000001%3A0x0!2sSri%20Lanka%20Law%20College!5e0!3m2!1sen!2slk!4v1620000000000!5m2!1sen!2slk"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;