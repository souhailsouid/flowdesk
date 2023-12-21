import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Theme } from '@mui/material/styles';

interface StyledBoxProps {
    flexDirection?: 'row' | 'column';
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    padding?: string;
    gap?: string;
    theme: Theme
  }

export const StyledBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'flexDirection' && prop !== 'justifyContent' && prop !== 'alignItems' && prop !== 'padding' && prop !== 'gap'
})<StyledBoxProps>(({ theme, flexDirection, justifyContent, alignItems, padding, gap }) => ({
    display: 'flex',
    flexDirection: flexDirection || 'row',
    flexWrap: 'wrap',
    justifyContent: justifyContent || 'space-evenly',
    alignItems: alignItems || 'stretch',
    padding: padding || '16px',
    gap: gap || '16px',
    [theme.breakpoints.down('sm')]: {
        flexDirection: flexDirection === 'row' ? 'column' : flexDirection,
        alignItems: 'center',
        padding: '8px',
        gap: '8px',
    }
}));
