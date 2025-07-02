import React, { useState } from 'react';
import { useReactTable,         //The main hook that gives you the table instance.
        createColumnHelper,     //A helper function to create columns.
        getCoreRowModel,        //A function you pass to useReactTable to enable basic row rendering. 
        flexRender,
        getSortedRowModel,      // A function you pass to useReactTable to enable sorting.
        getFilteredRowModel,    // A function you pass to useReactTable to enable filtering.
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
    }),
    columnHelper.accessor('description',{
        header: 'Description',
        cell: info => info.getValue(),
        enableSorting: false,
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
    }),
    columnHelper.accessor('dueDate',{
        header: 'Due Date',
        cell: info => info.getValue(),
        enableSorting: true,
    }),
    // You can add more columns here, e.g., for actions like 'Edit', 'Delete'
    columnHelper.display({
        id: 'actions', // Unique ID for this display column
        header: 'Actions',
        cell: props => (
        <div className="flex gap-2">
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs"
            onClick={() => alert(`Editing task: ${props.row.original.title}`)}
            >
            Edit
            </button>
            <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs"
            onClick={() => alert(`Deleting task: ${props.row.original.title}`)}
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
    // 3. Create a Table Instance
    // This is the core hook. It takes your data, columns, and other options.
    // It returns a table object with all the necessary state and helper functions.
    const table=useReactTable({
        data: tasks,
        columns: columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
          {/* Table Header (<thead>) */}
          <thead className="bg-gray-100">
            {/* Iterate over header groups. Most simple tables have one header group. */}
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {/* Iterate over individual headers within the group */}
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    // Optionally add styles for sorting indicators later
                  >
                    {/* Render the header content. `flexRender` handles function or string headers. */}
                    {header.isPlaceholder
                      ? null // If it's a placeholder (e.g., for column grouping), render nothing
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          {/* Table Body (<tbody>) */}
          <tbody className="divide-y divide-gray-200">
            {/* Iterate over rows */}
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {/* Iterate over cells within each row */}
                {row.getVisibleCells().map(cell => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left"
                  >
                    {/* Render the cell content using `flexRender` */}
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
}

export default TaskTable
