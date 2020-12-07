import React from 'react';
import {useSelector} from 'react-redux';
import moment from 'moment';
import {v4} from 'uuid';

import {months} from '../../../../shared/variables/months'
import BirthdayListItem from '../BirthdayListItem';
import {sortArr} from '../../../../shared/services/sortArr';

import './BirthdayList.css';

const BirthdayList = () => {
  const users = useSelector((state) => state.users)
  const selectedUsers = users.filter(item => item.selected === true)
  const sortedUsers = sortArr(selectedUsers, 'dob');
  
  const selectedUsersElement = months.map(month => {
    const usersByMonth = sortedUsers.filter(({dob}) => (moment(dob).format("MMMM") === month));
    const monthElement = usersByMonth.map(({lastName, firstName, dob}) => {
      const dateBirthday = moment(dob).format("DD MMMM, YYYY");
      return (
        <BirthdayListItem key={v4()} firstName={firstName} lastName={lastName} dateBirthday={dateBirthday}/>
      )
    });

    return (
      <div key={v4()}>
        {monthElement.length > 0 && <h3 className="birthday-month">{month}</h3>}
        {monthElement}
      </div>
    )
  });

  return (
    <div className="birthday-container">
      <h1>Employees Birthday</h1>
      {selectedUsers.length < 1 && <p>No selected employees</p>}
      <ul className="birthday-list">
        {selectedUsersElement}
      </ul>
    </div>
  );
};

export default BirthdayList;
