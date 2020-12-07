import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'

import EmployeesPage from '../../../client/Employees/pages/EmployeesPage';
import {store, persistor} from '../../store/configureStore';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PersistGate loading={null} persistor={persistor}>
          <EmployeesPage/>
        </PersistGate>
      </div>
    </Provider>
  );
};

export default App;
