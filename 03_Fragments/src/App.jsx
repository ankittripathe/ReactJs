import React from "react";
import Title from "./Components/Title";

function Description() {
  return <h3>I am Description!</h3>;
}

const App = () => {
  return (
    <>
      <h1>This is app components</h1>
      <Title />
      <Description />
    </>
  );
};

export default App;
