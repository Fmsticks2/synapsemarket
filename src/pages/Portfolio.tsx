import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import walletIcon from '@iconify/icons-heroicons/wallet';
import trendingUpIcon from '@iconify/icons-heroicons/trending-up';
import trendingDownIcon from '@iconify/icons-heroicons/trending-down';
import clockIcon from '@iconify/icons-heroicons/clock';
import chartBarIcon from '@iconify/icons-heroicons/chart-bar';
import eyeIcon from '@iconify/icons-heroicons/eye';

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('positions');

  const portfolioStats = {
    totalValue: '$12,450.67',
    totalPnL: '+$2,340.12',
    pnlPercentage: '+23.1%',
    activePositions: 8,
    totalTrades: 156,
    winRate: '68.5%',
  };

  const activePositions = [
    {
      id: 1,
      market: 'Bitcoin Price Prediction',
      position: 'YES',
      amount: '$500.00',
      odds: 0.67,
      currentOdds: 0.72,
      pnl: '+$45.50',
      pnlPercentage: '+9.1%',
      status: 'winning',
      timeLeft: '2d 14h',
    },
    {
      id: 2,
      market: 'AI Model Performance',
      position: 'NO',
      amount: '$250.00',
      odds: 0.18,
      currentOdds: 0.15,
      pnl: '+$12.30',
      pnlPercentage: '+4.9%',
      status: 'winning',
      timeLeft: '1d 8h',
    },
    {
      id: 3,
      market: 'Championship Final',
      position: 'YES',
      amount: '$750.00',
      odds: 0.55,
      currentOdds: 0.48,
      pnl: '-$67.20',
      pnlPercentage: '-9.0%',
      status: 'losing',
      timeLeft: '5h 30m',
    },
    {
      id: 4,
      market: 'Weather Forecast',
      position: 'YES',
      amount: '$100.00',
      odds: 0.73,
      currentOdds: 0.78,
      pnl: '+$8.90',
      pnlPercentage: '+8.9%',
      status: 'winning',
      timeLeft: '12h',
    },
  ];

  const tradeHistory = [
    {
      id: 1,
      market: 'Ethereum Price Movement',
      position: 'YES',
      amount: '$300.00',
      result: 'Won',
      pnl: '+$180.00',
      date: '2024-01-15',
      odds: 0.62,
    },
    {
      id: 2,
      market: 'Tech Stock Prediction',
      position: 'NO',
      amount: '$150.00',
      result: 'Lost',
      pnl: '-$150.00',
      date: '2024-01-14',
      odds: 0.35,
    },
    {
      id: 3,
      market: 'Sports Match Outcome',
      position: 'YES',
      amount: '$200.00',
      result: 'Won',
      pnl: '+$120.00',
      date: '2024-01-13',
      odds: 0.58,
    },
    {
      id: 4,
      market: 'Political Event',
      position: 'NO',
      amount: '$400.00',
      result: 'Won',
      pnl: '+$320.00',
      date: '2024-01-12',
      odds: 0.25,
    },
  ];

  const tabs = [
    { id: 'positions', label: 'Active Positions', count: activePositions.length },
    { id: 'history', label: 'Trade History', count: tradeHistory.length },
    { id: 'analytics', label: 'Analytics', count: null },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">My Portfolio</h1>
          <p className="text-dark-300 text-lg">
            Track your positions, analyze performance, and manage your trading portfolio
          </p>
        </motion.div>

        {/* Portfolio Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                <Icon icon={walletIcon} className="w-6 h-6 text-primary-400" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">{portfolioStats.totalValue}</div>
                <div className="text-dark-400 text-sm">Total Portfolio Value</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-success-500/20 rounded-lg flex items-center justify-center">
                <Icon icon={trendingUpIcon} className="w-6 h-6 text-success-400" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-success-400">{portfolioStats.totalPnL}</div>
                <div className="text-dark-400 text-sm">Total P&L ({portfolioStats.pnlPercentage})</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-secondary-500/20 rounded-lg flex items-center justify-center">
                <Icon icon={chartBarIcon} className="w-6 h-6 text-secondary-400" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">{portfolioStats.winRate}</div>
                <div className="text-dark-400 text-sm">Win Rate ({portfolioStats.totalTrades} trades)</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex space-x-1 bg-dark-800 p-1 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary-500 text-white'
                    : 'text-dark-300 hover:text-white hover:bg-dark-700'
                }`}
              >
                {tab.label}
                {tab.count && (
                  <span className="ml-2 px-2 py-1 bg-dark-600 rounded-full text-xs">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'positions' && (
            <div className="space-y-4">
              {activePositions.map((position, index) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">{position.market}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          position.position === 'YES' 
                            ? 'bg-success-500/20 text-success-400' 
                            : 'bg-danger-500/20 text-danger-400'
                        }`}>
                          {position.position}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          position.status === 'winning'
                            ? 'bg-success-500/20 text-success-400'
                            : 'bg-danger-500/20 text-danger-400'
                        }`}>
                          {position.status === 'winning' ? 'Winning' : 'Losing'}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="text-dark-400">Amount</div>
                          <div className="text-white font-medium">{position.amount}</div>
                        </div>
                        <div>
                          <div className="text-dark-400">Entry Odds</div>
                          <div className="text-white font-medium">{(position.odds * 100).toFixed(0)}%</div>
                        </div>
                        <div>
                          <div className="text-dark-400">Current Odds</div>
                          <div className="text-white font-medium">{(position.currentOdds * 100).toFixed(0)}%</div>
                        </div>
                        <div>
                          <div className="text-dark-400">Time Left</div>
                          <div className="flex items-center text-white font-medium">
                            <Icon icon={clockIcon} className="w-4 h-4 mr-1" />
                            {position.timeLeft}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                      <div className="text-right">
                        <div className={`text-lg font-bold ${
                          position.status === 'winning' ? 'text-success-400' : 'text-danger-400'
                        }`}>
                          {position.pnl}
                        </div>
                        <div className="text-dark-400 text-sm">{position.pnlPercentage}</div>
                      </div>
                      <button className="btn-outline text-sm px-4 py-2">
                        <Icon icon={eyeIcon} className="w-4 h-4 mr-1" />
                        View
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-4">
              {tradeHistory.map((trade, index) => (
                <motion.div
                  key={trade.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">{trade.market}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          trade.position === 'YES' 
                            ? 'bg-success-500/20 text-success-400' 
                            : 'bg-danger-500/20 text-danger-400'
                        }`}>
                          {trade.position}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          trade.result === 'Won'
                            ? 'bg-success-500/20 text-success-400'
                            : 'bg-danger-500/20 text-danger-400'
                        }`}>
                          {trade.result}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-dark-400">Amount</div>
                          <div className="text-white font-medium">{trade.amount}</div>
                        </div>
                        <div>
                          <div className="text-dark-400">Odds</div>
                          <div className="text-white font-medium">{(trade.odds * 100).toFixed(0)}%</div>
                        </div>
                        <div>
                          <div className="text-dark-400">Date</div>
                          <div className="text-white font-medium">{trade.date}</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right mt-4 lg:mt-0">
                      <div className={`text-lg font-bold ${
                        trade.result === 'Won' ? 'text-success-400' : 'text-danger-400'
                      }`}>
                        {trade.pnl}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="card text-center py-12">
              <Icon icon={chartBarIcon} className="w-16 h-16 text-dark-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Analytics Coming Soon</h3>
              <p className="text-dark-300">
                Detailed performance analytics and insights will be available soon.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;