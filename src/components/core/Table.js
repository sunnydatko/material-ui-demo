import { usePagination, useTable, useSortBy } from "react-table";

// material ui
import {
  Box,
  IconButton,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
  Select,
} from "@material-ui/core";

import { NavigateBefore, NavigateNext } from "@material-ui/icons";

const Table = ({ columns, data, handleRowClick }) => {
  const {
    canNextPage,
    canPreviousPage,
    getTableBodyProps,
    getTableProps,
    gotoPage,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    previousPage,
    pageCount,
    nextPage,
    setPageSize,
    state,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination
  );

  const { pageIndex, pageSize } = state;

  return (
    <>
      <TableContainer>
        <MuiTable {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <TableSortLabel
                      active={column.isSorted}
                      direction={column.isSortedDesc ? "desc" : "asc"}
                      disabled={!column.canSort}
                    >
                      <span {...column.getSortByToggleProps()}>
                        {column.render("Header")}
                      </span>
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <TableRow
                  onClick={() => handleRowClick && handleRowClick(row.original)}
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell) => {
                    return (
                      <TableCell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </MuiTable>
      </TableContainer>

      {/* Pagination */}
      <Box textAlign="right">
        <Box paddingRight="20px" display="inline">
          <Typography component="span">Rows per Page:</Typography>
        </Box>
        <Box paddingRight="25px" display="inline">
          <Select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              gotoPage(0);
            }}
          >
            {[10, 25, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </Select>{" "}
        </Box>
        <Box paddingRight="20px" display="inline">
          <Typography component="span">
            {pageIndex + 1} - {pageCount} of {pageOptions.length}
          </Typography>
          <IconButton
            aria-label="previous page"
            onClick={() => previousPage(0)}
            disabled={!canPreviousPage}
            disableRipple
          >
            <NavigateBefore />
          </IconButton>
          <IconButton
            aria-label="next page"
            onClick={() => nextPage(0)}
            disabled={!canNextPage}
            disableRipple
          >
            <NavigateNext />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Table;
