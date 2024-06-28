"use client";
import React, { useState, useMemo, useCallback } from "react";
import Link from "next/link";

import {
  Button,
  ModalHeader,
  Form,
  Modal,
  Col,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import Image from "next/image";
import StatusToggle from "./StatusToggle";
import AssignTo from "./AssignTo";

import {
  OrdersId,
  Project,
  CreateBy,
  Status,
  Priority,
  Client,
  AssignedTicketTo,
} from "./TaskListCol";

import TableContainer from "./TableContainer";

interface Cell {
  row: {
    id: string;
  };
}

const ReusableTable = ({
  header = false,
  data,
  title,
  id,
  create = false,
  button_text = "Create",
  needDatePicker = true,
  needFilterRightAlign,
  assign_project_btn = false,
  import_file_btn = false,
  import_btn_tx = "Import File",
  needFilter,
  children,
  create_btn,
}: any) => {
  const [assignmentState, setAssignmentState] = useState<{
    [key: string]: { assignVal: string; closebtn: boolean };
  }>({});

  // Delete Modal
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [deleteModalMulti, setDeleteModalMulti] = useState<boolean>(false);
  const [task, setTask] = useState<any>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [modal, setModal] = useState<boolean>(false);

  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
      //setTask(null);
    } else {
      setModal(true);
    }
  }, [modal]);

  //handle assign
  const handleAssign = (
    cellId: string,
    value: string,
    closeBtnState: boolean
  ) => {
    setAssignmentState((prev) => ({
      ...prev,
      [cellId]: { assignVal: value, closebtn: closeBtnState },
    }));
  };

  // Update Data
  const handleCustomerClick = useCallback(
    (arg: any) => {
      const task = arg;

      setTask({
        id: task.id,
        taskId: task.taskId,
        project: task.project,
        task: task.task,
        creater: task.creater,
        // dueDate: task.dueDate,
        status: task.status,
        priority: task.priority,
        subItem: task.subItem,
      });

      setIsEdit(true);
      toggle();
    },
    [toggle]
  );

  // Checked All
  const checkedAll = useCallback(() => {
    const checkall: any = document.getElementById(`checkBoxAll${id}`);
    const ele = document.querySelectorAll(`.taskCheckBox${id}`);

    if (checkall.checked) {
      ele.forEach((ele: any) => {
        ele.checked = true;
      });
    } else {
      ele.forEach((ele: any) => {
        ele.checked = false;
      });
    }
    deleteCheckbox();
  }, []);

  // Delete Data
  const onClickDelete = (task: any) => {
    setTask(task);
    setDeleteModal(true);
  };

  // Delete Checkbox
  const deleteCheckbox = () => {
    const ele = document.querySelectorAll(`.taskCheckBox${id}:checked`);
    ele.length > 0
      ? setIsMultiDeleteButton(true)
      : setIsMultiDeleteButton(false);
    setSelectedCheckBoxDelete(ele);
  };

  // Delete Multiple
  const [selectedCheckBoxDelete, setSelectedCheckBoxDelete] = useState<any>([]);
  const [isMultiDeleteButton, setIsMultiDeleteButton] =
    useState<boolean>(false);

  // const dispatch: any = useDispatch();

  const deleteMultiple = () => {
    const checkall: any = document.getElementById(`checkBoxAll${id}`);
    selectedCheckBoxDelete.forEach((element: any) => {
      // dispatch(deleteTask(element.value));
      setTimeout(() => {
        // toast.clearWaitingQueue();
      }, 3000);
    });
    setIsMultiDeleteButton(false);
    checkall.checked = false;
  };

  const mainCol = [
    //Starting Common Data Start
    {
      header: (
        <input
          type="checkbox"
          id={`checkBoxAll${id}`}
          className="form-check-input"
          onClick={() => checkedAll()}
        />
      ),
      cell: (cell: any) => {
        return (
          <input
            type="checkbox"
            className={`taskCheckBox${id} form-check-input`}
            value={cell.getValue()}
            onChange={() => deleteCheckbox()}
          />
        );
      },
      id: "#",
      accessorKey: "id",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "SI.No.",
      accessorKey: "s_no",
      enableColumnFilter: false,
      cell: (cell: any) => {
        console.log("cell", cell.getValue());
        return <p>{cell.getValue()}</p>;
      },
    },
    {
      header: "Name",
      accessorKey: "name",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return (
          <React.Fragment>
            <div className="tasks_name">{cell.getValue()}</div>
          </React.Fragment>
        );
      },
    },

    //Starting Common Data End

    //Announcement Data Start
    {
      header: "Announcement ID",
      accessorKey: "announcement_id",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <div>{cell.getValue()}</div>;
      },
    },
    //Announcement Data End

    //Title Data Start
    {
      header: "Title",
      accessorKey: "title",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <div className="table_title_ellipsis">{cell.getValue()}</div>;
      },
    },
    {
      header: "Start Date",
      accessorKey: "start_date",
      enableColumnFilter: false,
      cell: (cell: any) => <div>{cell.getValue()}</div>,
    },
    {
      header: "End Date",
      accessorKey: "end_date",
      enableColumnFilter: false,
      cell: (cell: any) => <div>{cell.getValue()}</div>,
    },
    {
      header: "Selected Day",
      accessorKey: "selected_day",
      enableColumnFilter: false,
      cell: (cell: any) => <div>{cell.getValue()}</div>,
    },
    //Title Data End

    //Glopal Tickets Start
    {
      header: "Ticket ID",
      accessorKey: "ticketId",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <OrdersId {...cell} />;
      },
    },
    {
      header: "Ticket Details",
      accessorKey: "ticket_details",
      enableColumnFilter: false,
      cell: (cell: any) => {
        let ele = cell.getValue(),
          colorSelection: string = "";

        if (ele.priority) {
          colorSelection = ele.priority.toLowerCase();
        }

        interface ColorJsonType {
          critical: string;
          high: string;
          medium: string;
          low: string;
        }

        const colorJson: ColorJsonType = {
          critical: "#f7284a",
          high: "#ef4eb8",
          medium: "#fbc518",
          low: "#0dcd94",
        };

        const color = colorJson[colorSelection as keyof ColorJsonType] || "";

        return (
          <div className="ticket_detail" key={ele.id}>
            <Link href="#" className="ticket_title">
              {ele.title}
            </Link>
            <ul className="ticket_details list_styletype_none d-flex gap-4">
              <li className="test">
                <i className="ri-calendar-event-fill"></i>
                <span className="ticket_date">{ele.date}</span>
              </li>
              <li
                className={`vertical_line ${colorSelection}`}
                style={{ "--color": color } as React.CSSProperties}
              >
                <span className="custom_dot"></span>
                <span className="d-inline-block priority_status">
                  {ele.priority}
                </span>
              </li>
              <li className="vertical_line">
                <i className="ri-gallery-view-2"></i>
                <span className="ticket_cat">{ele.category}</span>
              </li>
              <li className="vertical_line">
                <i className="ri-time-line"></i>
                <span className="ticket_date">{ele.year}</span>
              </li>
            </ul>
          </div>
        );
      },
    },

    {
      header: "Ticket Details",
      accessorKey: "ticket_detail",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <div className="tasks_name">{cell.getValue()}</div>;
      },
    },
    {
      header: "User",
      accessorKey: "custom_user",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <div>{cell.getValue()}</div>;
      },
    },
    {
      header: "Assigned To",
      accessorKey: "assigned",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <AssignedTicketTo {...cell} />;
      },
    },
    {
      header: "Assign To",
      accessorKey: "assignto",
      enableColumnFilter: false,
      cell: (cell: any) => {
        const val = cell.getValue();
        const cellId = cell.row.id;
        const currentState = assignmentState[cellId] || {
          assignVal: "Assign",
          closebtn: false,
        };

        // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
        return (
          <section className="assign_btn">
            <UncontrolledDropdown group>
              {currentState.closebtn ? (
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <DropdownToggle color="primary" outline caret>
                    {currentState.assignVal}
                  </DropdownToggle>
                  <button
                    type="button"
                    className="btn btn-primary btn-outline fs-16"
                    onClick={() => handleAssign(cellId, "Assign", false)}
                  >
                    x
                  </button>
                </div>
              ) : (
                <DropdownToggle color="primary" outline caret>
                  {currentState.assignVal}
                </DropdownToggle>
              )}
              <DropdownMenu>
                <DropdownItem
                  onClick={() => {
                    handleAssign(cellId, "admin (Self)", true);
                    // setIsModalOpen(false);
                  }}
                >
                  {val.label1}
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    //handleAssign(cellId, 'Other Assign', true);
                    toggleModal();
                  }}
                >
                  {val.label2}
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </section>
        );
      },
    },
    {
      header: "Assigned By",
      accessorKey: "assignedby",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <Project {...cell} />;
      },
    },
    {
      header: "Assigned To",
      accessorKey: "assignedto",
      enableColumnFilter: false,
      cell: (cell: any) => {
        const assigned = cell
          ?.getValue()
          ?.map((item: any) => (item.img ? item.img : item));
        return (
          <div className="avatar-group">
            {assigned?.map((item: any, index: any) => (
              <Link key={index} href="#" className="avatar-group-item">
                <Image src={item} alt="" className="rounded-circle avatar-xxs" />
              </Link>
            ))}
          </div>
        );
      },
    },
    {
      header: "Restore",
      accessorKey: "restore",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return (
          <div className="avatar-group">
            <button type="button" className="btn btn-soft-primary btn-sm">
              Restore
            </button>
          </div>
        );
      },
    },
    //Glopal Tickets End

    //Customer Data Start
    {
      header: "Name",
      accessorKey: "customer_name",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return (
          <div className="d-flex">
            <div className="flex-grow-1 tasks_name">{cell.getValue()}</div>
            <span className="badge bg-success-subtle text-success text-uppercase">
              LoggedIn
            </span>
          </div>
        );
      },
    },

    // customer_name_email
    {
      header: "Name",
      accessorKey: "customer_name_email",
      enableColumnFilter: false,
      cell: (cell: any) => {
        let datas = cell.getValue();
        return (
          <div className="d-flex justify-content-between">
            {/* <div className="flex-grow-1 tasks_name">
	
							</div> */}
            {/* <span className="badge bg-success-subtle text-success text-uppercase">
								LoggedIn
							</span> */}
            <div className="name_w_email">
              <h5>{datas.customer_name}</h5>
              <div className="email_w_btn d-flex gap-2">
                <div className="badge_wrap">
                  <button className="badge badge_success text-white border-0 login_as_btn">
                    Login as
                  </button>
                </div>
                <a className="m-0" href={`mailto:${datas.customer_email}`}>
                  {datas.customer_email}
                </a>
              </div>
            </div>
          </div>
        );
      },
    },

    {
      header: "User Type",
      accessorKey: "user_type",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <div className="">{cell.getValue()}</div>;
      },
    },
    {
      header: "Verification",
      accessorKey: "verification",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <Project {...cell} />;
      },
    },
    {
      header: "Register Date",
      accessorKey: "register_date",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <div className="">{cell.getValue()}</div>;
      },
    },
    //Customer Data End
    {
      header: "Title",
      accessorKey: "article_title",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <div className="tasks_name">{cell.getValue()}</div>;
      },
    },
    {
      header: "Category Name",
      accessorKey: "category_name",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <Project {...cell} />;
      },
    },
    {
      header: "Client",
      accessorKey: "client",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <Client {...cell} />;
      },
    },
    {
      header: "User Type",
      accessorKey: "usertype",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <Project {...cell} />;
      },
    },

    {
      header: "Customer",
      accessorKey: "customer",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <Project {...cell} />;
      },
    },
    {
      header: "Subject",
      accessorKey: "subjects",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <Project {...cell} />;
      },
    },
    {
      header: "Subject",
      accessorKey: "subject",
      enableColumnFilter: false,
      cell: (cell: any) => {
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
                  <Link
                    href="#"
                    onClick={() => {
                      const taskData = cell.row.original;
                      handleCustomerClick(taskData);
                    }}
                  >
                    <i className="align-bottom ri-pencil-fill me-2 text-muted"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    href="#"
                    className="remove-item-btn"
                    onClick={() => {
                      const taskData = cell.row.original;
                      onClickDelete(taskData);
                    }}
                  >
                    <i className="align-bottom ri-delete-bin-fill me-2 text-muted"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        );
      },
    },
    {
      header: "Subject",
      accessorKey: "Subject",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return (
          <React.Fragment>
            <div>Department 1</div>
          </React.Fragment>
        );
      },
    },
    {
      header: "Name of Request",
      accessorKey: "req",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <CreateBy {...cell} />;
      },
    },

    {
      header: "Create Date",
      accessorKey: "createDate",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <p>{cell.getValue()}</p>;
      },
    },
    {
      header: "Due Date",
      accessorKey: "dueDate",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <p>{cell.getValue()}</p>;
      },
    },
    {
      header: "Created Date",
      accessorKey: "created_date",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <p className="created_date_data">{cell.getValue()}</p>;
      },
    },

    {
      header: "Last Update Date",
      accessorKey: "updated_date",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <p className="last_updated_data">{cell.getValue()}</p>;
      },
    },
    // {
    // 	header: 'Register Date',
    // 	accessorKey: 'registerDate',
    // 	enableColumnFilter: false,
    // 	cell: (cell: any) => {
    // 		return <DueDate {...cell} />;
    // 	},
    // },
    {
      header: "Privacy Mode",
      accessorKey: "privacy_mode",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <Status {...cell} />;
      },
    },

    {
      header: "Priority",
      accessorKey: "priority",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <Priority {...cell} />;
      },
    },

    //Deaparment data start
    {
      header: "Department Id",
      accessorKey: "department_id",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <div>{cell.getValue()}</div>;
      },
    },
    {
      header: "Department Name",
      accessorKey: "department_name",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <div>{cell.getValue()}</div>;
      },
    },
    {
      header: "Description",
      accessorKey: "description",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <Project {...cell} />;
      },
    },
    {
      header: "Category Name",
      accessorKey: "category_names",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <Project {...cell} />;
      },
    },
    //Deaparment data End

    //Project data Start
    {
      header: "Project Name",
      accessorKey: "project_name",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return <div>{cell.getValue()}</div>;
      },
    },

    //Project data End

    //Common Data Start
    {
      header: "Status",
      accessorKey: "status",
      enableColumnFilter: false,
      cell: (cell: Cell) => {
        return <Status {...cell} />;
      },
    },
    {
      header: "Status",
      accessorKey: "status_toggle",
      enableColumnFilter: false,
      cell: (cell: boolean) => {
        return (
          <StatusToggle cell={cell} />
        );
      },
    },
    {
      header: "Actions",
      accessorKey: "actions",
      enableColumnFilter: false,
      cell: (cell: Cell) => {
        return (
          <div className="hstack gap-3 flex-wrap">
            <Link href="#" className="link-success fs-15">
              <i className="ri-edit-2-line"></i>
            </Link>
            <Link href="#" className="link-danger fs-15">
              <i className="ri-delete-bin-line"></i>
            </Link>
          </div>
        );
      },
    },
    {
      header: "Actions",
      accessorKey: "actionEdit",
      enableColumnFilter: false,
      cell: (cell: Cell) => {
        const cellId: string = cell.row.id;
        return (
          <div className="hstack gap-3 flex-wrap">
            <Link
              href={`/email-templates/id=${cellId}`}
              className="link-success fs-15"
            >
              <i className="ri-edit-2-line"></i>
            </Link>
          </div>
        );
      },
    },
    {
      header: "Action",
      accessorKey: "actionskey",
      enableColumnFilter: false,
      cell: (cell: any) => {
        const val = cell.getValue();
        return (
          <section>
            <div className="flex-wrap gap-3 hstack">
              <Link href={""} className="link-success fs-15">
                <i className="ri-edit-2-line"></i>
              </Link>
              {val == "info" && (
                <Link href={""} className="link-success fs-15">
                  {" "}
                  <i className="align-bottom ri-eye-fill me-2 text-muted"></i>
                </Link>
              )}
              <Link href={""} className="link-danger fs-15">
                <i className="ri-delete-bin-line"></i>
              </Link>
            </div>
          </section>
        );
      },
    },
    {
      header: "Actions",
      accessorKey: "ticketAction",
      enableColumnFilter: false,
      cell: (cell: any) => {
        const val = cell.getValue();
        return (
          <UncontrolledDropdown>
            <DropdownToggle tag="a" className="btn btn-soft-secondary btn-sm">
              <i className="ri-more-fill align-middle"></i>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              {val !== "categoryAction" && (
                <li>
                  <DropdownItem href={`${cell.getValue()?.view_link}`}>
                    <i className="ri-eye-fill align-bottom me-2 text-muted"></i>
                    View
                  </DropdownItem>
                </li>
              )}
              <li>
                <DropdownItem
                  className="edit-item-btn"
                  href="#showModal"
                  data-bs-toggle="modal"
                >
                  <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                  Edit
                </DropdownItem>
              </li>
              <li>
                <DropdownItem
                  className="remove-item-btn"
                  data-bs-toggle="modal"
                  href="#deleteOrder"
                  onClick={() => {
                    const ticketData = cell.row.original;
                    onClickDelete(ticketData);
                  }}
                >
                  <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                  Delete
                </DropdownItem>
              </li>
            </DropdownMenu>
          </UncontrolledDropdown>
        );
      },
    },
    {
      header: "Actions",
      accessorKey: "ticketActions",
      enableColumnFilter: false,
      cell: (cell: any) => {
        return (
          <UncontrolledDropdown>
            <DropdownToggle tag="a" className="btn btn-soft-secondary btn-sm">
              <i className="ri-more-fill align-middle"></i>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              <Link href={`${cell.getValue()?.view_link}`}>
                <DropdownItem>
                  <i className="ri-eye-fill align-bottom me-2 text-muted"></i>
                  View
                </DropdownItem>
              </Link>
              <Link href="/apps-chat">
                <DropdownItem
                  className="remove-item-btn"
                  data-bs-toggle="modal"
                >
                  <i className="ri-message-3-line align-bottom me-2 text-muted"></i>
                  Chat
                </DropdownItem>
              </Link>
              <li>
                <DropdownItem
                  className="edit-item-btn"
                  href="#showModal"
                  data-bs-toggle="modal"
                >
                  <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                  Edit
                </DropdownItem>
              </li>
              <li>
                <DropdownItem
                  className="remove-item-btn"
                  data-bs-toggle="modal"
                  href="#deleteOrder"
                  onClick={() => {
                    const ticketData = cell.row.original;
                    onClickDelete(ticketData);
                  }}
                >
                  <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                  Delete
                </DropdownItem>
              </li>
            </DropdownMenu>
          </UncontrolledDropdown>
        );
      },
    },

    //Common Data End
  ];

  const filteredColumn = mainCol?.filter((col) => {
    return data?.some((dataObj: object) =>
      Object.keys(dataObj).includes(col.accessorKey)
    );
  });
  //console.log(assignmentState)
  const columns = useMemo(() => filteredColumn, [checkedAll, assignmentState]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <div className="reusable_table_wrap">
      <div className="col-lg-12">
        <Col lg={12}>
          <div className="card" id="tasksList">
            {header ? (
              <div className="border-0 card-header">
                <div
                  className="d-flex align-items-center"
                  style={{ minHeight: "40px" }}
                >
                  <h5 className="mb-0 card-title flex-grow-1">{title}</h5>

                  <div className="flex-shrink-0">
                    <div className="flex-wrap gap-2 d-flex">
                      {title === "Article list" && (
                        <button
                          className="btn btn-primary add-btn me-1"
                          onClick={() => {
                            setIsEdit(false);
                            toggle();
                          }}
                        >
                          <i className="align-bottom ri-add-line me-1"></i>{" "}
                          {create_btn}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
              <div className="card-body pt-0">
                {data?.length ? (
                  <TableContainer
                    columns={columns}
                    data={data}
                    isGlobalFilter={true}
                    customPageSize={10}
                    divClass="table-responsive table-card mb-3"
                    tableClass="align-middle table-nowrap mb-0"
                    theadClass="table-light text-muted"
                    isTaskListFilter={true}
                    SearchPlaceholder="Search ..."
                    needDatePicker={needDatePicker}
                    needFilterRightAlign={needFilterRightAlign}
                    needFilter={needFilter}
                    create={create}
                    setModal={setModal}
                    button_text={button_text}
                  />
                ) : (
                  // <Loader error={error} />
                  <></>
                )}
                {/* <ToastContainer closeButton={false} limit={1} /> */}
              </div>
          </div>
        </Col>
      </div>
      {/* <Modal
				isOpen={modal}
				toggle={toggle}
				centered
				size="lg"
				className="border-0"
				modalClassName="modal fade zoomIn"
			>
				<ModalHeader className="p-3 bg-info-subtle" toggle={toggle}>
					{!!isEdit ? ` Edit ${createName}` : ` Create ${(createName)}`}
				</ModalHeader>
				<Form
					className="tablelist-form"
					onSubmit={(e: any) => {
						e.preventDefault();
						validation.handleSubmit();
						return false;
					}}
				>
					
					{children}

					<div className="modal-footer">
						<div className="gap-2 hstack justify-content-end">
							<Button
								type="button"
								onClick={() => {
									setModal(false);
								}}
								className="btn-light"
							>
								Close
							</Button>
							<button type="submit" className="btn btn-success" id="add-btn">
								{!!isEdit ? 'Update Task' : 'Add Task'}
								{!!isEdit ? ` Update ${capitalizeFirstLetter(createName)}` : ` Create ${capitalizeFirstLetter(createName)}`}
							</button>
						</div>
					</div>
				</Form>
			</Modal>
			<CommonPopup isOpen={isModalOpen} toggle={Commontoggle} /> */}
    </div>
  );
};

export default ReusableTable;
