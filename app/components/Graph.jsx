'use client'

import { useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const timeFrames = [
    { label: '1H', value: '1h' },
    { label: '24H', value: '24h' },
    { label: '7D', value: '7d', selected: true },
    { label: '1M', value: '1m' },
    { label: '3M', value: '3m' },
    { label: '6M', value: '6m' },
    { label: '1Y', value: '1y' },
    { label: 'ALL', value: 'all' },
]

export default function BitcoinChart() {
    const [selectedTimeFrame, setSelectedTimeFrame] = useState('7d')

    const data = {
        labels: ['16 Dec', '17 Dec', '18 Dec', '19 Dec', '20 Dec', '21 Dec', '22 Dec'],
        datasets: [
            {
                data: [42000, 42500, 42300, 46000, 44000, 43500, 42000],
                borderColor: 'rgb(37, 99, 235)',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.4,
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                position: 'left',
                grid: {
                    color: '#f0f0f0',
                },
            },
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false,
        },
    }

    return (
        <div className="bg-white rounded-md p-4 max-w-8xl mx-auto  text-black">
            <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2">
                    <img
                        src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
                        alt="Bitcoin"
                        className="w-9 h-9"
                    />
                    <div className="flex items-center gap-2 text-black">
                        <h1 className="text-2xl font-semibold">Bitcoin</h1>
                        <span className="text-black font-medium">BTC</span>
                    </div>
                    <span className="bg-gray-500 text-white text-sm px-3 py-1 rounded-lg">
                        Rank #1
                    </span>
                </div>
            </div>

            <div className="mb-6">
                <div className="flex items-baseline gap-8">
                    <h2 className="text-3xl font-bold">$46,953.04</h2>
                    <span className="text-lg text-black">₹ 39,42,343</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                    <span className="inline-flex items-center text-emerald-500 bg-emerald-50 px-2 py-1 rounded">
                        ▲ 2.51%
                    </span>
                    <span className="text-gray-500">(24H)</span>
                </div>
            </div>

            <div className="mb-2 mt-4">
                <div className='md:flex'>
                    <h3 className="text-lg font-semibold  md:mr-6">Bitcoin Price Chart (USD)</h3>
                    <div className="flex mb-4 md:gap-2 md:mb-6 overflow-x-hidden">
                        {timeFrames.map((tf) => (
                            <button
                                key={tf.value}
                                onClick={() => setSelectedTimeFrame(tf.value)}
                                className={`md:px-3 px-1 py-1 rounded text-sm font-medium ${selectedTimeFrame === tf.value
                                        ? 'bg-blue-600 text-white'
                                        : 'text-gray-500 hover:bg-gray-100'
                                    }`}
                            >
                                {tf.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="w-full">
                    <Line options={options} data={data} />
                </div>
            </div>
        </div>
    )
}
