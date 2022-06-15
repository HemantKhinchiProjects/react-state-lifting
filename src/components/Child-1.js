import React from 'react';
const ChildOne = (props) => {
  const name = ['Hemant', 'khinchi'];
  return (
    <div>
      <p>Child 1 <span style={{color:'red'}}>{props.fname(name)}</span></p>
    </div>
  );
};
export default ChildOne;
