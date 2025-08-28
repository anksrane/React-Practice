import React, { useState, useEffect, useMemo  } from 'react';
import { InputSearch, Loader } from '../index.js';
import { useReactTable, createColumnHelper, getCoreRowModel, getPaginationRowModel, flexRender } from '@tanstack/react-table';
import { getClientsWithFilter } from '../../firebase/clientServices/clientsService';

function ClientsList() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddEdit, setShowAddEdit] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);

  const fetchClients = async () => {
    setLoading(true);
    try {
      const result = await getClientsWithFilter({ page, pageSize, search: searchTerm });
      setClients(result.data);
      setTotalRecords(result.total);
    } catch (error) {
      console.error('Failed to fetch clients:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, [page, pageSize, searchTerm]);

  const columnHelper = createColumnHelper();
  const columns = useMemo(() => [
    columnHelper.accessor((row, index) => index + 1 + (page - 1) * pageSize, { header: '#', id: 'srNo' }),
    columnHelper.accessor('label', { header: 'Client Name' }),
    columnHelper.accessor('id', {
      header: 'Actions',
      cell: info => (
        <div className='flex gap-2'>
          <button size="sm" onClick={() => setSelectedClient(info.row.original)}>View</button>
          <button size="sm" onClick={() => { setShowAddEdit(true); setEditingClient(info.row.original); }}>Edit</button>
        </div>
      )
    })
  ], [page, pageSize]);  

  const table = useReactTable({
    data: clients,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    pageCount: Math.ceil(totalRecords / pageSize)
  });  

  return (
    <div className='p-4'>
      <div className='flex justify-between mb-4'>
        <InputSearch
          placeholder="Search Clients..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <Loader color='text-blue' height='h-64' />
      ) : (
        <div className='overflow-x-auto'>
          <table className='w-full table-auto border'>
            <thead className='bg-gray-200'>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id} className='p-2 border'>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className='text-center p-2'>No clients found</td>
                </tr>
              ) : (
                table.getRowModel().rows.map(row => (
                  <tr key={row.id} className='hover:bg-gray-100'>
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id} className='p-2 border'>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination Controls */}
      <div className='flex justify-between mt-2'>
        <div>
          Page {page} of {Math.ceil(totalRecords / pageSize)}
        </div>
        <div className='flex gap-2'>
          <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>Prev</button>
          <button disabled={page >= Math.ceil(totalRecords / pageSize)} onClick={() => setPage(p => p + 1)}>Next</button>
        </div>
      </div>

      {showAddEdit && (
        <AddClient
          editingClient={editingClient}
          onClose={() => { setShowAddEdit(false); fetchClients(); }}
        />
      )}

      {selectedClient && (
        <ViewClient
          viewData={selectedClient}
          onClose={() => setSelectedClient(null)}
        />
      )}
    </div>
  );
}

export default ClientsList
