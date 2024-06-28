import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const AssignTo = ({currentState,handleAssign,cellId, setIsModalOpen, val,toggleModal}:{currentState:any,handleAssign:any,cellId:any,setIsModalOpen:any, val:any,toggleModal:any}) => {
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
                    setIsModalOpen(false);
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
  )
}

export default AssignTo;
