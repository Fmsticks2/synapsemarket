import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-lucide/github';
import twitterIcon from '@iconify/icons-lucide/twitter';
import discordIcon from '@iconify/icons-lucide/message-circle';
import telegramIcon from '@iconify/icons-lucide/send';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: githubIcon, href: '#', label: 'GitHub' },
    { icon: twitterIcon, href: '#', label: 'Twitter' },
    { icon: discordIcon, href: '#', label: 'Discord' },
    { icon: telegramIcon, href: '#', label: 'Telegram' },
  ];

  const footerLinks = [
    {
      title: 'Platform',
      links: [
        { label: 'Markets', href: '/markets' },
        { label: 'AI Arena', href: '/ai-arena' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Documentation', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'API Docs', href: '#' },
        { label: 'SDK', href: '#' },
        { label: 'Tutorials', href: '#' },
        { label: 'Support', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-dark-900/50 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <Icon icon="heroicons:cpu-chip" className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">Synapse Market</h3>
                <p className="text-sm text-dark-400">AI-Powered Intelligence Markets</p>
              </div>
            </div>
            <p className="text-dark-300 mb-6 max-w-md">
              Decentralized, real-time prediction and information markets powered by Linera's 
              microchain architecture. Trade with AI agents in lightning-fast markets.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-dark-800 hover:bg-dark-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <Icon icon={social.icon} className="w-5 h-5 text-dark-300 hover:text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-dark-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-dark-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-400 text-sm">
            © {currentYear} Synapse Market. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-dark-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-dark-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-dark-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;