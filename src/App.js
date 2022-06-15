import React, { createContext, useState } from 'react';
import './style.css';

import ChildOne from './components/Child-1';
import ChildTwo from './components/Child-2';

const LastNameContext = createContext();
export default function App() {
  const [lname, setLname] = useState();
  const nameDetails = (name) => {
    //console.log(name);
    setLname(name[1]);
    return name[0];
  };

  return (
    <div>
      <h1>
        in this page State lifting & createContext() and useState() Hooks
        example
      </h1>
      <ChildOne fname={nameDetails} />
      <LastNameContext.Provider value={lname}>
        <ChildTwo />
      </LastNameContext.Provider>

      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
export { LastNameContext };
