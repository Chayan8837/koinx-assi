'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Newspaper, TrendingUp, Info } from 'lucide-react'

export default function Sentiment() {
    const [scrollPosition, setScrollPosition] = useState(0)

    const scrollLeft = () => {
        const container = document.getElementById('events-container')
        if (container) {
            container.scrollBy({ left: -320, behavior: 'smooth' })
            setScrollPosition(scrollPosition - 320)
        }
    }

    const scrollRight = () => {
        const container = document.getElementById('events-container')
        if (container) {
            container.scrollBy({ left: 320, behavior: 'smooth' })
            setScrollPosition(scrollPosition + 320)
        }
    }

    return (
        <div className="bg-white rounded-lg p-6 text-black">
            {/* Sentiment Header */}
            <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl font-bold">Sentiment</h2>
                <Info className="w-5 h-5 text-gray-500" />
            </div>

            {/* Key Events */}
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-lg font-semibold">Key Events</h3>
                    <Info className="w-4 h-4 text-gray-500" />
                </div>

                <div className="relative">
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white shadow-lg rounded-full flex items-center justify-center z-10"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div
                        id="events-container"
                        className="flex gap-4 overflow-x-auto scrollbar-hide relative"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        <div className="min-w-[320px] bg-blue-50 rounded-lg p-4 flex gap-3">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <Newspaper className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="font-medium mb-2">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h4>
                                <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
                            </div>
                        </div>

                        <div className="min-w-[320px] bg-green-50 rounded-lg p-4 flex gap-3">
                            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <TrendingUp className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="font-medium mb-2">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h4>
                                <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra.</p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-white shadow-lg rounded-full flex items-center justify-center z-10"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

          

            {/* Analyst Estimates */}
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-lg font-semibold">Analyst Estimates</h3>
                    <Info className="w-4 h-4 text-gray-500" />
                </div>

                <div className="flex items-center gap-8">
                    <div className="w-32 h-32 rounded-full bg-green-50 flex items-center justify-center">
                        <span className="text-3xl font-bold text-green-600">76<span className="text-xl">%</span></span>
                    </div>

                    <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-8">
                            <span className="text-sm text-gray-500 w-8">Buy</span>
                            <div className="flex-1 h-2 bg-gray-200 rounded">

                                <div className="flex-1 h-2 bg-green-500 rounded" style={{ width: '76%' }} />
                                <div className="flex items-center gap-4">
                                </div>

                            </div>
                            <span className="text-sm text-gray-500 w-8">76%</span>
                        </div>
                        <div className="flex items-center gap-8">
                            <span className="text-sm text-gray-500 w-8">Hold</span>
                            <div className="flex-1 h-2 bg-gray-200 rounded">

                                <div className="flex-1 h-2 bg-gray-500 rounded" style={{ width: '8%' }} />
                                <div className="flex items-center gap-4">
                                </div>

                            </div>
                            <span className="text-sm text-gray-500 w-8">8%</span>
                        </div>
                      
                        <div className="flex items-center gap-8">
                            <span className="text-sm text-gray-500 w-8">Sell</span>
                            <div className="flex-1 h-2 bg-gray-200 rounded">

                                <div className="flex-1 h-2 bg-red-600 rounded" style={{ width: '16%' }} />
                                <div className="flex items-center gap-4">
                                </div>

                            </div>
                            <span className="text-sm text-gray-500 w-8">16%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

