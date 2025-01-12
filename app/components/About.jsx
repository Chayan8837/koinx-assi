import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <div className="bg-white rounded-lg p-6 text-black">
      <h2 className="text-2xl font-bold mb-6">About Bitcoin</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-3">What is Bitcoin?</h3>
          <p className="text-gray-700">
            Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last
            24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time
            low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Lorem ipsum dolor sit amet</h3>
          <div className="space-y-4">
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus
              urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
              fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed.
              Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
            </p>
            <p className="text-gray-700">
              Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet.
              Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus pharelius velit in senectus
              enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc.
              Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis
              phasellus. Integer pellentesque enim convallis ultricies at.
            </p>
            <p className="text-gray-700">
              Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing
              semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames
              amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6">Already Holding Bitcoin?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden">
              <div className="p-6 gap-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white flex justify-between min-h-40">
                <div className='' >
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-01-12%2021-31-42-M6apj0pDE5PVlBseTiKuWsjpHKAtVv.png" 
                    alt="Trading chart" 
                    className="w-24 rounded-lg object-cover"
                  />
                </div>
                <div className='flex flex-col justify-center items-center'>
                <h4 className="text-xl font-bold mb-4">Calculate your Profits</h4>
                <button className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium">
                  Check Now
                  <ArrowRight className="w-4 h-4" />
                </button>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-orange-400 to-red-500 text-white flex justify-between min-h-40">
                <div className='mr-2' >
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-01-12%2021-31-42-M6apj0pDE5PVlBseTiKuWsjpHKAtVv.png" 
                    alt="Computer screen" 
                    className="w-24 rounded-lg object-cover "
                  />
                </div>
                <div className='flex flex-col justify-center items-center'>
                <h4 className="text-xl font-bold mb-4">Calculate your tax liability</h4>
                <button className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium">
                  Check Now
                  <ArrowRight className="w-4 h-4" />
                </button>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-gray-700">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing
            semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames
            amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
          </p>
        </div>
      </div>
    </div>
  )
}

