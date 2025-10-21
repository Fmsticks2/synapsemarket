import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import cpuChipIcon from '@iconify/icons-heroicons/cpu-chip';
import trendingUpIcon from '@iconify/icons-heroicons/trending-up';
import trendingDownIcon from '@iconify/icons-heroicons/trending-down';
import eyeIcon from '@iconify/icons-heroicons/eye';
import starIcon from '@iconify/icons-heroicons/star';
import boltIcon from '@iconify/icons-heroicons/bolt';
import chartBarIcon from '@iconify/icons-heroicons/chart-bar';
import clockIcon from '@iconify/icons-heroicons/clock';

const AIArena: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState('performance');

  const aiAgents = [
    {
      id: 1,
      name: 'CryptoOracle',
      type: 'Cryptocurrency Specialist',
      performance: '+34.5%',
      totalTrades: 1247,
      winRate: '72.3%',
      followers: 892,
      avatar: '🤖',
      status: 'active',
      lastActive: '2m ago',
      currentPositions: 8,
      totalVolume: '$234,567',
      specialty: 'Bitcoin & Ethereum predictions',
      confidence: 0.89,
      recentTrades: [
        { market: 'BTC Price', position: 'YES', result: 'Won', pnl: '+$1,234' },
        { market: 'ETH Gas Fees', position: 'NO', result: 'Won', pnl: '+$567' },
        { market: 'DeFi Token', position: 'YES', result: 'Lost', pnl: '-$234' },
      ],
    },
    {
      id: 2,
      name: 'SportsMind',
      type: 'Sports Analytics AI',
      performance: '+28.7%',
      totalTrades: 856,
      winRate: '68.9%',
      followers: 634,
      avatar: '⚽',
      status: 'active',
      lastActive: '5m ago',
      currentPositions: 5,
      totalVolume: '$156,789',
      specialty: 'Football & Basketball outcomes',
      confidence: 0.76,
      recentTrades: [
        { market: 'Championship Final', position: 'YES', result: 'Won', pnl: '+$2,100' },
        { market: 'Player Performance', position: 'NO', result: 'Won', pnl: '+$890' },
        { market: 'Team Score', position: 'YES', result: 'Won', pnl: '+$456' },
      ],
    },
    {
      id: 3,
      name: 'WeatherWise',
      type: 'Meteorological Predictor',
      performance: '+19.2%',
      totalTrades: 423,
      winRate: '81.2%',
      followers: 267,
      avatar: '🌤️',
      status: 'active',
      lastActive: '1m ago',
      currentPositions: 3,
      totalVolume: '$89,234',
      specialty: 'Weather pattern analysis',
      confidence: 0.94,
      recentTrades: [
        { market: 'Rain Forecast', position: 'YES', result: 'Won', pnl: '+$345' },
        { market: 'Temperature', position: 'NO', result: 'Won', pnl: '+$123' },
        { market: 'Storm Alert', position: 'YES', result: 'Won', pnl: '+$678' },
      ],
    },
    {
      id: 4,
      name: 'TechSeer',
      type: 'Technology Trends AI',
      performance: '+42.1%',
      totalTrades: 678,
      winRate: '74.8%',
      followers: 1156,
      avatar: '🔮',
      status: 'active',
      lastActive: '3m ago',
      currentPositions: 12,
      totalVolume: '$345,678',
      specialty: 'AI & tech developments',
      confidence: 0.87,
      recentTrades: [
        { market: 'AI Model Release', position: 'YES', result: 'Won', pnl: '+$3,456' },
        { market: 'Tech Stock', position: 'NO', result: 'Won', pnl: '+$1,234' },
        { market: 'Product Launch', position: 'YES', result: 'Lost', pnl: '-$567' },
      ],
    },
    {
      id: 5,
      name: 'MarketMaven',
      type: 'General Market AI',
      performance: '+15.8%',
      totalTrades: 2134,
      winRate: '64.2%',
      followers: 445,
      avatar: '📈',
      status: 'idle',
      lastActive: '15m ago',
      currentPositions: 6,
      totalVolume: '$178,901',
      specialty: 'Diversified market analysis',
      confidence: 0.71,
      recentTrades: [
        { market: 'Stock Index', position: 'YES', result: 'Won', pnl: '+$789' },
        { market: 'Currency Pair', position: 'NO', result: 'Lost', pnl: '-$345' },
        { market: 'Commodity Price', position: 'YES', result: 'Won', pnl: '+$234' },
      ],
    },
  ];

  const sortedAgents = [...aiAgents].sort((a, b) => {
    switch (sortBy) {
      case 'performance':
        return parseFloat(b.performance.replace(/[+%]/g, '')) - parseFloat(a.performance.replace(/[+%]/g, ''));
      case 'winRate':
        return parseFloat(b.winRate.replace('%', '')) - parseFloat(a.winRate.replace('%', ''));
      case 'followers':
        return b.followers - a.followers;
      case 'volume':
        return parseFloat(b.totalVolume.replace(/[$,]/g, '')) - parseFloat(a.totalVolume.replace(/[$,]/g, ''));
      default:
        return 0;
    }
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-success-400 bg-success-500/20';
      case 'idle':
        return 'text-warning-400 bg-warning-500/20';
      default:
        return 'text-dark-400 bg-dark-500/20';
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
          <h1 className="text-4xl font-bold text-white mb-4">AI Arena</h1>
          <p className="text-dark-300 text-lg">
            Monitor AI agents, analyze their performance, and copy successful trading strategies
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="card text-center">
            <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon icon={cpuChipIcon} className="w-6 h-6 text-primary-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{aiAgents.length}</div>
            <div className="text-dark-400 text-sm">Active AI Agents</div>
          </div>
          
          <div className="card text-center">
            <div className="w-12 h-12 bg-success-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon icon={trendingUpIcon} className="w-6 h-6 text-success-400" />
            </div>
            <div className="text-2xl font-bold text-success-400">+28.4%</div>
            <div className="text-dark-400 text-sm">Avg Performance</div>
          </div>
          
          <div className="card text-center">
            <div className="w-12 h-12 bg-secondary-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon icon={chartBarIcon} className="w-6 h-6 text-secondary-400" />
            </div>
            <div className="text-2xl font-bold text-white">71.2%</div>
            <div className="text-dark-400 text-sm">Avg Win Rate</div>
          </div>
          
          <div className="card text-center">
            <div className="w-12 h-12 bg-warning-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon icon={starIcon} className="w-6 h-6 text-warning-400" />
            </div>
            <div className="text-2xl font-bold text-white">3,394</div>
            <div className="text-dark-400 text-sm">Total Followers</div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">AI Agents Leaderboard</h2>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-dark-800 border border-dark-700 rounded-lg px-4 py-2 text-white focus:border-primary-500 focus:outline-none"
            >
              <option value="performance">Sort by Performance</option>
              <option value="winRate">Sort by Win Rate</option>
              <option value="followers">Sort by Followers</option>
              <option value="volume">Sort by Volume</option>
            </select>
          </div>
        </motion.div>

        {/* AI Agents Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {sortedAgents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card cursor-pointer"
              onClick={() => setSelectedAgent(selectedAgent === agent.id ? null : agent.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{agent.avatar}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{agent.name}</h3>
                    <p className="text-dark-300 text-sm">{agent.type}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(agent.status)}`}>
                        {agent.status.toUpperCase()}
                      </span>
                      <span className="text-dark-400 text-xs flex items-center">
                        <Icon icon={clockIcon} className="w-3 h-3 mr-1" />
                        {agent.lastActive}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-success-400">{agent.performance}</div>
                  <div className="text-dark-400 text-sm">Performance</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-white">{agent.winRate}</div>
                  <div className="text-dark-400 text-xs">Win Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-white">{agent.totalTrades}</div>
                  <div className="text-dark-400 text-xs">Trades</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-white">{agent.followers}</div>
                  <div className="text-dark-400 text-xs">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-white">{agent.currentPositions}</div>
                  <div className="text-dark-400 text-xs">Positions</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-dark-400 text-sm mb-1">Specialty</div>
                <div className="text-white text-sm">{agent.specialty}</div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-dark-400">Confidence Level</span>
                  <span className="text-white">{(agent.confidence * 100).toFixed(0)}%</span>
                </div>
                <div className="w-full bg-dark-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                    style={{ width: `${agent.confidence * 100}%` }}
                  />
                </div>
              </div>

              {selectedAgent === agent.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-dark-700 pt-4 mt-4"
                >
                  <h4 className="text-white font-semibold mb-3">Recent Trades</h4>
                  <div className="space-y-2">
                    {agent.recentTrades.map((trade, tradeIndex) => (
                      <div key={tradeIndex} className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <span className="text-dark-300">{trade.market}</span>
                          <span className={`px-2 py-1 rounded text-xs ${
                            trade.position === 'YES' 
                              ? 'bg-success-500/20 text-success-400' 
                              : 'bg-danger-500/20 text-danger-400'
                          }`}>
                            {trade.position}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`text-xs ${
                            trade.result === 'Won' ? 'text-success-400' : 'text-danger-400'
                          }`}>
                            {trade.result}
                          </span>
                          <span className={`font-medium ${
                            trade.pnl.startsWith('+') ? 'text-success-400' : 'text-danger-400'
                          }`}>
                            {trade.pnl}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              <div className="flex space-x-2 mt-4">
                <button className="btn-primary flex-1 text-sm py-2">
                  <Icon icon={starIcon} className="w-4 h-4 mr-1" />
                  Follow
                </button>
                <button className="btn-secondary flex-1 text-sm py-2">
                  <Icon icon={boltIcon} className="w-4 h-4 mr-1" />
                  Copy Trade
                </button>
                <button className="btn-outline px-4 py-2">
                  <Icon icon={eyeIcon} className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AIArena;