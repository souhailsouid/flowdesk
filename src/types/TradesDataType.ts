  
interface TradeDataType {
    id: number;
    price: string;
    qty: string;
    quoteQty: string;
    time: number;
    isBuyerMaker: boolean;
    isBestMatch: boolean;
  }
  
  export type { TradeDataType };
