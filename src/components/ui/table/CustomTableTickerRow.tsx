import TableCell from '@mui/material/TableCell';
import React, { Fragment } from 'react';
import { Ticker24hDataType } from '../../../types';

interface CustomTableCellProps {
    row: Ticker24hDataType[];
    index: number
}

const CustomTableCellTicker: React.FC<CustomTableCellProps> = ({ row, index }) => {
    return (
        <Fragment>
            <Fragment key={String(index)}>
                <TableCell align="right" key={String(row)}>
                    {String(row)}
                </TableCell>
            </Fragment>
        </Fragment>
    );
};

export default CustomTableCellTicker
