export default function BitcoinDashboard() {
    return (
      <div className="max-w-8xl rounded-lg mx-auto p-4 text-black bg-white">
        {/* Navigation */}
        <nav className="border-b mb-6">
          <ul className="flex overflow-x-auto">
            <li className="mr-8">
              <a href="#overview" className="block py-4 text-blue-600 border-b-2 border-blue-600 font-semibold">
                Overview
              </a>
            </li>
            {['Fundamentals', 'News Insights', 'Sentiments', 'Team', 'Technicals', 'Tokenomics'].map((item) => (
              <li key={item} className="mr-8">
                <a href={`#${item.toLowerCase()}`} className="block py-4 text-gray-600 hover:text-gray-900">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
  
        {/* Performance Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Performance</h2>
          
          {/* Today's Range */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Today's Low</span>
              <span>Today's High</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">46,930.22</span>
              <div className="flex-1 h-2 rounded-full relative bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
                
                
              </div>
              <span className="text-gray-600">49,343.83</span>
            </div>
          </div>
  
          {/* 52W Range */}
          <div>
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>52W Low</span>
              <span>52W High</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">16,930.22</span>
              <div className="flex-1 h-2 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500" />
              <span className="text-gray-600">49,743.83</span>
            </div>
          </div>
        </div>
  
        {/* Fundamentals Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl font-bold">Fundamentals</h2>
            <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
  
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                { label: 'Bitcoin Price', value: '$16,815.46' },
                { label: '24h Low / 24h High', value: '$16,382.07 / $16,874.12' },
                { label: '7d Low / 7d High', value: '$16,382.07 / $16,874.12' },
                { label: 'Trading Volume', value: '$23,249,202,782' },
                { label: 'Market Cap Rank', value: '#1' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between  border-b">
                  <span className="text-gray-500 py-3">{item.label}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>
  
            <div className="space-y-4">
              {[
                { label: 'Market Cap', value: '$323,507,290,047' },
                { label: 'Market Cap Dominance', value: '38.343%' },
                { label: 'Volume / Market Cap', value: '0.0718' },
                { 
                  label: 'All-Time High',
                  value: (
                    <div className="text-right">
                      <div className="font-medium">$69,044.77 <span className="text-red-500">-75.6%</span></div>
                      <div className="text-sm text-gray-500">Nov 10, 2021 (about 1 year)</div>
                    </div>
                  )
                },
                {
                  label: 'All-Time Low',
                  value: (
                    <div className="text-right">
                      <div className="font-medium">$67.81 <span className="text-green-500">24729.1%</span></div>
                      <div className="text-sm text-gray-500">Jul 06, 2013 (over 9 years)</div>
                    </div>
                  )
                },
              ].map((item) => (
                <div key={typeof item.label === 'string' ? item.label : ''} className="flex justify-between  border-b">
                  <span className="text-gray-500 py-3">{item.label}</span>
                  {typeof item.value === 'string' ? (
                    <span className="font-medium">{item.value}</span>
                  ) : (
                    item.value
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  