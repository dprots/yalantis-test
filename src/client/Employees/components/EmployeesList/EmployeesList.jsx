import React, {useEffect} from 'react';
import {v4} from 'uuid';
import {useDispatch, useSelector} from "react-redux";
import axios from 'axios';

import {alphabetArray} from "../../../../shared/variables/alphabet";
import EmployeeListItem from "../EmployeeListItem/index";
import {fetchUsers} from "../../../../store/actions/fetchUsers";
import {sortArr} from "../../../../shared/services/sortArr";
import {toggleCheckedUser} from "../../../../store/actions/toggleCheckedUser";

import './EmployeesList.scss';

const EmployeesList = () => {
  const dispatch = useDispatch();

  useEffect(  async () => {
      await axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
        .then(({data}) => dispatch(fetchUsers(data.map(item => {
            if (!item.selected) {
              return ({...item, selected: false})
            }
            return item
          })
        )))
        .catch(err => console.log(err));
  }, []);

  const users = useSelector((state) => state.users);
  const sortedUsers = sortArr(users, 'lastName');
  const employeesListElement = alphabetArray.map(letter => {

    const usersByLetter = sortedUsers.filter(item =>
      item.lastName[0].toUpperCase() === letter.toUpperCase());

    const alphabetElement = usersByLetter.map(({id, lastName, firstName}) =>
      (<EmployeeListItem
        key={v4()}
        lastName={lastName}
        firstName={firstName}
        toggleCheckbox={() => dispatch(toggleCheckedUser(id))}
      />)
    );

    return (
      <div className="employees-item" key={v4()}>
        <h3 className="employees-alphabet">{letter.toUpperCase()}</h3>
        {(alphabetElement.length > 0) ? alphabetElement : "-----"}
      </div>
    )
  });

  return (
    <div className="employees-container">
      <h1>Employees</h1>
      <ul className="employees-list">
        {employeesListElement}
      </ul>
    </div>
  );
};

export default EmployeesList;
