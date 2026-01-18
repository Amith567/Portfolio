import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
    const { skills } = portfolioData;
    const categories = Object.keys(skills);

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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section id="skills" className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-left md:text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Technical Skills</h2>
                    <p className="mt-4 text-xl text-gray-600 dark:text-slate-400">Technologies I work with</p>
                    <div className="w-16 h-1 bg-primary mt-6 rounded-full md:mx-auto"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700"
                        >
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills[category].map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-white dark:bg-slate-700 text-primary dark:text-blue-300 text-sm font-medium rounded-full border border-blue-100 dark:border-slate-600 shadow-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
