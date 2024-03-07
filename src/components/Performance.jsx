import React from 'react';

const Performance = ({ data }) => {
    const {
        todayLow,
        todayHigh,
        // marketCap,
        current,
        // ...rest
    } = data;

    const progress = ((current - todayLow) / (todayHigh - todayLow)) * 100;

    const gradientStyle = {
        width: `${progress}%`,
        background: `linear-gradient(to right, #FFA500 ${progress}%, #008000 ${progress}%)`
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Performance</h2>
            <div className="bg-gray-100 p-4 rounded shadow-md">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-800">Bitcoin (BTC)</h2>
                    <div className="flex items-center space-x-2">
                        <span className="text-green-500 font-bold">▲</span>
                        <span className="text-sm text-gray-500">Live</span>
                    </div>
                </div>
                <div className="text-2xl font-bold text-gray-800 text-center mt-4 mb-2">
                    {current}
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div style={gradientStyle} className="h-full rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="flex items-center justify-between text-gray-700">
                        <span className="text-sm">Today's Low</span>
                        <span className="text-sm">{todayLow}</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-700">
                        <span className="text-sm">Today's High</span>
                        <span className="text-sm">{todayHigh}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Performance;
