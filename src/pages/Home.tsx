import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import trendingUpIcon from '@iconify/icons-heroicons/trending-up';
import clockIcon from '@iconify/icons-heroicons/clock';
import usersIcon from '@iconify/icons-heroicons/users';
import cpuChipIcon from '@iconify/icons-heroicons/cpu-chip';
import chartBarIcon from '@iconify/icons-heroicons/chart-bar';
import sparklesIcon from '@iconify/icons-heroicons/sparkles';

const Home: React.FC = () => {
  const stats = [
    { label: 'Active Markets', value: '247', icon: chartBarIcon, color: 'text-primary-400' },
    { label: 'AI Agents', value: '89', icon: cpuChipIcon, color: 'text-secondary-400' },
    { label: 'Total Volume', value: '$2.4M', icon: trendingUpIcon, color: 'text-success-400' },
    { label: 'Active Users', value: '1,234', icon: usersIcon, color: 'text-warning-400' },
  ];

  const featuredMarkets = [
    {
      id: 1,
      title: 'Bitcoin Price in Next Hour',
      description: 'Will BTC price be above $67,000 in the next hour?',
      odds: { yes: 0.65, no: 0.35 },
      volume: '$45,230',
      timeLeft: '47m',
      status: 'active',
      participants: 156,
    },
    {
      id: 2,
      title: 'AI Agent Performance',
      description: 'Will GPT-5 score above 95% on reasoning benchmark?',
      odds: { yes: 0.78, no: 0.22 },
      volume: '$23,450',
      timeLeft: '2h 15m',
      status: 'active',
      participants: 89,
    },
    {
      id: 3,
      title: 'Sports Prediction',
      description: 'Will Team A win the championship match?',
      odds: { yes: 0.52, no: 0.48 },
      volume: '$67,890',
      timeLeft: '5h 30m',
      status: 'active',
      participants: 234,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 bg-primary-500/20 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-8"
            >
              <Icon icon={sparklesIcon} className="w-4 h-4 mr-2" />
              Powered by Linera Microchains
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">AI-Powered</span>
              <br />
              <span className="text-white">Intelligence Markets</span>
            </h1>
            
            <p className="text-xl text-dark-300 mb-8 max-w-3xl mx-auto">
              Trade predictions with AI agents in real-time. Experience Web2-speed Web3 markets 
              with instant settlement and autonomous intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/markets" className="btn-primary inline-flex items-center">
                  <Icon icon={chartBarIcon} className="w-5 h-5 mr-2" />
                  Explore Markets
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/ai-arena" className="btn-secondary inline-flex items-center">
                  <Icon icon={cpuChipIcon} className="w-5 h-5 mr-2" />
                  AI Arena
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-dark-700/50 mb-4 ${stat.color}`}>
                  <Icon icon={stat.icon} className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-dark-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Markets */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Markets</h2>
            <p className="text-dark-300 text-lg">
              Join the most active prediction markets powered by AI intelligence
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredMarkets.map((market, index) => (
              <motion.div
                key={market.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="market-card"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="status-active px-3 py-1 rounded-full text-xs font-medium">
                    {market.status.toUpperCase()}
                  </span>
                  <div className="flex items-center text-dark-400 text-sm">
                    <Icon icon={clockIcon} className="w-4 h-4 mr-1" />
                    {market.timeLeft}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">{market.title}</h3>
                <p className="text-dark-300 text-sm mb-4">{market.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-success-500/10 border border-success-500/20 rounded-lg p-3">
                    <div className="text-success-400 text-sm font-medium">YES</div>
                    <div className="text-white text-lg font-bold">{(market.odds.yes * 100).toFixed(0)}%</div>
                  </div>
                  <div className="bg-danger-500/10 border border-danger-500/20 rounded-lg p-3">
                    <div className="text-danger-400 text-sm font-medium">NO</div>
                    <div className="text-white text-lg font-bold">{(market.odds.no * 100).toFixed(0)}%</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-dark-400">
                  <div className="flex items-center">
                    <Icon icon={usersIcon} className="w-4 h-4 mr-1" />
                    {market.participants} participants
                  </div>
                  <div className="font-medium text-primary-400">{market.volume}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/markets" className="btn-outline">
              View All Markets
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500/10 to-secondary-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Trade with AI?
            </h2>
            <p className="text-dark-300 text-lg mb-8">
              Join thousands of traders and AI agents in the future of prediction markets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="btn-primary">
                  Get Started Now
                </button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="btn-outline">
                  Learn More
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;