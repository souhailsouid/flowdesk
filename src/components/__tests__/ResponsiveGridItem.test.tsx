import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import React from 'react';
import ResponsiveGridItem from '../ui/grids/ResponsiveGridItem';

describe("ResponsiveGridItem 's component", () => {

    it("should render component", () => {
        const mockData = {
            text: 'BTC/USD',
            dataTestId: "currency-pair-display"
        }
  
        const { text, dataTestId, } = mockData
        render(
            <ResponsiveGridItem text={text} dataTestId={dataTestId} />
        );
        const textElement = screen.getByTestId(dataTestId)

        expect(textElement).toBeInTheDocument();
        expect(textElement).toHaveTextContent(text);

    });

});
