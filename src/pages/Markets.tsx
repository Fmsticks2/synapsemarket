import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import searchIcon from '@iconify/icons-heroicons/magnifying-glass';
import filterIcon from '@iconify/icons-heroicons/funnel';
import clockIcon from '@iconify/icons-heroicons/clock';
import usersIcon from '@iconify/icons-heroicons/users';
import trendingUpIcon from '@iconify/icons-heroicons/trending-up';

const Markets: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('volume');

  const categories = [
    { id: 'all', label: 'All Markets', count: 247 },
    { id: 'crypto', label: 'Cryptocurrency', count: 89 },
    { id: 'ai', label: 'AI & Technology', count: 67 },
    { id: 'sports', label: 'Sports', count: 45 },
    { id: 'politics', label: 'Politics', count: 23 },
    { id: 'weather', label: 'Weather', count: 23 },
  ];

  const markets = [
    {
      id: 1,
      title: 'Bitcoin Price Prediction',
      description: 'Will Bitcoin reach $70,000 by end of week?',
      category: 'crypto',
      odds: { yes: 0.67, no: 0.33 },
      volume: '$125,430',
      participants: 342,
      timeLeft: '4d 12h',
      status: 'active',
      aiAgents: 23,
      trend: 'up',
    },
    {
      id: 2,
      title: 'AI Model Performance',
      description: 'Will the new language model exceed GPT-4 benchmarks?',
      category: 'ai',
      odds: { yes: 0.82, no: 0.18 },
      volume: '$89,250',
      participants: 156,
      timeLeft: '2d 8h',
      status: 'active',
      aiAgents: 45,
      trend: 'up',
    },
    {
      id: 3,
      title: 'Championship Final',
      description: 'Team Alpha vs Team Beta - Who will win?',
      category: 'sports',
      odds: { yes: 0.55, no: 0.45 },
      volume: '$234,670',
      participants: 567,
      timeLeft: '1d 3h',
      status: 'active',
      aiAgents: 12,
      trend: 'down',
    },
    {
      id: 4,
      title: 'Weather Forecast',
      description: 'Will it rain in NYC tomorrow?',
      category: 'weather',
      odds: { yes: 0.73, no: 0.27 },
      volume: '$45,890',
      participants: 89,
      timeLeft: '18h',
      status: 'active',
      aiAgents: 8,
      trend: 'stable',
    },
    {
      id: 5,
      title: 'Election Outcome',
      description: 'Candidate A to win the upcoming election?',
      category: 'politics',
      odds: { yes: 0.61, no: 0.39 },
      volume: '$567,230',
      participants: 1234,
      timeLeft: '7d 15h',
      status: 'active',
      aiAgents: 67,
      trend: 'up',
    },
    {
      id: 6,
      title: 'Ethereum Gas Fees',
      description: 'Will ETH gas fees drop below 20 gwei today?',
      category: 'crypto',
      odds: { yes: 0.44, no: 0.56 },
      volume: '$78,450',
      participants: 234,
      timeLeft: '8h 45m',
      status: 'active',
      aiAgents: 19,
      trend: 'down',
    },
  ];

  const filteredMarkets = markets.filter(market => {
    const matchesSearch = market.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         market.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || market.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedMarkets = [...filteredMarkets].sort((a, b) => {
    switch (sortBy) {
      case 'volume':
        return parseFloat(b.volume.replace(/[$,]/g, '')) - parseFloat(a.volume.replace(/[$,]/g, ''));
      case 'participants':
        return b.participants - a.participants;
      case 'timeLeft':
        return a.timeLeft.localeCompare(b.timeLeft);
      default:
        return 0;
    }
  });

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <Icon icon="heroicons:arrow-trending-up" className="w-4 h-4 text-success-400" />;
      case 'down':
        return <Icon icon="heroicons:arrow-trending-down" className="w-4 h-4 text-danger-400" />;
      default:
        return <Icon icon="heroicons:minus" className="w-4 h-4 text-dark-400" />;
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Prediction Markets</h1>
          <p className="text-dark-300 text-lg">
            Discover and trade on real-time prediction markets powered by AI intelligence
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="relative flex-1">
              <Icon icon={searchIcon} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-400" />
              <input
                type="text"
                placeholder="Search markets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon icon={filterIcon} className="w-5 h-5 text-dark-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-white focus:border-primary-500 focus:outline-none"
                >
                  <option value="volume">Sort by Volume</option>
                  <option value="participants">Sort by Participants</option>
                  <option value="timeLeft">Sort by Time Left</option>
                </select>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Markets Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {sortedMarkets.map((market, index) => (
            <motion.div
              key={market.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="market-card"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="status-active px-3 py-1 rounded-full text-xs font-medium">
                    {market.status.toUpperCase()}
                  </span>
                  <span className="px-2 py-1 bg-dark-700 text-dark-300 rounded text-xs">
                    {market.category.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  {getTrendIcon(market.trend)}
                  <div className="flex items-center text-dark-400 text-sm">
                    <Icon icon={clockIcon} className="w-4 h-4 mr-1" />
                    {market.timeLeft}
                  </div>
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

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4 text-dark-400">
                  <div className="flex items-center">
                    <Icon icon={usersIcon} className="w-4 h-4 mr-1" />
                    {market.participants}
                  </div>
                  <div className="flex items-center">
                    <Icon icon="heroicons:cpu-chip" className="w-4 h-4 mr-1" />
                    {market.aiAgents} AI
                  </div>
                </div>
                <div className="flex items-center text-primary-400 font-medium">
                  <Icon icon={trendingUpIcon} className="w-4 h-4 mr-1" />
                  {market.volume}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-dark-700">
                <div className="flex space-x-2">
                  <button className="btn-primary flex-1 text-sm py-2">
                    Trade Now
                  </button>
                  <button className="btn-outline flex-1 text-sm py-2">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="btn-outline">
            Load More Markets
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Markets;