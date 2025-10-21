import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useParams } from 'react-router-dom';
import trendingUpIcon from '@iconify/icons-heroicons/trending-up';
import trendingDownIcon from '@iconify/icons-heroicons/trending-down';
import clockIcon from '@iconify/icons-heroicons/clock';
import usersIcon from '@iconify/icons-heroicons/users';
import chartBarIcon from '@iconify/icons-heroicons/chart-bar';
import fireIcon from '@iconify/icons-heroicons/fire';
import eyeIcon from '@iconify/icons-heroicons/eye';
import shareIcon from '@iconify/icons-heroicons/share';
import heartIcon from '@iconify/icons-heroicons/heart';
import chatBubbleIcon from '@iconify/icons-heroicons/chat-bubble-left-ellipsis';

const MarketDetails: React.FC = () => {
  const { id } = useParams();
  const [selectedOutcome, setSelectedOutcome] = useState<'YES' | 'NO' | null>(null);
  const [betAmount, setBetAmount] = useState('');
  const [timeLeft, setTimeLeft] = useState({ days: 5, hours: 14, minutes: 32, seconds: 18 });

  // Mock market data - in real app, this would be fetched based on the ID
  const market = {
    id: id || '1',
    title: 'Will Bitcoin reach $100,000 by end of 2024?',
    description: 'This market resolves to YES if Bitcoin (BTC) reaches or exceeds $100,000 USD on any major exchange (Coinbase, Binance, Kraken) before January 1, 2025, 00:00 UTC.',
    category: 'Cryptocurrency',
    creator: 'CryptoAnalyst',
    createdAt: '2024-01-15',
    endDate: '2024-12-31',
    totalVolume: '$2,456,789',
    participants: 1247,
    yesPrice: 0.67,
    noPrice: 0.33,
    yesShares: 1634567,
    noShares: 822345,
    status: 'active',
    tags: ['Bitcoin', 'Cryptocurrency', 'Price Prediction', 'Long-term'],
    relatedMarkets: [
      { id: '2', title: 'Will Ethereum reach $10,000 by 2024?', yesPrice: 0.45 },
      { id: '3', title: 'Will crypto market cap exceed $5T?', yesPrice: 0.52 },
      { id: '4', title: 'Will Bitcoin ETF be approved in 2024?', yesPrice: 0.78 },
    ],
    priceHistory: [
      { time: '00:00', yes: 0.65, no: 0.35 },
      { time: '04:00', yes: 0.66, no: 0.34 },
      { time: '08:00', yes: 0.68, no: 0.32 },
      { time: '12:00', yes: 0.67, no: 0.33 },
      { time: '16:00', yes: 0.69, no: 0.31 },
      { time: '20:00', yes: 0.67, no: 0.33 },
    ],
    comments: [
      {
        id: 1,
        user: 'BitcoinMaxi',
        avatar: '₿',
        comment: 'With the halving coming up and institutional adoption, $100k is very likely!',
        time: '2h ago',
        likes: 23,
        position: 'YES'
      },
      {
        id: 2,
        user: 'SkepticalTrader',
        avatar: '📉',
        comment: 'Market cycles suggest we might see a correction before any major rally.',
        time: '4h ago',
        likes: 15,
        position: 'NO'
      },
      {
        id: 3,
        user: 'CryptoWhale',
        avatar: '🐋',
        comment: 'Technical analysis shows strong resistance at $80k. Breaking that is key.',
        time: '6h ago',
        likes: 31,
        position: 'YES'
      },
    ]
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const calculatePotentialPayout = () => {
    if (!betAmount || !selectedOutcome) return 0;
    const amount = parseFloat(betAmount);
    const price = selectedOutcome === 'YES' ? market.yesPrice : market.noPrice;
    return amount / price;
  };

  const calculatePotentialProfit = () => {
    if (!betAmount) return 0;
    return calculatePotentialPayout() - parseFloat(betAmount);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Market Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium">
                      {market.category}
                    </span>
                    <span className="px-3 py-1 bg-success-500/20 text-success-400 rounded-full text-sm font-medium">
                      ACTIVE
                    </span>
                  </div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    {market.title}
                  </h1>
                  <p className="text-dark-300 mb-4">{market.description}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-dark-400">
                    <span>Created by <span className="text-white font-medium">{market.creator}</span></span>
                    <span>•</span>
                    <span>{market.createdAt}</span>
                    <span>•</span>
                    <span>Ends {market.endDate}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <button className="p-2 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors">
                    <Icon icon={shareIcon} className="w-5 h-5 text-dark-300" />
                  </button>
                  <button className="p-2 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors">
                    <Icon icon={heartIcon} className="w-5 h-5 text-dark-300" />
                  </button>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {market.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-dark-700 text-dark-300 rounded text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Market Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <div className="card text-center">
                <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Icon icon={chartBarIcon} className="w-5 h-5 text-primary-400" />
                </div>
                <div className="text-lg font-bold text-white">{market.totalVolume}</div>
                <div className="text-dark-400 text-sm">Total Volume</div>
              </div>
              
              <div className="card text-center">
                <div className="w-10 h-10 bg-secondary-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Icon icon={usersIcon} className="w-5 h-5 text-secondary-400" />
                </div>
                <div className="text-lg font-bold text-white">{market.participants}</div>
                <div className="text-dark-400 text-sm">Participants</div>
              </div>
              
              <div className="card text-center">
                <div className="w-10 h-10 bg-success-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Icon icon={trendingUpIcon} className="w-5 h-5 text-success-400" />
                </div>
                <div className="text-lg font-bold text-success-400">{(market.yesPrice * 100).toFixed(0)}%</div>
                <div className="text-dark-400 text-sm">YES Price</div>
              </div>
              
              <div className="card text-center">
                <div className="w-10 h-10 bg-danger-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Icon icon={trendingDownIcon} className="w-5 h-5 text-danger-400" />
                </div>
                <div className="text-lg font-bold text-danger-400">{(market.noPrice * 100).toFixed(0)}%</div>
                <div className="text-dark-400 text-sm">NO Price</div>
              </div>
            </motion.div>

            {/* Price Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Price History (24h)</h3>
              <div className="h-64 bg-dark-800 rounded-lg p-4 flex items-end justify-between">
                {market.priceHistory.map((point, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2">
                    <div className="flex flex-col space-y-1">
                      <div
                        className="w-8 bg-success-500 rounded-t"
                        style={{ height: `${point.yes * 200}px` }}
                      />
                      <div
                        className="w-8 bg-danger-500 rounded-b"
                        style={{ height: `${point.no * 200}px` }}
                      />
                    </div>
                    <span className="text-xs text-dark-400">{point.time}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center space-x-6 mt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success-500 rounded"></div>
                  <span className="text-sm text-dark-300">YES</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-danger-500 rounded"></div>
                  <span className="text-sm text-dark-300">NO</span>
                </div>
              </div>
            </motion.div>

            {/* Comments Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <Icon icon={chatBubbleIcon} className="w-5 h-5 mr-2" />
                  Discussion ({market.comments.length})
                </h3>
              </div>
              
              <div className="space-y-4">
                {market.comments.map((comment) => (
                  <div key={comment.id} className="flex space-x-3">
                    <div className="text-2xl">{comment.avatar}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-white">{comment.user}</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          comment.position === 'YES' 
                            ? 'bg-success-500/20 text-success-400' 
                            : 'bg-danger-500/20 text-danger-400'
                        }`}>
                          {comment.position}
                        </span>
                        <span className="text-dark-400 text-sm">{comment.time}</span>
                      </div>
                      <p className="text-dark-300 mb-2">{comment.comment}</p>
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 text-dark-400 hover:text-white transition-colors">
                          <Icon icon={heartIcon} className="w-4 h-4" />
                          <span className="text-sm">{comment.likes}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Trading Sidebar */}
          <div className="space-y-6">
            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="card text-center"
            >
              <div className="w-12 h-12 bg-warning-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon icon={clockIcon} className="w-6 h-6 text-warning-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Time Remaining</h3>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">{timeLeft.days}</div>
                  <div className="text-xs text-dark-400">Days</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{timeLeft.hours}</div>
                  <div className="text-xs text-dark-400">Hours</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{timeLeft.minutes}</div>
                  <div className="text-xs text-dark-400">Min</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{timeLeft.seconds}</div>
                  <div className="text-xs text-dark-400">Sec</div>
                </div>
              </div>
            </motion.div>

            {/* Trading Interface */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Place Your Bet</h3>
              
              {/* Outcome Selection */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button
                  onClick={() => setSelectedOutcome('YES')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedOutcome === 'YES'
                      ? 'border-success-500 bg-success-500/20'
                      : 'border-dark-700 bg-dark-800 hover:border-success-500/50'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success-400">YES</div>
                    <div className="text-sm text-dark-300">${(market.yesPrice).toFixed(2)}</div>
                    <div className="text-xs text-dark-400">{(market.yesPrice * 100).toFixed(0)}%</div>
                  </div>
                </button>
                
                <button
                  onClick={() => setSelectedOutcome('NO')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedOutcome === 'NO'
                      ? 'border-danger-500 bg-danger-500/20'
                      : 'border-dark-700 bg-dark-800 hover:border-danger-500/50'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-danger-400">NO</div>
                    <div className="text-sm text-dark-300">${(market.noPrice).toFixed(2)}</div>
                    <div className="text-xs text-dark-400">{(market.noPrice * 100).toFixed(0)}%</div>
                  </div>
                </button>
              </div>

              {/* Bet Amount */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-dark-300 mb-2">
                  Bet Amount (USD)
                </label>
                <input
                  type="number"
                  value={betAmount}
                  onChange={(e) => setBetAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none"
                />
              </div>

              {/* Quick Amount Buttons */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[10, 25, 50, 100].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setBetAmount(amount.toString())}
                    className="py-2 bg-dark-700 hover:bg-dark-600 text-white rounded text-sm transition-colors"
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              {/* Payout Calculation */}
              {betAmount && selectedOutcome && (
                <div className="bg-dark-800 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-dark-300">Potential Payout:</span>
                    <span className="text-white font-semibold">
                      ${calculatePotentialPayout().toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-dark-300">Potential Profit:</span>
                    <span className={`font-semibold ${
                      calculatePotentialProfit() > 0 ? 'text-success-400' : 'text-danger-400'
                    }`}>
                      ${calculatePotentialProfit().toFixed(2)}
                    </span>
                  </div>
                </div>
              )}

              {/* Place Bet Button */}
              <button
                disabled={!selectedOutcome || !betAmount}
                className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Place Bet
              </button>
            </motion.div>

            {/* Related Markets */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Related Markets</h3>
              <div className="space-y-3">
                {market.relatedMarkets.map((relatedMarket) => (
                  <div
                    key={relatedMarket.id}
                    className="p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors cursor-pointer"
                  >
                    <div className="text-sm text-white mb-1 line-clamp-2">
                      {relatedMarket.title}
                    </div>
                    <div className="text-xs text-success-400">
                      YES: {(relatedMarket.yesPrice * 100).toFixed(0)}%
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketDetails;