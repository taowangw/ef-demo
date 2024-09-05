import { FC, useState, useMemo } from 'react';
import { SortConfig, SortDirectionType, TableProps } from './types';

import './styled/temp.css';
import { SORT_DIRECTION } from './constants';

export const Table: FC<TableProps> = ({ columnFields, rowData, pageSize }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const defaultSort: SortConfig = {
    key: '',
    direction: SORT_DIRECTION.ASC,
  };
  const [sortConfig, setSortConfig] = useState(defaultSort);

  const sortedData = useMemo(() => {
    let sortableData = [...rowData];
    if (sortConfig.key !== '') {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [rowData, sortConfig]);

  const pageData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return sortedData.slice(startIndex, startIndex + pageSize);
  }, [sortedData, currentPage, pageSize]);

  const handleSort = (key: string) => {
    let direction: SortDirectionType = SORT_DIRECTION.ASC;
    if (sortConfig.key === key && sortConfig.direction === SORT_DIRECTION.ASC) {
      direction = SORT_DIRECTION.DESC;
    }
    setSortConfig({ key, direction });
  };

  const totalPages = Math.ceil(rowData.length / pageSize);

  return (
    <>
      <div className="table-container">
        <table className="table">
          <thead className="table-header">
            <tr className="table-header-tr">
              {columnFields.map((column) => (
                <th
                  key={column.field}
                  scope="col"
                  className={`table-header-cell fixed ${column.fixed ?? ''}`}
                  onClick={() => handleSort(column.field)}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="table-body">
            {pageData.map((row, index) => (
              <tr key={index} className="table-row">
                {columnFields.map((column, index) =>
                  index === 0 ? (
                    <th
                      key={column.field}
                      scope="row"
                      className={`table-cell fixed ${column.fixed ?? ''}`}
                    >
                      <span color="#7ea6d4">{row[column.field]}</span>
                    </th>
                  ) : (
                    <td
                      key={column.field}
                      className={`table-cell fixed ${column.fixed ?? ''}`}
                    >
                      {row[column.field]}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};
