import { TradeDataType } from ".";

interface RowsDataType {
    rows: TradeDataType[];
}
type Order = 'asc' | 'desc';

export type { Order, RowsDataType };

