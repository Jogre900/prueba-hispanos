import { useMemo, useEffect } from 'react'
import { useTable, usePagination, useRowSelect } from 'react-table'
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@mui/material'
import IndeterminateCheckbox from './Checkbox'
import ShowColumnBtn from './ShowColumnBtn'
const BasicTable = ({ columns, data, handleRowsId }) => {
  /* ------ */
  /* USE TABLE HOOKS SUGGEST MEMOIZED COLUMNS AND DATA  */

  const memoizedColumns = useMemo(() => columns, [])
  const memoizedData = useMemo(() => data, [])

  /* ------ */
  /* USE TABLE HOOKS */

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    state,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    setPageSize,
    selectedFlatRows,
    allColumns,
    getToggleAllPageRowsSelectedProps
  } = useTable(
    {
      columns: memoizedColumns,
      data
    },
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: 'selection',
            Header: (h) => {
              const { getToggleAllPageRowsSelectedProps } = h

              return (
                <IndeterminateCheckbox
                  {...getToggleAllPageRowsSelectedProps()}
                />
              )
            },
            Cell: (cell) => {
              const { row, selectedFlatRows } = cell
              const { getToggleRowSelectedProps } = row
              const { onChange } = getToggleRowSelectedProps()
              const selectedRowsId = selectedFlatRows.map((r) => r.original.id)
              return (
                <IndeterminateCheckbox
                  {...row.getToggleRowSelectedProps()}
                  onChange={(e) => {
                    if (handleRowsId) {
                      if (e.target.checked) {
                        handleRowsId([...selectedRowsId, row.original.id])
                      } else {
                        handleRowsId(
                          selectedRowsId.filter((id) => id !== row.original.id)
                        )
                      }
                    }
                    onChange(e)
                  }}
                />
              )
            }
          },
          ...columns
        ]
      })
    }
  )

  const { pageIndex, pageSize } = state

  useEffect(() => {
    if (handleRowsId) {
      handleRowsId(selectedFlatRows.map((row) => row.original))
    }
  }, [selectedFlatRows])

  return (
    <>
      <div>
        <input type="checkbox" {...getToggleAllPageRowsSelectedProps()} />{' '}
        Toggle all
        {allColumns
          .filter(({ Header }) => Boolean(Header))
          .map((column) => (
            <div key={column.id}>
              <label>
                <input type="checkbox" {...column.getToggleHiddenProps()} />
                {column.Header}
              </label>
            </div>
          ))}
        <div></div>
      </div>
      <TableContainer component={Paper}>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup, i) => (
              <TableRow key={i} {...headerGroup.getFooterGroupProps()}>
                {headerGroup.headers.map((column, i) => (
                  <TableCell key={i} {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <TableRow key={i} {...row.getRowProps()}>
                  {row.cells.map((cell, i) => (
                    <TableCell key={i} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TableCell>
                  ))}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <span>
        Page: {pageIndex + 1} of {pageOptions.length}
      </span>
      <span>
        <input
          type="number"
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const pageNumber = e.target.value ? +e.target.value - 1 : pageIndex
            gotoPage(pageNumber)
          }}
        />
      </span>
      <select
        name="page-size"
        value={pageSize}
        onChange={(e) => {
          setPageSize(+e.target.value)
        }}
      >
        {[10, 25, 50].map((pz) => (
          <option key={pz} value={pz}>
            Show {pz}
          </option>
        ))}
      </select>
      <div>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button
          onClick={() => gotoPage(pageOptions.length - 1)}
          disabled={!canNextPage}
        >
          {'>>'}
        </button>
      </div>
    </>
  )
}

export default BasicTable
