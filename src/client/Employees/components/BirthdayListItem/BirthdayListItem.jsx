import React from 'react';

import './BirthdayListItem.scss';

const BirthdayListItem = (({lastName, firstName, dateBirthday}) => {

  return (
    <li className="birthday-list-item">
      {`${lastName} ${firstName} - ${dateBirthday} year`}
    </li>
  )
});

export default BirthdayListItem;
