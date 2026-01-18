import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { GraduationCap, Award } from 'lucide-react';

const Timeline = () => {
    const { education, certificates } = portfolioData;

    return (
        <section id="education" className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-left md:text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Education & Certifications</h2>
                    <p className="mt-4 text-xl text-gray-600 dark:text-slate-400">My academic journey and achievements</p>
                    <div className="w-16 h-1 bg-primary mt-6 rounded-full md:mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                            <GraduationCap className="mr-3 text-primary" /> Education
                        </h3>
                        <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-700 pl-8 ml-3">
                            {education.map((edu, index) => (
                                <div key={index} className="relative">
                                    <div className="absolute -left-[41px] top-0 w-5 h-5 bg-white dark:bg-slate-900 border-4 border-primary rounded-full"></div>
                                    <div className="mb-1 text-sm font-semibold text-primary">{edu.year}</div>
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">{edu.institution}</h4>
                                    <p className="text-lg text-slate-700 dark:text-slate-300 font-medium">{edu.degree}</p>
                                    <p className="text-gray-500 dark:text-slate-400 mt-2">{edu.details}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certificates Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                            <Award className="mr-3 text-primary" /> Certifications
                        </h3>
                        <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 border border-slate-100 dark:border-slate-700">
                            <ul className="space-y-6">
                                {certificates.map((cert, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="flex-shrink-0 w-2 h-2 mt-2.5 bg-green-500 rounded-full mr-4"></span>
                                        <span className="text-lg text-slate-700 dark:text-slate-300 font-medium">{cert}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
