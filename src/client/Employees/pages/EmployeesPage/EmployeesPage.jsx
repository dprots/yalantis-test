import React from 'react';

import EmployeesList from '../../components/EmployeesList/index';
import BirthdayList from '../../components/BirthdayList/index';

import './EmployeesPage.css';

const EmployeesPage = () => {
  return (
    <div className="container">
      <EmployeesList/>
      <BirthdayList/>
    </div>
  );
};

export default EmployeesPage;
