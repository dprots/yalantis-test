import React from 'react';

import './EmployeeListItem.scss';

const EmployeeListItem = (({lastName, firstName, toggleCheckbox}) => {

  return (
    <li className="employees-list-item" >
      <span>{`${lastName} ${firstName}`}</span>
      <input
        name="selectUser"
        type="checkbox"
        onChange={toggleCheckbox}
      />
    </li>
  )
});

export default EmployeeListItem;
