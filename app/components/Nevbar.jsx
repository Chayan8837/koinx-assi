import { Menu } from "lucide-react";



export default function Nevabr() {
    return (
      <div>
        <header className="sticky top-0 z-50 w-full  bg-white">
          <div className=" mx-auto flex h-16 items-center px-4 justify-between">
            <div className="mr-8 justify-between">
              <a href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-[#0052FE]">KoinX</span>
              </a>
            </div>

            <nav className="hidden md:flex  items-center  flex-none">

              <ul className="flex space-x-8">
                <li className="flex justify-center items-center">
                  <a href="/crypto-taxes" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                    Crypto Taxes
                  </a>
                </li>
                <li className="flex justify-center items-center">
                  <a href="/free-tools" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                    Free Tools
                  </a>
                </li>
                <li className="flex justify-center items-center" >
                  <a href="/resource-center" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                    Resource Center
                  </a>
                </li>
                <li>
                  <button className="bg-[#0052FE] text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700">
                    Get Started
                  </button>
                </li>
              </ul>
            </nav>

            <div className="md:hidden">
              <button className="flex items-center">
                <Menu className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          
          </div>
          <nav className="border-t bg-gray-100">
            <div className=" mx-auto flex h-10 items-center space-x-2 text-sm text-gray-500 px-4">
              <a href="/cryptocurrencies" className="hover:text-gray-900">
                Cryptocurrencies
              </a>
              <span>&gt;&gt;</span>
              <a href="/cryptocurrencies/bitcoin" className="text-gray-900">
                Bitcoin
              </a>
            </div>
          </nav>
        </header>
       
      </div>
    )
  }