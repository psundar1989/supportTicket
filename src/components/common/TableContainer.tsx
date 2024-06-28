import React, { Fragment, useEffect, useState, useContext } from "react";
import { CardBody, Col, Row, Table } from "reactstrap";
import Link from 'next/link'
import { rankItem } from '@tanstack/match-sorter-utils';
import {
  ProductsGlobalFilter,
  CustomersGlobalFilter,
  OrderGlobalFilter,
  ContactsGlobalFilter,
  CompaniesGlobalFilter,
  LeadsGlobalFilter,
  CryptoOrdersGlobalFilter,
  InvoiceListGlobalSearch,
  TicketsListGlobalFilter,
  NFTRankingGlobalFilter,
  TaskListGlobalFilter,
} from '@/components/common/GlobalSearchFilter';
import {
  Column,
  Table as ReactTable,
  ColumnFiltersState,
  FilterFn,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender
} from '@tanstack/react-table';

// Global Filter
const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [debounce, onChange, value]);

  return (
    <input {...props} value={value} id="search-bar-0" className="form-control search" onChange={e => setValue(e.target.value)} />
  );
};


// Column Filter
const Filter = ({
  column
}: {
  column: Column<any, unknown>;
  table: ReactTable<any>;
}) => {
  const columnFilterValue = column.getFilterValue();

  return (
    <>
      <DebouncedInput
        type="text"
        value={(columnFilterValue ?? '') as string}
        onChange={value => column.setFilterValue(value)}
        placeholder="Check Search..."
        className="border rounded shadow w-36"
        list={column.id + 'list'}
      />
      <div className="h-1" />
    </>
  );
};

interface TableContainerProps {
  columns?: any;
  data?: any;
  isGlobalFilter?: any;
  isProductsFilter?: any;
  isCustomerFilter?: any;
  isOrderFilter?: any;
  isContactsFilter?: any;
  isCompaniesFilter?: any;
  isLeadsFilter?: any;
  isCryptoOrdersFilter?: any;
  isInvoiceListFilter?: any;
  isTicketsListFilter?: any;
  isNFTRankingFilter?: any;
  isTaskListFilter?: any;
  handleTaskClick?: any;
  customPageSize?: any;
  tableClass?: any;
  theadClass?: any;
  trClass?: any;
  thClass?: any;
  divClass?: any;
  SearchPlaceholder?: any;
  handleLeadClick?: any;
  handleCompanyClick?: any;
  handleContactClick?: any;
  handleTicketClick?: any;
  needDatePicker?:any;
  needFilterRightAlign?:boolean;
  needFilter?:boolean;
  create?:boolean;
  setModal?:any;
  button_text?:string;
}


