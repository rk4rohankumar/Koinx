import React, { useEffect, useRef, memo, useState } from 'react';

const TradingViewWidget = () => {
    const container = useRef();

    const [widgetHeight, setWidgetHeight] = useState(600);

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;

            // Adjust height based on window width
            if (windowWidth < 768) {
                setWidgetHeight(400);
            } else {
                setWidgetHeight(600);
            }
        };

        // Initial call to handleResize
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbols: [["COINBASE:BTCUSD|1D"]],
            width: '100%',
            height: widgetHeight,
            locale: "en",
            colorTheme: "light",
            autosize: false,
            showVolume: false,
            showMA: false,
            hideDateRanges: false,
            hideMarketStatus: false,
            hideSymbolLogo: false,
            scalePosition: "right",
            scaleMode: "Normal",
            fontFamily: "Arial, sans-serif",
            fontSize: "10",
            noTimeScale: false,
            valuesTracking: "1",
            changeMode: "price-and-percent",
            chartType: "area",
            maLineColor: "#2962FF",
            maLineWidth: 1,
            maLength: 9,
            lineWidth: 2,
            lineType: 0,
            dateRanges: ["1d|1", "1m|30", "3m|60", "12m|1D", "60m|1W", "all|1M"],
        });
        container.current.appendChild(script);
    }, [widgetHeight]);

    return (
        <div className="tradingview-widget-container rounded-lg" ref={container}>
            <div className="tradingview-widget-container__widget rounded-xl"></div>
            <div className="tradingview-widget-copyright">

            </div>
        </div>
    );
};

export default memo(TradingViewWidget);
