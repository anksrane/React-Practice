import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { ButtonWithIcon, AddTask, ConfirmTrashModal } from '../index.js'
import { InputSearch, Loader } from '../index.js';
import { IoMdAdd } from "react-icons/io";
import { fetchAllDropdowns } from '../../firebase/dropdownService.js';
import { getAllTaskFirebase } from '../../firebase/getAllTasksWithFilter.js';

import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
  getFilteredRowModel,
  getSortedRowModel,
} from '@tanstack/react-table';


function Tasks() {
    const [tasksData, setTasksData] = useState([]);
    const [loadingTasks, setLoadingTasks] = useState(true);
    const [loadingDropdowns, setLoadingDropdowns] = useState(true);
    const [showAddTaskModal, setShowAddTaskModal] = useState(false);
    const [singleTask, setSingleTask] = useState({});
    const [editingMode,setEditingMode]= useState(false);
    const [showDeleteModal,setShowDeleteModal] = useState(false);
    const [deleteData, setDeleteData] = useState({});

    const [sorting,setSorting]=useState([]);
    const [globalFilter,setGlobalFilter]=useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize] = useState(10);
    const [cursors, setCursors] = useState([null]); 
    const [searchText,setSearchText]=useState('');
    const [hasMorePages, setHasMorePages] = useState(false);
    const [filters, setFilters] = useState({
      phase: '',
      status: '',
      priority: '',
      trash: false
    });

    const [dropdowns, setDropdowns] = useState({
        taskPhases: [],
        taskPriorities: [],
        statuses: []
    });

    // Fetch all dropdown options
    useEffect(() => {
        const getDropdownData = async () => {
          setLoadingDropdowns(true);
            try {
                const data = await fetchAllDropdowns();
                setDropdowns(data);
            } catch (error) {
                console.error("Error fetching dropdown data:", error);
                setDropdowns({ taskPhases: [], taskPriorities: [], statuses: [] });
            } finally {
              setLoadingDropdowns(false);
            }
        };
        getDropdownData();
    }, []);    

    // Fetch all task with data
    const fetchTasksWith = useCallback(async (customFilters = filters, targetPage = currentPage) => {
      setLoadingTasks(true);

      const sortBy = sorting[0]?.id || 'created_at';
      const sortOrder = sorting[0]?.desc ? 'desc' : 'asc';

      // Get the cursor for the targetPage (which means to start *after* this document)
      const cursorForQuery = cursors[targetPage] || null      

      const response = await getAllTaskFirebase(
        searchText,
        customFilters,
        sortBy,
        sortOrder,
        pageSize,
        cursorForQuery,
        dropdowns.taskPhases, 
        dropdowns.taskPriorities,
        dropdowns.statuses     
      );

      if (response.success) {
        setTasksData(response.data);
        setHasMorePages(response.hasMore);
        if (response.nextCursor && cursors.length === targetPage + 1) {
          setCursors(prev => [...prev, response.nextCursor]);
        }     
      } else {
        console.error("Failed to fetch tasks:", response.error);
        setTasksData([]); 
        setHasMorePages(false);
      }

      setLoadingTasks(false);
    },[filters, sorting, searchText, pageSize, cursors, currentPage, dropdowns]);


    useEffect(() => {
      // Only fetch tasks if dropdowns are loaded (or if they are empty, which is a valid state)
      if (!loadingDropdowns) {
          fetchTasksWith(filters);
      }
    }, [searchText, sorting, filters, currentPage, fetchTasksWith, loadingDropdowns]);

    const columnHelper=createColumnHelper();
    const columns = [
        columnHelper.accessor('client',{
            header: 'client',
            cell: info => info.getValue(),
            enableSorting: true,
            enableGlobalFilter: true
        }),      
        columnHelper.accessor('title',{
            header: 'Title',
            cell: info => info.getValue(),
            enableSorting: false,
            enableGlobalFilter: true
        }),
        columnHelper.accessor('taskStatusLabel',{
            header: 'Status',
            cell: info => {
            // Example of custom cell rendering with Tailwind for status colors
            const status = info.getValue();
            let statusClass = '';
            switch (status) {
                case 'Pending':
                  statusClass = 'bg-yellow-200 text-yellow-800';
                break;

                case 'In-Progress':
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
        columnHelper.accessor('taskPhaseLabel',{
            header: 'Phase',
            cell: info => info.getValue(),
            enableSorting: true,
            enableGlobalFilter: true
        }),
        columnHelper.accessor('priorityLabel',{
            header: 'Priority',
            cell: info => info.getValue(),
            enableSorting: true,
            enableGlobalFilter: true
        }),
        columnHelper.accessor('endDate',{
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
                  onClick={() => {
                      setSingleTask(props.row.original); // Set task for editing
                      setEditingMode(true);
                      setShowAddTaskModal(true);
                  }}
                >
                Edit
                </button>
                <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs"
                  onClick={() => {
                    // alert(`Deleting task: ${props.row.original.id}`)
                    setDeleteData(props.row.original);
                    setShowDeleteModal(true);
                  }}
                >
                Delete
                </button>
            </div>
            ),
            enableSorting: false,
            enableGlobalFilter: false,
        }),    
    ];

    const table = useReactTable({
        data: tasksData,
        columns: columns,
        state: {
            sorting,
            globalFilter,
            pagination: {
                pageIndex: currentPage,
                pageSize: pageSize
            }
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        // Manual pagination settings
        manualPagination: true,
        pageCount: hasMorePages ? currentPage + 2 : currentPage + 1, // Dynamically determines page count
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(), // This is for client-side filtering on `tasksData`
    });

    const pageCount = table.getPageCount(); 
      
    const pageNumbers = useMemo(() => {
        const numbers = [];
        const maxVisiblePages = 3; 

        if (pageCount === 0) {
            return [];
        }

        let startPage;
        if (currentPage < Math.floor(maxVisiblePages / 2)) {
            startPage = 0;
        } else if (currentPage > pageCount - 1 - Math.ceil(maxVisiblePages / 2)) {
            startPage = Math.max(0, pageCount - maxVisiblePages);
        } else {
            startPage = currentPage - Math.floor(maxVisiblePages / 2);
        }

        for (let i = 0; i < maxVisiblePages; i++) {
            const pageNum = startPage + i;
            if (pageNum < pageCount) {
                numbers.push(pageNum);
            }
        }
        return numbers;
    }, [currentPage, pageCount]);

    const handleClearSearch = () => {
        setSearchText('');
        setGlobalFilter(''); // Clears client-side filter
    };    

    // const handleFilterChange = (filterName, value) => {
    //     // Reset current page and cursors when filters change to start from beginning
    //     setCurrentPage(0);
    //     setCursors([null]);
    //     setFilters(prev => {
    //         const updated = { ...prev, [filterName]: value };
    //         fetchTasksWith(updated);
    //         return updated;
    //     });
    // };

    const addIcon=<IoMdAdd />;  

    return (
    <>

    {showAddTaskModal && (

      <AddTask 
        onClose={() => setShowAddTaskModal(false)} 
        show={showAddTaskModal} 
        singleTask= {singleTask}
        editingMode={editingMode}
        onTaskAdded={() => fetchTasksWith(filters)} 
        taskPhasesOptions={dropdowns.taskPhases} // Pass as prop
        taskPrioritiesOptions={dropdowns.taskPriorities} // Pass as prop
        statusesOptions={dropdowns.statuses} // Pass as prop
      />
    )}
    
    {showDeleteModal && (
      <ConfirmTrashModal
       onClose={()=>setShowDeleteModal(false)}
       deleteData={deleteData}
       onTaskAdded={() => fetchTasksWith(filters)}
       />
    )}

    <div className="mx-auto p-4 z-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Task List</h2>
      
      <div>
          {/* Add Task Button */}
          <ButtonWithIcon icon={addIcon} iconClass={'text-xl font-bold'} iconPosition="left" variant="primary" className='text-sm mt-0' 
          onClick={()=>{
            setShowAddTaskModal(true);
            setEditingMode(false);
            setSingleTask(null);
            }}>
            Add Task
          </ButtonWithIcon>        
        {/* Global Search Input */}
        <div className="mb-4 flex items-end justify-between">

          <div className='flex gap-1'>
            <select
              className="border px-2 py-1 text-sm rounded"
              value={filters.phase}
              // onChange={(e) => setFilters(prev => ({ ...prev, phase: e.target.value }))}
              onChange={(e) => {
                const newPhase = e.target.value;
                setFilters(prev => {
                  const updated = { ...prev, phase: newPhase };
                  fetchTasksWith(updated);
                  return updated;
                });
              }}              
            >
              <option value="">All Phases</option>
              {dropdowns.taskPhases.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>

            <select
              className="border px-2 py-1 text-sm rounded"
              value={filters.status}
              // onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
              onChange={(e) => {
                const newStatus = e.target.value;
                setFilters(prev => {
                  const updated = { ...prev, status: newStatus };
                  fetchTasksWith(updated); 
                  return updated;
                });
              }}              
            >
              <option value="">All Status</option>
              {dropdowns.statuses.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>

            <select
              className="border px-2 py-1 text-sm rounded"
              value={filters.priority}
              // onChange={(e) => setFilters(prev => ({ ...prev, priority: e.target.value }))}
              onChange={(e) => {
                const newPriority = e.target.value;
                setFilters(prev => {
                  const updated = { ...prev, priority: newPriority };
                  fetchTasksWith(updated); 
                  return updated;
                });
              }}                 
            >
              <option value="">All Priorities</option>
              {dropdowns.taskPriorities.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          {/* Input Search New*/}
          <InputSearch 
            type="text" 
            placeholder="Search all tasks..." 
            value={searchText} 
            onChange={e=>setSearchText(e.target.value)} 
            onSearch={(value)=>setGlobalFilter(value)} 
            onClear={handleClearSearch}
            showClear={true}
          />        
        </div>
        {loadingTasks || loadingDropdowns ?(
          <div className="flex justify-center items-center h-40">
            <Loader color='text-blue' />
          </div>
        ) :
        (
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
        )}


        {/* Pagination Controls */}
        <div className="flex items-center justify-center flex-col sm:flex-row sm:justify-between flex-wrap mt-4">
          <div className="text-sm text-gray-700 mb-2 hidden sm:block">
            Showing <span className="font-semibold">{table.getFilteredRowModel().rows.length}</span> records
          </div>

          <div className="flex items-center gap-2 mb-2">
            {/* Previous Button */}
            <button
              className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              // onClick={() => table.previousPage()}
              onClick={() => {
                setCurrentPage(prev => {
                  const newPage = Math.max(prev - 1, 0);
                  fetchTasksWith(filters, newPage); // fetch that page
                  return newPage;
                });
              }}
              // disabled={!table.getCanPreviousPage()}
              disabled={currentPage === 0}
            >
              &laquo;
            </button>

            {/* Page Numbers */}
            {pageNumbers.map((pageNumber, index) => (
              <React.Fragment key={index}> {/* Use index for keys for ellipses */}
                {typeof pageNumber === 'number' ? (
                  <button
                    onClick={() => {
                      setCurrentPage(pageNumber);
                      fetchTasksWith(filters, pageNumber);
                    }}
                    className={`px-3 py-1 border border-gray-300 rounded-md text-sm font-medium ${currentPage === pageNumber ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-gray-700 hover:bg-gray-50' }`} >
                    {pageNumber + 1} {/* Display 1-indexed page number */}
                  </button>
                ) : (
                  <span className="px-3 py-1 text-gray-700">...</span>
                )}
              </React.Fragment>
            ))}

            <button
              // onClick={() => table.nextPage()}
              onClick={() => {
                setCurrentPage(prev => {
                  const newPage = prev + 1;
                  fetchTasksWith(filters, newPage);
                  return newPage;
                });
              }}
              // disabled={!table.getCanNextPage()}
              disabled={!hasMorePages}
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
    </div>
    </>
    )
}

export default Tasks
