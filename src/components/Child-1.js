import React from 'react';
const ChildOne = (props) => {
  const name = ['Hemant', 'khinchi'];
  return (
    <div>
      <p>My name is {props.fname(name)}</p>
    </div>
  );
};
export default ChildOne;
