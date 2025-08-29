import React,{  useState, useEffect, useCallback } from 'react'
import { InputSearch, Loader } from '../index.js';
import { getClientsWithFilter } from '../../firebase/clientServices/clientsService';

import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
  getFilteredRowModel,
  getSortedRowModel,
} from '@tanstack/react-table';

function ClientsList() {
  const [clientsData,setClientsData] = useState([]);
  const [loadingClients,setLoadingClients] = useState(true);

  const [sorting, setSorting] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [hasMorePages, setHasMorePages] = useState(false);  

  // useEffect(()=>{
  //   const fetchClientsWithFilter = async () => {
  //       const response = await getClientsWithFilter();
  //       if(response.success){
  //         setClientsData(response.data);
  //         setLoadingClient(false);
  //       }        
  //   }
  //   fetchClientsWithFilter();
  // },[])

  // Define table columns
  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor('serialNo', {
      header: 'Sr No',
      cell: info => info.getValue(),
      enableSorting: true,
    }),
    columnHelper.accessor('label', {
      header: 'Client Name',
      cell: info => info.getValue(),
      enableSorting: true,
    }),
  ];

  // Fetch clients data
  const fetchClients = useCallback(async (targetPage = 0) => {
    setLoadingClients(true);

    const response = await getClientsWithFilter({
      page: targetPage + 1,
      pageSize,
    });

    if (response) {
      setClientsData(response.data);
      setHasMorePages(response.total > (targetPage + 1) * pageSize);
      setTotalPages(response.totalPages);
    } else {
      setClientsData([]);
      setHasMorePages(false);
    }

    setLoadingClients(false);
  }, [pageSize]);

  useEffect(() => {
    fetchClients(0); // fetch first page on mount
    console.log("totalPages",totalPages);
    console.log("currentPage",currentPage);
  }, [fetchClients]);  

  // TanStack Table instance
  const table = useReactTable({
    data: clientsData,
    columns: columns,
    state: {
      sorting,
      pagination: { pageIndex: currentPage, pageSize },
    },
    manualPagination: true,
    pageCount: hasMorePages ? currentPage + 2 : currentPage + 1,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });  

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);      // update state
    fetchClients(pageNumber);        // fetch new data
  };  

  return loadingClients ? (
    <div className="flex justify-center items-center h-40">
      <Loader color='text-blue' />
    </div>    
  ) : (
    <div className="mx-auto p-4 z-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Clients List</h2>

      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  scope="col"
                  className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider select-none ${header.column.getCanSort()? 'cursor-pointer' : ''}`}
                  onClick={header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined}
                >
                  <div className="flex items-center gap-1">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {header.column.getCanSort() && (
                      <span>
                        {{
                          asc: ' 🔼', 
                          desc: ' 🔽', 
                        }[header.column.getIsSorted()] ?? null}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-gray-200">
          {table.getRowModel().rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-4 text-center text-gray-500">
                No clients found.
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td
                    key={cell.id}
                    className="px-6 py-3 whitespace-nowrap text-sm text-gray-900 text-left"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>      

      <div className="flex items-center justify-center flex-col sm:flex-row sm:justify-between flex-wrap mt-4">
          <div className="text-sm text-gray-700 mb-2 hidden sm:block">
            Showing <span className="font-semibold">{table.getFilteredRowModel().rows.length}</span> records
          </div>

          <div className="flex items-center gap-2 mb-2">
            <button className='px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed' onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 0}>
              &laquo; 
            </button>

            {Array.from({ length: table.getPageCount() }, (_, i) => i).map(pageNumber => (
              <button
                key={pageNumber}
                onClick={() => {
                  setCurrentPage(pageNumber);
                  fetchClients(pageNumber);
                }}
                className={`px-3 py-1 border border-gray-300 rounded-md text-sm font-medium ${currentPage === pageNumber ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                {pageNumber + 1}
              </button>
            ))}

            <button
              className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => goToPage(currentPage + 1)} disabled={currentPage >= totalPages - 1}>
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
    
  );
}

export default ClientsList
