import { useContext } from "react";
import { SymbolContext } from "./SymbolsContext";

export const useSymbol = () => {
    const context = useContext(SymbolContext);
  if (context === undefined) {
    throw new Error('useSymbol must be used within a SymbolProvider');
  }
  return context;
};