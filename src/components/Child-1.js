import React from 'react';
const ChildOne = (props) => {
  const name = ['Hemant', 'khinchi'];
  return (
    <div>
      <p>Child 1 {props.fname(name)}</p>
    </div>
  );
};
export default ChildOne;
