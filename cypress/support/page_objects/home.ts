class HomePage {
    private webElements = {
        input: {
            searchAutoComplete: () => cy.get("[data-testid='auto-complete-display']"),
            optionAutoComplete: () => cy.get("[data-option-index='0']")
        },
        components: {
            tradeData: () => cy.get("[data-testid='tradeData-component-display']"),
            form: () => cy.get("[data-testid='form-component-display']"),
            dashboard: () => cy.get("[data-testid='dashboard-component-display']"),
            marketInfo: () => cy.get("[data-testid='marketInfo-component-display']"),
            table: () => cy.get("[data-testid='table-component-display']"),
        }
    }

    getWebElements() {
        return Object.values(this.webElements.components).map((component) => {
            component().scrollIntoView().should('be.visible')
        })
    }

    interceptRequest(currencyPair: string = "BTCUSDT") {
        const endpoints = [
            { url: `https://api.binance.com/api/v3/ticker/24hr?symbol=${currencyPair}`, alias: 'get24hTicker' },
            { url: `https://api.binance.com/api/v3/trades?symbol=${currencyPair}`, alias: 'getTrades' },
            { url: `https://api.binance.com/api/v3/klines?symbol=${currencyPair}&interval=1m&limit=1000`, alias: 'getKlines' },
            { url: `https://api.binance.com/api/v3/ticker/price?symbol=${currencyPair}`, alias: 'getPrice' }
        ];
        endpoints.map(endpoint => {
            cy.intercept('GET', endpoint.url).as(endpoint.alias);
        });
    }
    waitForIntercepts() {
        const aliases = ['get24hTicker', 'getTrades', 'getKlines', 'getPrice'];
        
        aliases.map(alias => {
            cy.wait(`@${alias}`).then((interception) => {
                expect(interception.response?.statusCode).to.equal(200);
            });
        });
    }
    
    selectCurrencyPair(currencyPair: string) {
        this.interceptRequest()
        this.webElements.input.searchAutoComplete().type(currencyPair)
        this.webElements.input.optionAutoComplete().contains(currencyPair).type("{enter}")
        cy.wait(1000) // need to wait for click to be processed
        this.webElements.input.searchAutoComplete().type("{enter}")
        this.waitForIntercepts()
    }

}

export default HomePage;