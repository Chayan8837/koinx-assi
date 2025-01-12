'use client'

import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)

export default function Tokenomics() {
  const data = {
    datasets: [{
      data: [80, 20],
      backgroundColor: [
        '#0082FF',
        '#FFA200'
      ],
      borderWidth: 0,
      cutout: '70%'
    }],
  }

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  }

  return (
    <div className="bg-white rounded-lg p-6 text-black">
      <h2 className="text-2xl font-bold mb-6">Tokenomics</h2>
      
      <h3 className="text-xl font-bold mb-4">Initial Distribution</h3>
      
      <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
        <div className="w-48 h-48">
          <Doughnut data={data} options={options} />
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#0082FF]"></div>
            <span className="text-gray-800">Crowdsale investors: 80%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FFA200]"></div>
            <span className="text-gray-800">Foundation: 20%</span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel
        consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend
        lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam
        fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum
        eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet
        odio nisi eu ac risus.
      </p>
    </div>
  )
}

