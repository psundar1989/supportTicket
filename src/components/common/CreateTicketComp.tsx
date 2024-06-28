import React, { useCallback, useState } from 'react';
import { Collapse, Input,Modal, ModalBody, ModalHeader, UncontrolledDropdown } from 'reactstrap'

// Formik
import * as Yup from 'yup';
import { useFormik } from 'formik';
import ReactSelect, { ActionMeta, SingleValue  } from 'react-select';
import DropFile from './DropFile';

import dynamic from 'next/dynamic';
const CKEditorEditorWrap = dynamic( () =>  import( './CKEditorWrap' ), { ssr: false } );

interface Option {
    value: string;
    label: string;
  }

const CreateTicketComp = () => {
    const [isccOpen, setIsccOpen] = useState<boolean>(false);
    const [isbccOpen, setIsbccOpen] = useState<boolean>(false);

    const ccToggle = () => setIsccOpen(!isccOpen);
    const bccToggle = () => setIsbccOpen(!isbccOpen);


    const [modal, setModal] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);

	const [task, setTask] = useState<any>([]);

    const category= [
        {
            value:'payslip',
            label: 'Pay Slip'
        },
        {
            value:'leave',
            label: 'Leave'
        },
        {
            value:'hr',
            label: 'Hr'
        },
        {
            value:'others',
            label: 'Others'
        },
    ];

    const department= [
        {
            value:'payslip',
            label: 'Pay Slip'
        },
        {
            value:'leave',
            label: 'Leave'
        },
        {
            value:'hr',
            label: 'Hr'
        },
        {
            value:'others',
            label: 'Others'
        },
    ];

    const priority= [
        {
            value:'high',
            label: 'High'
        },
        {
            value:'medium',
            label: 'Medium'
        },
        {
            value:'leave',
            label: 'Leave'
        }
    ];


    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const handleSelect = (newValue: SingleValue<Option>, actionMeta: ActionMeta<Option>) => {
      setSelectedOption(newValue as Option);
    };

	const toggle = useCallback(() => {
		if (modal) {
			setModal(false);
			//setTask(null);
		} else {
			setModal(true);
		}
	}, [modal]);

    const validation: any = useFormik({
		// enableReinitialize : use this flag when initial values needs to be changed
		enableReinitialize: true,

		initialValues: {
			taskId: (task && task.taskId) || '',
			project: (task && task.project) || '',
			task: (task && task.task) || '',
			creater: (task && task.creater) || '',
			dueDate: (task && task.dueDate) || '',
			status: (task && task.status) || '',
			priority: (task && task.priority) || '',
			subItem: (task && task.subItem) || [],
		},
		validationSchema: Yup.object({
			taskId: Yup.string().required('Please Enter Task Id'),
			project: Yup.string().required('Please Enter Project Name'),
			task: Yup.string().required('Please Enter Your Task'),
			creater: Yup.string().required('Please Enter Creater Name'),
			dueDate: Yup.string().required('Please Enter Due Date'),
			status: Yup.string().required('Please Enter Status'),
			priority: Yup.string().required('Please Enter Priority'),
			subItem: Yup.array().required('Please Enter an Image'),
		}),
		onSubmit: (values) => {
			if (isEdit) {
				const updatedTask = {
					id: task ? task.id : 0,
					taskId: values.taskId,
					project: values.project,
					task: values.task,
					creater: values.creater,
					dueDate: values.dueDate,
					status: values.status,
					priority: values.priority,
					subItem: values.subItem,
				};
				// update customer
				//dispatch(updateTask(updatedTask));
				validation.resetForm();
			} else {
				const newTask = {
					id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
					taskId: values['taskId'],
					project: values['project'],
					task: values['task'],
					creater: values['creater'],
					dueDate: values['dueDate'],
					status: values['status'],
					priority: values['priority'],
					subItem: values['subItem'],
				};
				// save new customer
				//dispatch(addNewTask(newTask));
				validation.resetForm();
			}
			toggle();
		},
	});
  return (
    <React.Fragment>
        <div className='px-3'>
        <button
            className="btn btn-primary add-btn me-1 btn-md btn-outline-success 
            btn-sm-md btn-md-lg btn-lg-xl"
            onClick={toggle}
        >
            <i className=" ri-send-plane-fill  me-1"></i>
            Create Ticket
        </button>
    </div>

    <Modal id="composemodal" className="modal-lg" isOpen={modal} toggle={toggle} size="xl" centered>
                <ModalHeader className="p-3 bg-light" toggle={toggle}>
                  New Ticket
                </ModalHeader>
                <ModalBody>
                    <section>
                        <div className="d-flex justify-content-between align-items-center mb-3 position-relative gap-3">
                        <label className='m-0 text-end' style={{minWidth:'100px'}}>To </label>
                            <Input
                                type="text"
                                className="form-control email-compose-input"
                                defaultValue="support@themesbrand.com"
                            />
                            <div className="position-absolute top-0 end-0">
                            <div className="d-flex">
                                    <button
                                        className="btn btn-link text-reset fw-semibold px-2"
                                        type="button"
                                        onClick={ccToggle}
                                    >
                                        Cc
                                    </button>
                                    <button
                                        className="btn btn-link text-reset fw-semibold px-2"
                                        type="button"
                                        onClick={bccToggle}
                                    >
                                        Bcc
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Collapse  isOpen={isccOpen} className="collapse" id="CcRecipientsCollapse">
                         <div className="d-flex justify-content-between align-items-center mb-3 position-relative gap-3">
                                <label className='m-0 text-end' style={{minWidth:'100px'}}>Cc</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    placeholder="Cc recipients"
                                />
                            </div>
                        </Collapse>
                        <Collapse  isOpen={isbccOpen} className="collapse" id="BccRecipientsCollapse">
                        <div className="d-flex justify-content-between align-items-center mb-3 position-relative gap-3">
                                <label className='m-0 text-end' style={{minWidth:'100px'}}>Bcc</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    placeholder="Bcc recipients"
                                />
                            </div>
                        </Collapse>

                        <div className="d-flex justify-content-between align-items-center mb-3 gap-3">
                           <label className='m-0 text-end' style={{minWidth:'100px'}}>Subject </label>
                            <Input type="text" className="form-control" placeholder="Subject" />
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3 gap-3">
                           <label className='m-0 text-end' style={{minWidth:'100px'}}>Department </label>

							<ReactSelect
                             onChange={handleSelect}
								options={department}
								isClearable={true}
								isSearchable={true}
								name="white"
							/>

                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3 gap-3">
                           <label className='m-0 text-end' style={{minWidth:'100px'}}>Priority </label>

							<ReactSelect
                             onChange={handleSelect}
								options={priority}
								isClearable={true}
								isSearchable={true}
								name="white"
							/>

                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3 gap-3">
                           <label className='m-0 text-end' style={{minWidth:'100px'}}>category </label>

							<ReactSelect
                             onChange={handleSelect}
								options={category}
								isClearable={true}
								isSearchable={true}
								name="white"
								//isMulti
							/>

                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3 ck-editor-reverse gap-3">
                        <label className='m-0 text-end' style={{minWidth:'100px'}}>Description </label>
                            <div className='w-100'>

                            <CKEditorEditorWrap/>
                            
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center ck-editor-reverse gap-3">
                        <label className='m-0 text-end' style={{minWidth:'100px'}}>Upload File </label>
                        <DropFile />
                        </div>
                    </section>
                </ModalBody>
                <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-ghost-danger"
                        onClick={() => {
                            setModal(false);
                        }}
                    >
                        Discard
                    </button>

                    <UncontrolledDropdown className="btn-group">
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                setModal(false);
                            }}
                        >
                            Create Ticket
                        </button>
                    </UncontrolledDropdown>
                </div>
            </Modal>


    </React.Fragment>
  )
}

export default CreateTicketComp