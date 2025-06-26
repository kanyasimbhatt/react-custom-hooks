// Implement a custom React hook called useTablePagination that manages pagination state for a table component. The hook should:

import { useState } from "react";

// - Accept an optional initial page size.
// - Track the current page, start index, and end index for the current page.
// - Provide functions to set the current page (accepting both numbers and strings), reset to the first page, and
// update the page size (which should also reset to the first page).
// - Recalculate start and end indices whenever the page or page size changes.
// - Return all relevant state and functions for use in a table component.

// {
//     currentPage: number,         // Current page number (starting from 1)
//     pageSize: number,            // Number of items per page
//     startIndex: number,          // Start index for slicing data (inclusive)
//     endIndex: number,            // End index for slicing data (exclusive)
//     setCurrentPage: (page: number | string) => void, // Set to a specific page
//     resetPage: () => void,       // Reset to first page
//     updatePageSize: (size: number) => void // Set new page size and reset to page 1
// }

const useTablePagination = (pageLength: number) => {
  const [currentPage, resetCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(pageLength);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(pageSize);

  const setCurrentPage = (page: number | string) => {
    const nextPage = +page;
    resetCurrentPage(nextPage);
    setStartIndex((nextPage - 1) * (pageSize + 1));
    setEndIndex((nextPage - 1) * pageSize + pageSize);
    console.log((nextPage - 1) * (pageSize + 1));
    console.log((nextPage - 1) * pageSize + pageSize);
  };

  const resetPage = () => {
    resetCurrentPage(1);
    setStartIndex(0);
    setEndIndex(pageSize - 1);
  };

  const updatePageSize = (size: number) => {
    setPageSize(size);
    setCurrentPage(1);
    setStartIndex(0);
    setEndIndex(size);
  };

  return {
    currentPage,
    pageSize,
    startIndex,
    endIndex,
    setCurrentPage,
    resetPage,
    updatePageSize,
  };
};

export default useTablePagination;
