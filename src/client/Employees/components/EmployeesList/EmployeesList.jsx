import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

import {alphabetArray} from '../../../../shared/variables/alphabet';
import EmployeeListItem from '../EmployeesListItem/index';
import {fetchUsers, toggleCheckedUser} from '../../../../app/store/actions';
import {sortArr} from '../../../../shared/services/sortArr';

import './EmployeesList.scss';

const EmployeesList = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      if (state.users.length === 0) {
        await axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
          .then(({data}) => dispatch(fetchUsers(data.map(item => {
              if (!item.selected) {
                return ({...item, selected: false})
              }
              return item
            })
          )))
          .catch(err => console.log(err));
      }
    }
    fetchData();
  }, []);

  const sortedUsers = sortArr(state.users, 'lastName');
  const employeesListElement = state.loading === true ? <p>Loading...</p> :
    alphabetArray.map(letter => {

      const usersByLetter = sortedUsers.filter(item =>
        item.lastName[0].toUpperCase() === letter.toUpperCase());

      const alphabetElement = usersByLetter.map(({id, lastName, firstName, selected}) =>
        (<EmployeeListItem
          key={id}
          lastName={lastName}
          firstName={firstName}
          isSelected={selected}
          toggleHandler={() => dispatch(toggleCheckedUser(id))}
        />)
      );

      return (
        <div className="employees-item" key={letter}>
          <h3 className="employees-alphabet">{letter.toUpperCase()}</h3>
          {alphabetElement.length ? alphabetElement : "-----"}
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
