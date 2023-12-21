import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Fragment } from 'react';
import { useTable } from '../../../hooks/contexts/useTable';
import { RowsDataType } from '../../../types';

const CustomEmptyTable = ({ rows }: RowsDataType) => {
    const { page, rowsPerPage } = useTable()
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <Fragment>
            {emptyRows > 0 && (
                <TableRow
                    style={{
                        height: 33 * emptyRows,
                    }}
                >
                    <TableCell colSpan={6} />
                </TableRow>
            )}
        </Fragment>
    );
}
export default CustomEmptyTable