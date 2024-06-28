"use client";
import { useState } from 'react';
import {Input} from 'reactstrap';

const StatusToggle = ({cell}:{cell:any}) => {
    const [toggleState, setToggleState] = useState(cell);
  return (
    <div className="form-switch">
            <Input
              type="checkbox"
              className="form-check-input"
              id="customSwitchsizemd"
              checked={toggleState}
              onChange={() => setToggleState((prev:any) => !prev)}
            />
          </div>
  )
}

export default StatusToggle;
