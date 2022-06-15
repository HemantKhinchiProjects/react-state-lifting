import React, { useContext } from 'react';
import { LastNameContext } from '../App';

const ChildTwo = (props) => {
  const lname = useContext(LastNameContext);
  
  return <div>Child 2 last name {lname} </div>;
};
export default ChildTwo;
