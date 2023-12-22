import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import React from 'react';
import MarketDataDisplay from '../ui/grids/MarketDataDisplay';


describe("MarketDataDisplay's component", () => {

    it("should render component", () => {
        const mockData = { title: 'BTC/USD', value: '42000' }
        const { title, value } = mockData
        render(
            <MarketDataDisplay title={title} value={value} />
        );
        const titleElement = screen.getByTestId("title-display")
        const valueElement = screen.getByTestId("value-display")

        expect(titleElement).toBeInTheDocument();
        expect(valueElement).toBeInTheDocument();
        expect(titleElement).toHaveTextContent(title);
        expect(valueElement).toHaveTextContent(value);
    });
});
