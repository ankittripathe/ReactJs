import React from "react";

const App = () => {
  let name = 'Ankit'
  return (
    <>
      <p>2 * 2 = {2 * 2}</p>
      <p>Hi, {name}</p>
      <p>Hi, {name.toUpperCase()}</p>
    </>
  );
};

export default App;
