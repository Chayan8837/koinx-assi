'use client'

import { useRef } from 'react'
import { Line } from 'react-chartjs-2'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
)

// Sample data for the sparkline charts
const generateSparklineData = (isPositive) => ({
  labels: Array.from({ length: 24 }, (_, i) => i.toString()),
  datasets: [{
    data: Array.from({ length: 24 }, () => Math.random() * 100),
    borderColor: isPositive ? '#16A34A' : '#DC2626',
    borderWidth: 1.5,
    fill: false,
    tension: 0.4,
    pointRadius: 0,
  }]
})

const sparklineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
}

export default function CryptoTrends() {
  const youMayLikeRef = useRef(null)
  const trendingCoinsRef = useRef(null)

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const formatPrice = (price) => {
    return price < 1 ? price.toFixed(6) : price.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  const renderCoinCard = (symbol, name, price, change, logo) => (
    <div className="min-w-[250px] bg-white p-4 rounded-lg border">
      <div className="flex items-center gap-2 mb-3">
        <img src={logo} alt={name} className="w-6 h-6" />
        <span className="font-medium">{symbol}</span>
        <span className={`text-sm ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {change >= 0 ? '+' : ''}{change}%
        </span>
      </div>
      <div className="font-bold mb-2">${formatPrice(price)}</div>
      <div className="h-[60px]">
        <Line
          data={generateSparklineData(change >= 0)}
          options={sparklineOptions}
        />
      </div>
    </div>
  )

  return (
    <div className="space-y-6 p-6 bg-white text-black">
      {/* You May Also Like Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">You May Also Like</h2>
        <div className="relative">
          <button
            onClick={() => scroll(youMayLikeRef, 'left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white shadow-lg rounded-full flex items-center justify-center z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div
            ref={youMayLikeRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 justify-center"
          >
            {[
              { symbol: 'BNB', name: 'Binance', price: 319.34, change: 0.52, logo: 'https://cryptologos.cc/logos/bnb-bnb-logo.png' },
              { symbol: 'SOL', name: 'Solana', price: 109.33, change: -2.89, logo: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
              { symbol: 'XRP', name: 'XRP', price: 0.634810, change: 0.76, logo: 'https://cryptologos.cc/logos/xrp-xrp-logo.png' },
              { symbol: 'ADA', name: 'Cardano', price: 0.614869, change: -1.57, logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png' },
              { symbol: 'AVAX', name: 'Avalanche', price: 41.05, change: -3.78, logo: 'https://cryptologos.cc/logos/avalanche-avax-logo.png' },
            ].map((coin) => (
              <div key={coin.symbol}>
                {renderCoinCard(coin.symbol, coin.name, coin.price, coin.change, coin.logo)}
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(youMayLikeRef, 'right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-white shadow-lg rounded-full flex items-center justify-center z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Trending Coins Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Trending Coins</h2>
        <div className="relative">
          <button
            onClick={() => scroll(trendingCoinsRef, 'left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white shadow-lg rounded-full flex items-center justify-center z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div
            ref={trendingCoinsRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 justify-center"
          >
            {[
              { symbol: 'BTC', name: 'Bitcoin', price: 45332.83, change: 0.10, logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
              { symbol: 'ETH', name: 'Ethereum', price: 2375.15, change: -0.21, logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
              { symbol: 'stETH', name: 'Lido Staked ETH', price: 2371.72, change: -0.34, logo: 'https://cryptologos.cc/logos/lido-dao-ldo-logo.png' },
              { symbol: 'UNI', name: 'Uniswap', price: 7.3192, change: -4.02, logo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png' },
              { symbol: 'CFG', name: 'Centrifuge', price: 0.773600, change: -1.76, logo: 'https://cryptologos.cc/logos/centrifuge-cfg-logo.png' },
            ].map((coin) => (
              <div key={coin.symbol}>
                {renderCoinCard(coin.symbol, coin.name, coin.price, coin.change, coin.logo)}
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(trendingCoinsRef, 'right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-white shadow-lg rounded-full flex items-center justify-center z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

