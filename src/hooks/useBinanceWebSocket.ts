import { useEffect, useState } from 'react';

type BookTickerData = {
    u: number;
    s: string;
    b: string;
    B: string;
    a: string;
    A: string;
};

type BinanceWebSocketMessage = {
    stream: string;
    data: BookTickerData;
};
type UseBinanceWebSocketOutput = {
    currentMessage: BinanceWebSocketMessage | null;
    previousMessage: BinanceWebSocketMessage | null;
};
const useBinanceWebSocket = (symbol: string): UseBinanceWebSocketOutput => {
    const [currentMessage, setCurrentMessage] = useState<BinanceWebSocketMessage | null>(null);
    const [previousMessage, setPreviousMessage] = useState<BinanceWebSocketMessage | null>(null);

    useEffect(() => {
        const ws = new WebSocket(`wss://stream.binance.com:9443/stream?streams=${symbol.toLowerCase()}@bookTicker/bnbbtc@bookTicker`);

        const handleWebSocketMessage = (event: MessageEvent) => {
            const newMessage: BinanceWebSocketMessage = JSON.parse(event.data);
            setPreviousMessage(currentMessage); // Set the previous message
            setCurrentMessage(newMessage);
        };

        ws.onopen = () => console.log('Connected to the Binance WebSocket');
        ws.onmessage = handleWebSocketMessage;
        ws.onerror = (error) => console.error('WebSocket Error:', error);
        ws.onclose = () => console.log('Disconnected from the Binance WebSocket');

        return () => {
            if (ws.readyState === WebSocket.OPEN) {
                ws.close();
            }
        };
    }, [symbol]);

    return { currentMessage, previousMessage };
};

export default useBinanceWebSocket;
