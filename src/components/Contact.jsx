import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    const { personalInfo } = portfolioData;

    return (
        <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-left md:text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Get In Touch</h2>
                    <p className="mt-4 text-xl text-gray-600 dark:text-slate-400">Have a project in mind or want to say hi?</p>
                    <div className="w-16 h-1 bg-primary mt-6 rounded-full md:mx-auto"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12 justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 max-w-2xl w-full"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="flex flex-col items-center p-6 bg-blue-50 dark:bg-slate-700 rounded-xl hover:bg-blue-100 dark:hover:bg-slate-600 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Email</h3>
                                <p className="text-gray-600 dark:text-slate-300 text-center">{personalInfo.email}</p>
                            </a>

                            <a
                                href={`tel:${personalInfo.phone}`}
                                className="flex flex-col items-center p-6 bg-green-50 dark:bg-slate-700 rounded-xl hover:bg-green-100 dark:hover:bg-slate-600 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Phone</h3>
                                <p className="text-gray-600 dark:text-slate-300 text-center">{personalInfo.phone}</p>
                            </a>
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-gray-600 dark:text-slate-400 mb-6">Open to opportunities in Software Development and Web Engineering.</p>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-slate-900 dark:bg-primary hover:bg-slate-800 dark:hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Say Hello
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
