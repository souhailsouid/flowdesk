import styled from '@emotion/styled';

export const FlexChartContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 16px;
justify-content: center;
align-items: stretch;
margin: 2rem;
@media (max-width: 768px) {
  flex-direction: column;
  align-items: center;
}
`;
interface ChartContainerProps {
  width?: string;
  height?: string;
  boxShadow?: string;
  margin?: string;
}

// StyledChartContainer with props
export const StyledChartContainer = styled.div<ChartContainerProps>`
  border-radius: 0.75rem;
  box-shadow: ${({ boxShadow }) => boxShadow ||  '0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)'};
  flex: 1;
  width: ${({ width }) => width || '650px'};
  height: ${({ height }) => height || '350px'};
  margin: ${({ margin}) => margin};
  @media (max-width: 768px) {
    width: 100%; // Full width on small screens
    height: auto; // Adjust height automatically
    margin-bottom: 16px;
  }
`;

