import React from 'react';
import App from '../App';
import ChildOne from './components/Child-1';
const ChildTwo = (props) => {
  //console.log(props.lname[0]);
  return <div>Hello What is your name {props.lname} </div>;
};
export default ChildTwo;
