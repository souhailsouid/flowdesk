import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import * as React from 'react';
import { Order, TradeDataType } from '../../../types';

interface HeadCell {
    disablePadding: boolean;
    id: keyof TradeDataType;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'price',
        numeric: false,
        disablePadding: true,
        label: 'Price',
    },
    {
        id: 'qty',
        numeric: true,
        disablePadding: false,
        label: 'Quantity',
    },
    {
        id: 'quoteQty',
        numeric: true,
        disablePadding: false,
        label: 'Quote Quantity',
    },
    {
        id: 'time',
        numeric: false,
        disablePadding: true,
        label: 'Time'
    },
    {
        id: 'isBuyerMaker',
        numeric: false,
        disablePadding: true,
        label: 'Buyer Maker',
    },
    {
        id: 'isBestMatch',
        numeric: false,
        disablePadding: true,
        label: 'Best Match',
    },
];

interface EnhancedTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof TradeDataType) => void;
    order: Order;
    orderBy: string;
}

const CustomTableHead = (props: EnhancedTableProps) => {
    const { order, orderBy, onRequestSort } =
        props;
    const createSortHandler =
        (property: keyof TradeDataType) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align="center"
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
export default CustomTableHead