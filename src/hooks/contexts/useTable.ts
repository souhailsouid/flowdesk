



import { useContext } from "react";
import { TableContext } from "./TableContext";


export const useTable = () => {
    const context = useContext(TableContext);
    if (context === undefined) {
      throw new Error('useTable must be used within a DataProvider');
    }
    return context;
  };
  