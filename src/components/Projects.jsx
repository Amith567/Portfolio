import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { ExternalLink, Github, Folder, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
    const { projects } = portfolioData;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isPaused) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
            }
        }, 5000);

        return () => clearInterval(timer);
    }, [isPaused, projects.length]);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    return (
        <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-left md:text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Featured Projects</h2>
                    <p className="mt-4 text-xl text-gray-600 dark:text-slate-400">What I've built recently</p>
                    <div className="w-16 h-1 bg-primary mt-6 rounded-full md:mx-auto"></div>
                </motion.div>

                <div
                    className="relative max-w-4xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700 md:flex h-full min-h-[400px]"
                        >
                            <div className="p-8 md:p-12 w-full flex flex-col justify-center">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-blue-50 dark:bg-slate-700 rounded-lg text-primary dark:text-blue-400">
                                        <Folder size={28} />
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={projects[currentIndex].link} className="text-slate-400 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">
                                            <Github size={24} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">{projects[currentIndex].title}</h3>
                                <p className="text-md text-primary dark:text-blue-400 font-medium mb-6">{projects[currentIndex].type}</p>
                                <p className="text-gray-600 dark:text-slate-300 mb-8 leading-relaxed text-lg">
                                    {projects[currentIndex].description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {projects[currentIndex].techStack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="text-sm font-mono text-slate-500 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-3 py-1.5 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevProject}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 bg-white dark:bg-slate-800 rounded-full shadow-lg text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors focus:outline-none z-10"
                        aria-label="Previous Project"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextProject}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 bg-white dark:bg-slate-800 rounded-full shadow-lg text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors focus:outline-none z-10"
                        aria-label="Next Project"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'
                                    }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
