import React, { useState } from "react";
import {
  Col,
  Row,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import Link from "next/link";
import "flatpickr/dist/themes/material_green.css";

import Flatpickr from "react-flatpickr";
import Select from "react-select";

const ProductsGlobalFilter = () => {
  return (
    <div className="col-sm-auto ms-auto">
      <div>
        <Link href="/apps-ecommerce-add-product" className="btn btn-success">
          <i className="align-bottom ri-add-line me-1"></i> Add Product
        </Link>
      </div>
    </div>
  );
};
const CustomersGlobalFilter = () => {
  const [customerStatus, setcustomerStatus] = useState(null);

  function handlecustomerStatus(customerStatus: any) {
    setcustomerStatus(customerStatus);
  }

  const customerstatus = [
    {
      options: [
        { label: "Status", value: "Status" },
        { label: "All", value: "All" },
        { label: "Active", value: "Active" },
        { label: "Block", value: "Block" },
      ],
    },
  ];
  return (
    <Col xl={7}>
      <Row className="g-3">
        <Col sm={4}>
          <div className="">
            <Flatpickr
              className="form-control"
              id="datepicker-publish-input"
              placeholder="Select a date"
              options={{
                altInput: true,
                altFormat: "F j, Y",
                mode: "multiple",
                dateFormat: "d.m.y",
              }}
            
            />
            
          </div>
        </Col>

        <Col sm={4}>
          <div>
            <Select
              value={customerStatus}
              onChange={(e: any) => {
                handlecustomerStatus(e);
              }}
              options={customerstatus}
              name="choices-single-default"
              id="idStatus"
            ></Select>
          </div>
        </Col>

        <Col sm={4}>
          <div>
            <button type="button" className="btn btn-primary w-100">
              {" "}
              <i className="align-bottom ri-equalizer-fill me-2"></i>
              Filters
            </button>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

const OrderGlobalFilter = () => {
  const [orderStatus, setorderStatus] = useState<any>([]);
  const [orderPayement, setorderPayement] = useState<any>(null);

  function handleorderStatus(orderstatus: any) {
    setorderStatus(orderstatus);
  }

  function handleorderPayement(orderPayement: any) {
    setorderPayement(orderPayement);
  }

  const orderstatus: any = [
    {
      options: [
        { label: "Status", value: "Status" },
        { label: "All", value: "All" },
        { label: "Pending", value: "Pending" },
        { label: "Inprogress", value: "Inprogress" },
        { label: "Cancelled", value: "Cancelled" },
        { label: "Pickups", value: "Pickups" },
        { label: "Returns", value: "Returns" },
        { label: "Delivered", value: "Delivered" },
      ],
    },
  ];

  const orderpayement = [
    {
      options: [
        { label: "Select Payment", value: "Select Payment" },
        { label: "All", value: "All" },
        { label: "Mastercard", value: "Mastercard" },
        { label: "Paypal", value: "Paypal" },
        { label: "Visa", value: "Visa" },
        { label: "COD", value: "COD" },
      ],
    },
  ];
  return (
    <React.Fragment>
      <Col sm={6} className="col-xxl-2">
        <div>
          <Flatpickr
            className="form-control"
            id="datepicker-publish-input"
            placeholder="Select a date"
            options={{
              altInput: true,
              altFormat: "F j, Y",
              mode: "multiple",
              dateFormat: "d.m.y",
            }}
          />
        </div>
      </Col>

      <Col sm={4} className="col-xxl-2">
        <div>
          <Select
            value={orderStatus}
            onChange={handleorderStatus}
            options={orderstatus}
            name="choices-single-default"
            id="idStatus"
          ></Select>
        </div>
      </Col>

      <Col sm={4} className="col-xxl-2">
        <div>
          <Select
            value={orderPayement}
            onChange={handleorderPayement}
            options={orderpayement}
            name="choices-payment-default"
            id="idPayment"
          ></Select>
        </div>
      </Col>

      <Col sm={4} className="col-xxl-1">
        <div>
          <button type="button" className="btn btn-primary w-100">
            {" "}
            <i className="align-bottom ri-equalizer-fill me-1"></i>
            Filters
          </button>
        </div>
      </Col>
    </React.Fragment>
  );
};

const ContactsGlobalFilter = () => {
  const [sortBy, setSortBy] = useState<any>(null);

  function handleSortBy(selectedOption: any) {
    setSortBy(selectedOption);
  }

  const sortOptions = [
    {
      options: [
        { label: "Owner", value: "Owner" },
        { label: "Company", value: "Company" },
        { label: "Location", value: "Location" },
      ],
    },
  ];

  return (
    <div className="col-md-auto ms-auto">
      <div className="gap-2 d-flex align-items-center">
        <span className="text-muted">Sort by: </span>
        <Select
          className="mb-0"
          value={sortBy}
          onChange={handleSortBy}
          options={sortOptions}
          id="choices-single-default"
        />
      </div>
    </div>
  );
};

const CompaniesGlobalFilter = () => {
  const [sortBy, setsortBy] = useState("Owner");

  function handlesortBy(sortBy: any) {
    setsortBy(sortBy);
  }

  const sortbyname: any = [
    {
      options: [
        { label: "Owner", value: "Owner" },
        { label: "Company", value: "Company" },
        { label: "Location", value: "Location" },
      ],
    },
  ];
  return (
    <div className="col-md-auto ms-auto">
      <div className="gap-2 d-flex align-items-center">
        <span className="text-muted">Sort by: </span>
        <Select
          className="mb-0"
          value={sortBy}
          onChange={handlesortBy}
          options={sortbyname}
          id="choices-single-default"
        ></Select>
      </div>
    </div>
  );
};

const CryptoOrdersGlobalFilter = () => {
  return (
    <React.Fragment>
      <Col xl={2} md={6}>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <i className="ri-calendar-2-line"></i>
          </span>
          <Flatpickr
            placeholder="Select date"
            className="form-control"
            options={{
              mode: "range",
              dateFormat: "d M, Y",
            }}
          />
        </div>
      </Col>
      <Col xl={2} md={4}>
        <select
          className="form-control"
          data-choices
          data-choices-search-false
          name="choices-single-default"
          id="choices-single-default"
        >
          <option defaultValue="all">Select Type</option>
          <option value="Buy">Sell</option>
          <option value="Sell">Buy</option>
        </select>
      </Col>
      <Col xl={2} md={4}>
        <select
          className="form-control"
          data-choices
          data-choices-search-false
          name="choices-single-default2"
          id="choices-single-default2"
        >
          <option defaultValue="all">Select Status</option>
          <option value="Successful">Successful</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Pending">Pending</option>
        </select>
      </Col>
      <Col xl={1} md={4}>
        <button className="btn btn-success w-100">Filters</button>
      </Col>
    </React.Fragment>
  );
};

const InvoiceListGlobalSearch = () => {
  const [isStatus, setisStatus] = useState(null);

  function handleisStatus(isStatus: any) {
    setisStatus(isStatus);
  }

  const allstatus = [
    {
      options: [
        { label: "Status", value: "Status" },
        { label: "All", value: "All" },
        { label: "Unpaid", value: "Unpaid" },
        { label: "Paid", value: "Paid" },
        { label: "Cancel", value: "Cancel" },
        { label: "Refund", value: "Refund" },
      ],
    },
  ];
  return (
    <React.Fragment>
      <Col sm={4} xxl={3}>
        <Flatpickr
          className="form-control bg-light border-light"
          id="datepicker-publish-input"
          placeholder="Select a date"
          options={{
            altInput: true,
            altFormat: "F j, Y",
            mode: "multiple",
            dateFormat: "d.m.y",
          }}
        />
      </Col>

      <Col sm={4} xxl={3}>
        <div className="input-light">
          <Select
            value={isStatus}
            onChange={handleisStatus}
            options={allstatus}
            name="choices-single-default"
            id="idStatus"
          ></Select>
        </div>
      </Col>

      <Col sm={4} xxl={1}>
        <Button color="primary" className="w-100">
          <i className="align-bottom ri-equalizer-fill me-1"></i> Filters
        </Button>
      </Col>
    </React.Fragment>
  );
};

const TicketsListGlobalFilter = () => {
  return (
    <React.Fragment>
      <Col xxl={3} sm={4}>
        <Flatpickr
          className="form-control"
          placeholder="Select date range"
          options={{
            mode: "range",
            dateFormat: "d M, Y",
          }}
        />
      </Col>
      <Col xxl={3} sm={4}>
        <div className="input-light">
          <select
            className="form-control"
            data-choices
            data-choices-search-false
            name="choices-single-default"
            id="idStatus"
          >
            <option value="">Status</option>
            <option defaultValue="all">All</option>
            <option value="Open">Open</option>
            <option value="Inprogress">Inprogress</option>
            <option value="Closed">Closed</option>
            <option value="New">New</option>
          </select>
        </div>
      </Col>
      <Col xxl={1} sm={4}>
        <button type="button" className="btn btn-primary w-100">
          {" "}
          <i className="align-bottom ri-equalizer-fill me-1"></i>
          Filters
        </button>
      </Col>
    </React.Fragment>
  );
};

const NFTRankingGlobalFilter = () => {
  return (
    <Col xxl={2} sm={4} className="ms-auto">
      <div>
        <select
          className="form-control"
          data-choices
          data-choices-search-false
          name="choices-single-default"
          id="idStatus"
        >
          <option value="All Time" defaultValue="">
            All Time
          </option>
          <option value="1 Day">1 Day</option>
          <option value="7 Days">7 Days</option>
          <option value="15 Days">15 Days</option>
          <option value="1 Month">1 Month</option>
          <option value="6 Month">6 Month</option>
        </select>
      </div>
    </Col>
  );
};

const TaskListGlobalFilter = ({ needDatePicker = true, needFilter = true }) => {
  const [selectMulti, setselectMulti] = useState<any>(null);
  const sortbyMulti = [
    {
      options: [
        { label: "All", value: "All" },
        { label: "Closed", value: "Closed" },
        { label: "Open", value: "Open" },
        { label: "New", value: "New" },
        { label: "Inprogress", value: "Inprogress" },
        { label: "Re-Open", value: "Re-Open" },
        { label: "On-Hold", value: "onhold" },
      ],
    },
  ];
  const customStyles = {
    multiValue: (styles: any, { data }: any) => {
      return {
        ...styles,
        backgroundColor: "#3762ea",
      };
    },
    multiValueLabel: (styles: any, { data }: any) => ({
      ...styles,
      backgroundColor: "#405189",
      color: "white",
    }),
    multiValueRemove: (styles: any, { data }: any) => ({
      ...styles,
      color: "white",
      backgroundColor: "#405189",
      ":hover": {
        backgroundColor: "#405189",
        color: "white",
      },
    }),
  };
  return (
    <React.Fragment>
      {needDatePicker && (
        <div className={`col-xxl-3 col-sm-4`}>
          <Flatpickr
            placeholder="Select date range"
            className="form-control bg-light border-light"
            options={{
              mode: "range",
              dateFormat: "d M, Y",
            }}
          />
        </div>
      )}
      {needFilter && (
        <React.Fragment>
          <div className="col-xxl-3 col-sm-4">
            <div className="input-light">
              <Select
                placeholder="Select Status"
                value={selectMulti}
                isMulti={true}
                onChange={(sortBy: any) => {
                  setselectMulti(sortBy);
                }}
                options={sortbyMulti}
                classNamePrefix="js-example-basic-multiple mb-0"
                styles={customStyles}
              />
            </div>
          </div>

          <div className="col-xxl-1 col-sm-4">
            <button
              type="button"
              className="btn btn-primary w-100 custom_filter_btn"
            >
              <i className="align-bottom ri-equalizer-fill me-1"></i>
              Filters
            </button>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

const LeadsGlobalFilter = ({ onClickDelete }: any) => {
  return (
    <div className="col-sm-auto ms-auto">
      <div className="gap-2 hstack">
        <button className="btn btn-soft-danger" onClick={onClickDelete}>
          <i className="ri-delete-bin-2-line"></i>
        </button>
        <button
          type="button"
          className="btn btn-info"
          //  onClick={toggleInfo}
        >
          <i className="align-bottom ri-filter-3-line me-1"></i> Fliters
        </button>
        <button
          type="button"
          className="btn btn-success add-btn"
          id="create-btn"
          // onClick={() => { setIsEdit(false); toggle(); }}
        >
          <i className="align-bottom ri-add-line me-1"></i> Add Leads
        </button>
        <UncontrolledDropdown>
          <DropdownToggle
            className="btn btn-soft-info btn-icon fs-14"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="ri-settings-4-line"></i>
          </DropdownToggle>
          <DropdownMenu>
            <li>
              <DropdownItem>Copy</DropdownItem>
            </li>
            <li>
              <DropdownItem>Move to pipline</DropdownItem>
            </li>
            <li>
              <DropdownItem>Add to exceptions</DropdownItem>
            </li>
            <li>
              <DropdownItem>Switch to common form view</DropdownItem>
            </li>
            <li>
              <DropdownItem>Reset form view to default</DropdownItem>
            </li>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </div>
  );
};

export {
  ProductsGlobalFilter,
  CustomersGlobalFilter,
  OrderGlobalFilter,
  ContactsGlobalFilter,
  CompaniesGlobalFilter,
  CryptoOrdersGlobalFilter,
  InvoiceListGlobalSearch,
  TicketsListGlobalFilter,
  NFTRankingGlobalFilter,
  TaskListGlobalFilter,
  LeadsGlobalFilter,
};
