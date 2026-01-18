import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const { personalInfo } = portfolioData;

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="md:w-1/2 text-left"
                >
                    <span className="text-primary font-semibold text-lg mb-2 block">Hello, I'm</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
                        {personalInfo.name}
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-6">
                        {personalInfo.title}
                    </h2>
                    <p className="text-gray-600 dark:text-slate-400 mb-8 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
                        {personalInfo.objective}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-start">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            View Work <ArrowRight className="ml-2" size={20} />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-slate-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors shadow-sm hover:shadow-md"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-8 flex items-center justify-start space-x-6">
                        {personalInfo.socials.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
                                title={social.name}
                            >
                                <social.icon size={24} />
                            </a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
                >
                    {/* Placeholder for profile image or an abstract illustration */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center shadow-2xl overflow-hidden ring-4 ring-white dark:ring-slate-700">
                        <img
                            src={personalInfo.image}
                            alt={personalInfo.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