const TableContainer = ({ columns,
    data,
    isGlobalFilter,
    isProductsFilter,
    isCustomerFilter,
    isOrderFilter,
    isContactsFilter,
    isCompaniesFilter,
    isLeadsFilter,
    isCryptoOrdersFilter,
    isInvoiceListFilter,
    isTicketsListFilter,
    isNFTRankingFilter,
    isTaskListFilter,
    customPageSize,
    tableClass,
    theadClass,
    trClass,
    thClass,
    divClass,
    SearchPlaceholder, needDatePicker, needFilterRightAlign=false,
    needFilter,
    create=false,
    setModal,
    button_text=""}: TableContainerProps) => {
      const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value);
    addMeta({
      itemRank
    });
    return itemRank.passed;
  };

  const table = useReactTable({
    columns,
    data,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      columnFilters,
      globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel()
  });

  const {
    getHeaderGroups,
    getRowModel,
    getCanPreviousPage,
    getCanNextPage,
    getPageOptions,
    setPageIndex,
    nextPage,
    previousPage,
    setPageSize,
    getState
  } = table;

  const hideSortIcon=['#',"ticketAction","actionEdit","restore"];
  
  return (
    <Fragment>
      {isGlobalFilter && <Row className="mb-3">
        <CardBody className="border border-dashed border-end-0 border-start-0">
          <form>
            <Row className={`${needFilterRightAlign?"justify-content-end":""}`}>
              {/* <Col lg={2} sm={2}>
              <h5 className="mb-0 card-title flex-grow-1">Support Ticket</h5>
              </Col> */}
              
              <Col sm={5} className={`${needFilterRightAlign?"col-lg-4":""}`}>
                <div className={(isProductsFilter || isContactsFilter || isCompaniesFilter || isNFTRankingFilter) ? "search-box me-2 mb-2 d-inline-block" : "search-box me-2 mb-2 d-inline-block col-12"}>
                  <DebouncedInput
                    value={globalFilter ?? ''}
                    onChange={value => setGlobalFilter(String(value))}
                    placeholder={SearchPlaceholder}
                  />
                  <i className="bx bx-search-alt search-icon"></i>
                </div>
          
       
              </Col>
            
                {isProductsFilter && (
                  <ProductsGlobalFilter />
                )}
                {isCustomerFilter && (
                  <CustomersGlobalFilter />
                )}
                {isOrderFilter && (
                  <OrderGlobalFilter />
                )}
                {isContactsFilter && (
                  <ContactsGlobalFilter />
                )}
                {isCompaniesFilter && (
                  <CompaniesGlobalFilter />
                )}
                {isLeadsFilter && (
                  <LeadsGlobalFilter />
                )}
                {isCryptoOrdersFilter && (
                  <CryptoOrdersGlobalFilter />
                )}
                {isInvoiceListFilter && (
                  <InvoiceListGlobalSearch />
                )}
                {isTicketsListFilter && (
                  <TicketsListGlobalFilter />
                )}
                {isNFTRankingFilter && (
                  <NFTRankingGlobalFilter />
                )}

              {isTaskListFilter && (
                <TaskListGlobalFilter needDatePicker={needDatePicker} needFilter={needFilter}/>
              )}
                    {create && (
                      <div className="col-xxl-2 col-sm-2">
                        						<button
													className="btn btn-primary add-btn me-1 btn-sm-md btn-md-lg btn-lg-xl w-100"
													onClick={(e) => { 
                            e.preventDefault();
                            setModal((prev:boolean)=>!prev);
														// setModal((prev)=>!prev);
														// toggle();
													}}
												>
													{/* <i className="align-bottom ri-add-line me-1"></i> */}
													<i className="ri-add-circle-line"></i>
													{/* {` Create ${createName}`} */} {button_text}
												</button>

                      </div>
						
											)}
            </Row>
          </form>
     
        </CardBody>
      </Row>}


      <div className={divClass}>
        <Table hover className={tableClass}>
        <thead className={theadClass}>
            {getHeaderGroups().map((headerGroup: any) => (
              <tr className={trClass} key={headerGroup.id}>
                {headerGroup.headers.map((header: any) => (
                  <th key={header.id} className={thClass}  {...{
                    onClick: header.column.getToggleSortingHandler(),
                  }}>
                    {header.isPlaceholder ? null : (
                      <div
                      className={`d-flex align-items-center ${header.column.getCanSort()
                        ? 'cursor-pointer select-none'
                        : ''}`
                      }
                      onClick={header.column.getToggleSortingHandler()}
                      title={
                        header.column.getCanSort()
                          ? header.column.getNextSortingOrder() === 'asc'
                            ? 'Sort ascending'
                            : header.column.getNextSortingOrder() === 'desc'
                              ? 'Sort descending'
                              : 'Clear sort'
                          : undefined
                      }
                      >
                        <p className="m-0 pe-1">{flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}</p>
                        
                        {!hideSortIcon.includes(header.id) &&
                        ({
                          // asc:  '▴',
                          // desc: '▾',
                          asc:  <i className="arrow_color ri-arrow-up-line"></i>,
                          desc:  <i className="arrow_color ri-arrow-down-line"></i>,
                        }
                       
                        [header.column.getIsSorted() as string] ?? <i className="arrow_color ri-arrow-up-down-line"></i>)}
                        {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {getRowModel().rows.map((row: any) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell: any) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      <Row className="mt-2 text-center align-items-center g-3 text-sm-start">
        <div className="col-sm">
          <div className="text-muted">Showing<span className="fw-semibold ms-1">{getRowModel().rows.length}</span> of <span className="fw-semibold">{data.length}</span> Results
          </div>
        </div>
        <div className="col-sm-auto">
          <ul className="mb-0 pagination pagination-separated pagination-md justify-content-center justify-content-sm-start">
            <li className={!getCanPreviousPage() ? "page-item disabled" : "page-item"}>
              <Link href="#" className="page-link" onClick={previousPage}>Previous</Link>
            </li>
            {getPageOptions().map((item: any, key: number) => (
              <React.Fragment key={key}>
                <li className="page-item">
                  <Link href="#" className={getState().pagination.pageIndex === item ? "page-link active" : "page-link"} onClick={() => setPageIndex(item)}>{item + 1}</Link>
                </li>
              </React.Fragment>
            ))}
            <li className={!getCanNextPage() ? "page-item disabled" : "page-item"}>
              <Link href="#" className="page-link" onClick={nextPage}>Next</Link>
            </li>
          </ul>
        </div>
      </Row>
    </Fragment>
  )
}

export default TableContainer
