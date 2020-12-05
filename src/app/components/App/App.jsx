import React from 'react';
import {Provider} from 'react-redux';

import EmployeesPage from '../../../client/Employees/pages/EmployeesPage';
import store from '../../../store/store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <EmployeesPage/>
      </div>
    </Provider>
  );
}

export default App;
