export const binanceWebSocket = () => {
    const ws = new WebSocket('wss://stream.binance.com:9443/stream?streams=btcusdt@bookTicker/bnbbtc@bookTicker');

    ws.onopen = () => {
        console.log('Connected to the Binance WebSocket');
    };

    ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        console.log('Message from Binance:', message);
        // Process the message
    };

    ws.onerror = (error) => {
        console.error('WebSocket Error:', error);
    };

    ws.onclose = () => {
        console.log('Disconnected from the Binance WebSocket');
        // Optionally attempt to reconnect
    };
};

