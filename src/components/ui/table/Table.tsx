
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import * as React from 'react';
import { useTable } from '../../../hooks/contexts/useTable';
import { StyledCard } from '../../../styles/StyledCards';
import { Order, RowsDataType, TradeDataType } from '../../../types';
import { getComparator, stableSort } from '../../../utils/Helpers';
import CustomEmptyTable from './CustomEmptyTable';
import CustomTableHead from './CustomTableHead';
import CustomTablePagination from './CustomTablePagination';
import CustomTableRow from './CustomTableRow';


const EnhancedTable = ({ rows }: RowsDataType) => {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof TradeDataType>('time');
    const { rowsPerPage, page } = useTable()

    const handleRequestSort = (
        _event: React.MouseEvent<unknown>,
        property: keyof TradeDataType,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rows, rowsPerPage],
    );

    return (
        <Box>
            <StyledCard>
                <TableContainer>
                    <Table
                        aria-labelledby="tableTitle"
                        size="small"
                    >
                        <CustomTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                        />
                        <TableBody>
                            {visibleRows.map((row) => {
                                return <CustomTableRow row={row} key={row.id} />
                            })}
                            <CustomEmptyTable rows={rows} />
                        </TableBody>
                    </Table>
                    <CustomTablePagination rows={rows} />
                </TableContainer>
            </StyledCard>

        </Box>
    );
}
export default EnhancedTable