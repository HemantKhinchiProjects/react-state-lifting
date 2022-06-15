import React from 'react';
import './style.css';

import ChildOne from './components/Child-1';

import ChildTwo from './components/Child-2';
export default function App() {
  const nameDetails = (name) => {
    console.log(name);
    return name[0];
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <ChildOne fname={nameDetails} />

      <ChildTwo lname={nameDetails} />

      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
