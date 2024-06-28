import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { Link, useLocation } from "react-router-dom";
// import moment from "moment";

// const handleValidDate = (date:any) => {
//     const date1 = moment(new Date(date)).format("DD MMM Y");
//     return date1;
// };

const OrdersId = (cell: any) => {
  return (
    <React.Fragment>
      <Link href="/apps-tasks-details" className="fw-medium link-primary">
        {cell.getValue()}
      </Link>
    </React.Fragment>
  );
};

const Title = (cell: any) => {
  return <React.Fragment>{cell.getValue()}</React.Fragment>;
};

const Client = (cell: any) => {
  return <React.Fragment>{cell.getValue()}</React.Fragment>;
};

const Project = (cell: any) => {
  const pathname = usePathname();
  const getPath = pathname == "/";
  return (
    <div className={`${getPath ? "smtable_title_ellipsis" : ""}`}>
      <Link href="/apps-projects-overview" className="fw-medium link-primary ">
        {cell.getValue()}
      </Link>
    </div>
  );
};

const Tasks = (cell: any, onEditIconClick: any, onDeleteIconClick: any) => {
  return (
    <div className="d-flex">
      <div className="flex-grow-1 tasks_name">{cell.getValue()}</div>
      <div className="flex-shrink-0 ms-4">
        <ul className="mb-0 list-inline tasks-list-menu">
          <li className="list-inline-item">
            <Link href="/apps-tasks-details">
              <i className="align-bottom ri-eye-fill me-2 text-muted"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link href="#" onClick={onEditIconClick}>
              <i className="align-bottom ri-pencil-fill me-2 text-muted"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link
              href="#"
              className="remove-item-btn"
              onClick={onDeleteIconClick}
            >
              <i className="align-bottom ri-delete-bin-fill me-2 text-muted"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const CreateBy = (cell: any) => {
  const pathname=usePathname();
  const getPath=pathname=='/';
  return (
      <div className={`${getPath?"db_table_title_ellipsis":"table_title_ellipsis"}`}>
          {cell.getValue()}
      </div>
  );
};

const AssignedTo = (cell: any) => {
  return (
    <div className="avatar-group">
      {(cell.getValue() || []).map((item: any, index: any) => (
        <Link key={index} href="#" className="avatar-group-item">
          <img src={item.img} alt="" className="rounded-circle avatar-xxs" />
        </Link>
      ))}
    </div>
  );
};

const AssignedTicketTo = (cell: any) => {
  return <React.Fragment>{cell.getValue()}</React.Fragment>;
};

// const CreateDate = (cell:any) => {
//     return (
//         <React.Fragment>
//             {handleValidDate(cell.getValue())}
//         </React.Fragment>
//     );
// };

// const DueDate = (cell:any) => {
//     return (
//         <React.Fragment>
//             {handleValidDate(cell.getValue())}
//         </React.Fragment>
//     );
// };

const Status = (cell: any) => {
  return (
    <React.Fragment>
      {cell.getValue() === "Inprogress" ? (
        <span className="badge bg-secondary-subtle text-secondary text-uppercase">
          {cell.getValue()}
        </span>
      ) : cell.getValue() === "Open" ? (
        <span className="badge bg-success-subtle text-success text-uppercase">
          {cell.getValue()}
        </span>
      ) : cell.getValue() === "Closed" ? (
        <span className="badge bg-danger-subtle  text-danger text-uppercase">
          {cell.getValue()}
        </span>
      ) : cell.getValue() === "New" ? (
        <span className="badge bg-info-subtle text-info text-uppercase">
          {cell.getValue()}
        </span>
      ) : cell.getValue() === "Completed" ? (
        <span className="badge bg-success-subtle text-success text-uppercase">
          {cell.getValue()}
        </span>
      ) : cell.getValue() === "Pending" ? (
        <span className="badge bg-warning-subtle text-warning text-uppercase">
          {cell.getValue()}
        </span>
      ) : cell.getValue() === "Active" ? (
        <span className="badge bg-success-subtle text-success text-uppercase">
          {cell.getValue()}
        </span>
      ) : cell.getValue() === "Inactive" ? (
        <span className="badge bg-danger-subtle text-danger text-uppercase">
          {cell.getValue()}
        </span>
      ) : cell.getValue() === "On-hold" ? (
        <span className="badge bg-warning text-white text-uppercase">
          {cell.getValue()}
        </span>
      ) : cell.getValue() === "Re-open" ? (
        <span className="badge bg-secondary text-white text-uppercase">
          {cell.getValue()}
        </span>
      ) : cell.getValue() === "toggle" ? (
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="SwitchCheck4"
          />
        </div>
      ) : null}
    </React.Fragment>
  );
};

const Priority = (cell: any) => {
  return (
    <React.Fragment>
      {cell.getValue() === "Medium" ? (
        <span className="badge bg-warning text-uppercase">
          {cell.getValue()}
        </span>
      ) : cell.getValue() === "High" ? (
        <span className="badge bg-danger text-uppercase">
          {cell.getValue()}
        </span>
      ) : cell.getValue() === "Low" ? (
        <span className="badge bg-success text-uppercase">
          {cell.getValue()}
        </span>
      ) : null}
    </React.Fragment>
  );
};

export {
  OrdersId,
  Project,
  Tasks,
  CreateBy,
  AssignedTo,
  Status,
  Priority,
  Title,
  Client,
  AssignedTicketTo,
};
