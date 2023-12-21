import styled from '@emotion/styled';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { TradeDataType } from '../../../types';
import { formatTimestamp } from '../../../utils/Helpers';

const StyledTableCell = styled(TableCell)`
  padding: 8px; // Reduced padding for compactness
  text-align: center;
  font-size: 0.875rem;
`;

const StyledTableRow = styled(TableRow)`
  &:hover {
    background-color: #efefef; // hover effect
  }
`;

const yesNoMap: { [key: string]: string } = {
    true: 'Yes',
    false: 'No',
};

interface CustomTableRowProps {
    row: TradeDataType;
}

const CustomTableRow: React.FC<CustomTableRowProps> = ({ row }) => (
    <StyledTableRow key={row.id}>
        <StyledTableCell component="th" scope="row">{row.price}</StyledTableCell>
        <StyledTableCell align="right">{row.qty}</StyledTableCell>
        <StyledTableCell align="right">{row.quoteQty}</StyledTableCell>
        <StyledTableCell align="right">{formatTimestamp(row.time)}</StyledTableCell>
        <StyledTableCell align="right" size="small" >{yesNoMap[String(row.isBuyerMaker)]}</StyledTableCell>
        <StyledTableCell align="right" size="small">{yesNoMap[String(row.isBestMatch)]}</StyledTableCell>
    </StyledTableRow>
);

export default CustomTableRow;
