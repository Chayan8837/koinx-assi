export default function Add() {
    return (
      <div className="max-w-md mx-auto px-4 space-y-8">
        {/* Get Started Card */}
        <div className="bg-[#0052FE] text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Get Started with KoinX
            <br />
            for FREE
          </h2>
          <p className="text-white/90 mb-8">
            With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
          </p>
          <div className="mb-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-01-12%2019-57-08-H7a8UJE7N1FTGCR6LHMtC1QUq22FtG.png"
              alt="KoinX Features Illustration"
              className="w-40 h-40 mx-auto"
            />
          </div>
          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 hover:bg-gray-100 transition-colors">
            Get Started for FREE
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform translate-y-[1px]"
            >
              <path
                d="M4.16666 10H15.8333"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.8333 15L15.8333 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.8333 5L15.8333 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
  
        {/* Trending Coins */}
        <div className="bg-white rounded-lg p-6 shadow-sm text-black">
          <h3 className="text-xl font-semibold mb-4">Trending Coins (24h)</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                  alt="Ethereum"
                  className="w-6 h-6"
                />
                <span className="font-medium">Ethereum(ETH)</span>
              </div>
              <div className="bg-green-50 text-green-500 px-2 py-1 rounded flex items-center gap-1">
                <span className="text-xs">▲</span>
                <span>8.21%</span>
              </div>
            </div>
  
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
                  alt="Bitcoin"
                  className="w-6 h-6"
                />
                <span className="font-medium">Bitcoin(BTC)</span>
              </div>
              <div className="bg-green-50 text-green-500 px-2 py-1 rounded flex items-center gap-1">
                <span className="text-xs">▲</span>
                <span>5.26%</span>
              </div>
            </div>
  
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="https://cryptologos.cc/logos/polygon-matic-logo.png"
                  alt="Polygon"
                  className="w-6 h-6"
                />
                <span className="font-medium">Polygon(MATIC)</span>
              </div>
              <div className="bg-green-50 text-green-500 px-2 py-1 rounded flex items-center gap-1">
                <span className="text-xs">▲</span>
                <span>4.32%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  