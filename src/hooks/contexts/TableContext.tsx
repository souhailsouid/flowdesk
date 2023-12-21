import React, { ReactNode, createContext, useState } from 'react';

interface TableContextType {

    page: number; setPage: (page: number) => void;
    rowsPerPage: number; setRowsPerPage: (rowsPerPage: number) => void;
}
export const TableContext = createContext<TableContextType | undefined>(undefined);

export const TableProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [page, setPage] = useState <number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(15);
 
  return (
      <TableContext.Provider value={{
        page, setPage,
        rowsPerPage, setRowsPerPage
      }}>
      {children}
    </TableContext.Provider>
  );
};

