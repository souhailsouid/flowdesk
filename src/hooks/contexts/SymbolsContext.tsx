
import React, { ReactNode, createContext, useState } from 'react';

interface SymbolContextType {
  selectedSymbol: { label: string; value: string };
  setSelectedSymbol: (symbol: { label: string; value: string }) => void;
}

export const SymbolContext = createContext<SymbolContextType | undefined>(undefined);

export const SymbolProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedSymbol, setSelectedSymbol] = useState<{ label: string; value: string }>({
    label: '',
    value: '',
  });

  return (
    <SymbolContext.Provider value={{ selectedSymbol, setSelectedSymbol }}>
      {children}
    </SymbolContext.Provider>
  );
};

