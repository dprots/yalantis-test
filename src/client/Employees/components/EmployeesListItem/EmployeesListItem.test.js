import React from 'react';
import {render} from '@testing-library/react';
import EmployeesListItem from './EmployeesListItem';

  test('If component render', () => {
    const {getByText} = render(
      <EmployeesListItem 
        lastName="Smith" 
        firstName="John" 
        isSelected={true} 
        toggleHandler={()=>{}} />);
    const linkElement = getByText(/Smith/i);
    expect(linkElement).toBeInTheDocument();
  })