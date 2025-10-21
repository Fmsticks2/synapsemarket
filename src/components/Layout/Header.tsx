import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import homeIcon from '@iconify/icons-heroicons/home';
import chartBarIcon from '@iconify/icons-heroicons/chart-bar';
import userIcon from '@iconify/icons-heroicons/user';
import cpuChipIcon from '@iconify/icons-heroicons/cpu-chip';
import walletIcon from '@iconify/icons-heroicons/wallet';

const Header: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: homeIcon },
    { path: '/markets', label: 'Markets', icon: chartBarIcon },
    { path: '/portfolio', label: 'Portfolio', icon: walletIcon },
    { path: '/ai-arena', label: 'AI Arena', icon: cpuChipIcon },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 glass-effect border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center"
            >
              <Icon icon={cpuChipIcon} className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Synapse Market</h1>
              <p className="text-xs text-dark-400">AI-Powered Intelligence Markets</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                    : 'text-dark-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon icon={item.icon} className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline text-sm"
            >
              <Icon icon={walletIcon} className="w-4 h-4 mr-2" />
              Connect Wallet
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-dark-700 hover:bg-dark-600 rounded-lg flex items-center justify-center transition-colors"
            >
              <Icon icon={userIcon} className="w-5 h-5 text-dark-300" />
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-dark-700 hover:bg-dark-600 rounded-lg flex items-center justify-center transition-colors"
            >
              <Icon icon="heroicons:bars-3" className="w-5 h-5 text-dark-300" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;