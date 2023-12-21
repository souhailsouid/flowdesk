import { Order } from "../types";

export const currencyPair = (data: { symbol: string; }[]) => data?.map((item: { symbol: string }) => ({
    label: item.symbol,
    value: item.symbol,
}));

export const debounce = (func: (...args: ({ label: string, value: string })[]) => void, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: ({ label: string, value: string })[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

const descendingComparator = <T>(a: T, b: T, orderBy: keyof T) => {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

export const getComparator = <Key extends keyof never>(
    order: Order,
    orderBy: Key,
) => (
    a: { [key in Key]: number | string | boolean },
    b: { [key in Key]: number | string | boolean },
): number =>
        order === 'desc'
            ? descendingComparator(a, b, orderBy)
            : -descendingComparator(a, b, orderBy);


export const stableSort = <T>(array: T[], comparator: (a: T, b: T) => number) => {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

export const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
}


export const parseToNumber = (numberString: string, fixed: number = 2): number => {
    return parseFloat(parseFloat(numberString).toFixed(fixed));
};

export const formatNumber = (number: number): string => {
    return number.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
};

export const parseAndFormatNumber = (numberString: string, fixed: number = 2): string => {
    const parsedNumber = parseToNumber(numberString, fixed);
    return formatNumber(parsedNumber);
};

export const ensureArray = (data: Array<unknown>) => {
    return Array.isArray(data) ? data : [];
}