import React, { useEffect, useRef, memo } from 'react';

const TradingViewWidget = () => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [["COINBASE:BTCUSD|1D"]],
      width: '100%', // Adjusted to take up 80% of the screen width
      height: 600, // Adjusted height in pixels
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
  }, []);

  return (
    <div className="tradingview-widget-container rounded-lg" ref={container}>
      <div className="tradingview-widget-container__widget rounded-xl"></div>
      <div className="tradingview-widget-copyright">

      </div>
    </div>
  );
};

export default memo(TradingViewWidget);
