import React from 'react';

import './EmployeesListItem.css';

const EmployeesListItem = (({lastName, firstName, isSelected, toggleHandler}) => {

  return (
    <li className="employees-list-item">
      <span>{`${lastName} ${firstName}`}</span>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={toggleHandler}
      />
    </li>
  )
});

export default EmployeesListItem;
