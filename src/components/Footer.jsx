import React from 'react';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
    const { personalInfo } = portfolioData;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-6">Amith P Portfolio</h2>

                <div className="flex justify-center space-x-8 mb-8">
                    {personalInfo.socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors transform hover:scale-110"
                        >
                            <social.icon size={24} />
                        </a>
                    ))}
                </div>

                <p className="text-slate-500 text-sm">
                    &copy; {currentYear} {personalInfo.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
