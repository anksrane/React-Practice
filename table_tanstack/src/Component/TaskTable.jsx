import React, { useState, useMemo } from 'react';
import { useReactTable,         //The main hook that gives you the table instance.
        createColumnHelper,     //A helper function to create columns.
        getCoreRowModel,        //A function you pass to useReactTable to enable basic row rendering. 
        flexRender,
        getSortedRowModel,      // A function you pass to useReactTable to enable sorting.
        getFilteredRowModel,    // A function you pass to useReactTable to enable filtering.
        getPaginationRowModel   // A function you pass to useReactTable to enable pagination.
} from '@tanstack/react-table';
import { tasks } from "../data/tasks";

// 1. Define Column Helper
// The column helper makes it easier to define columns by inferring types (even in JS, it helps with structure).
// We pass the "shape" of our data object as a generic, but since we're in JS, it's just 'Task' for documentation.
const columnHelper=createColumnHelper();

// 2. Define Columns
// This is an array of column definitions. Each object describes a column.
const columns = [
    columnHelper.accessor('title',{
        header: 'Title',
        cell: info => info.getValue(),
        enableSorting: true,
        enableGlobalFilter: true
    }),
    columnHelper.accessor('description',{
        header: 'Description',
        cell: info => info.getValue(),
        enableSorting: false,
        enableGlobalFilter: true
    }),
    columnHelper.accessor('status',{
        header: 'Status',
        cell: info => {
        // Example of custom cell rendering with Tailwind for status colors
        const status = info.getValue();
        let statusClass = '';
        switch (status) {
            case 'Pending':
              statusClass = 'bg-yellow-200 text-yellow-800';
            break;

            case 'In Progress':
              statusClass = 'bg-blue-200 text-blue-800';
            break;

            case 'Completed':
              statusClass = 'bg-green-200 text-green-800';
            break;

            case 'Overdue':
              statusClass = 'bg-red-200 text-red-800';
            break;

            default:
              statusClass = 'bg-gray-200 text-gray-800';
        }
            return (
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusClass}`}>
                {status}
                </span>
            );
        },
        enableSorting: true,
        enableGlobalFilter: true
    }),
    columnHelper.accessor('dueDate',{
        header: 'Due Date',
        cell: info => info.getValue(),
        enableSorting: true,
        enableGlobalFilter: true
    }),
    // You can add more columns here, e.g., for actions like 'Edit', 'Delete'
    columnHelper.display({
        id: 'actions', // Unique ID for this display column
        header: 'Actions',
        cell: props => (
        <div className="flex gap-2">
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs"
            onClick={() => alert(`Editing task: ${props.row.original.id}`)}
            >
            Edit
            </button>
            <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs"
            onClick={() => alert(`Deleting task: ${props.row.original.id}`)}
            >
            Delete
            </button>
        </div>
        ),
        enableSorting: false,
        enableGlobalFilter: false,
    }),    
];

function TaskTable() {

    const [sorting,setSorting]=useState([]);
    const [globalFilter,setGlobalFilter]=useState('');
    const [pagination,setPagination]=useState({pageIndex:0,pageSize:5})

    // 3. Create a Table Instance
    // This is the core hook. It takes your data, columns, and other options.
    // It returns a table object with all the necessary state and helper functions.
    const table=useReactTable({
        data: tasks,
        columns: columns,
        state:{
          sorting,
          globalFilter,
          pagination
        },
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel:getSortedRowModel(),
        getFilteredRowModel:getFilteredRowModel(),
        getPaginationRowModel:getPaginationRowModel(),
        onSortingChange:setSorting,
        onGlobalFilterChange:setGlobalFilter,
        onPaginationChange:setPagination,

        autoResetPageIndex:false,
    })

    const currentPage = table.getState().pagination.pageIndex; // Current page (0-indexed)
    const pageCount = table.getPageCount(); // Total number of pages
      

    // --- Start of NEW Pagination Logic Block ---
    const pageNumbers = useMemo(() => {
      const numbers = [];
      const maxVisiblePages = 3; // The fixed number of page buttons to show

      // If there are no pages, return empty array
      if (pageCount === 0) {
        return [];
      }

      // Determine the start page number for the fixed window
      // This logic ensures the window doesn't go below page 0 or beyond the last 3 pages
      let startPage;
      if (currentPage < Math.floor(maxVisiblePages / 2)) {
        // If near the beginning, start from 0
        startPage = 0;
      } else if (currentPage > pageCount - 1 - Math.ceil(maxVisiblePages / 2)) {
        // If near the end, ensure the window ends at pageCount - 1
        startPage = Math.max(0, pageCount - maxVisiblePages);
      } else {
        // In the middle, center the window around currentPage
        startPage = currentPage - Math.floor(maxVisiblePages / 2);
      }   

      // Add page numbers to the array based on the calculated window
      for (let i = 0; i < maxVisiblePages; i++) {
        const pageNum = startPage + i;
        // Only add if the page number is valid
        if (pageNum < pageCount) {
          numbers.push(pageNum);
        }
      }

      return numbers;
    }, [currentPage, pageCount]); // Re-calculate only when currentPage or pageCount changes
    // --- End of NEW Pagination Logic Block ---

    return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Task List</h2>

      {/* Global Search Input */}
      <div className="mb-4 flex items-end justify-end">
        <input
          type="text"
          value={globalFilter ?? ''} // Ensure value is a string, even if null/undefined
          onChange={e => setGlobalFilter(String(e.target.value))}
          placeholder="Search all tasks..."
          className="w-auto px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
          {/* Table Header (<thead>) */}
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    scope="col"
                    className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider select-none ${header.column.getCanSort()? 'cursor-pointer' : ''}`}
                    // Add onClick handler for sorting if the column is sortable
                    onClick={header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined}
                  >
                    <div className="flex items-center gap-1">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {/* Sort indicator */}
                      {header.column.getCanSort() && (
                        <span>
                          {{
                            asc: ' 🔼', // Up arrow for ascending
                            desc: ' 🔽', // Down arrow for descending
                          }[header.column.getIsSorted()] ?? null}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          {/* Table Body (<tbody>) */}
          <tbody className="divide-y divide-gray-200">
            {/* Display "No results" if filtered rows are empty */}
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-6 py-4 text-center text-gray-500">
                  No tasks found.
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <td
                      key={cell.id}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left"
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

        {/* Pagination Controls */}
      <div className="flex items-center justify-center flex-col sm:flex-row sm:justify-between flex-wrap mt-4">
        <div className="flex items-center gap-2 mb-2 hidden sm:block">
          {/* Page Size Selector */}
          <label htmlFor="pageSizeSelect" className="text-sm text-gray-700">
            Show:
          </label>
          <select
            id="pageSizeSelect"
            value={table.getState().pagination.pageSize}
            onChange={e => {
              table.setPageSize(Number(e.target.value));
            }}
            className="border border-gray-300 rounded-md py-1 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {[5, 10, 20, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2 mb-2">
          {/* Previous Button */}
          <button
            className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            &laquo;
          </button>

          {/* Page Numbers */}
          {pageNumbers.map((pageNumber, index) => (
            <React.Fragment key={index}> {/* Use index for keys for ellipses */}
              {typeof pageNumber === 'number' ? (
                <button
                  onClick={() => table.setPageIndex(pageNumber)}
                  className={`px-3 py-1 border border-gray-300 rounded-md text-sm font-medium ${currentPage === pageNumber ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-gray-700 hover:bg-gray-50' }`} >
                  {pageNumber + 1} {/* Display 1-indexed page number */}
                </button>
              ) : (
                <span className="px-3 py-1 text-gray-700">...</span>
              )}
            </React.Fragment>
          ))}

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            &raquo;
          </button>
        </div>

        {/* Current Page and Total Pages Info */}
        <span className="text-sm text-gray-700 mb-2">
          Page{' '}
          <span className="font-semibold">
            {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </span>
        </span>
      </div>

    </div>
    )
}

export default TaskTable
