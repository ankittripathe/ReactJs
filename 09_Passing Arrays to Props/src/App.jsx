import React from "react";
import Product from "./Components/Product";

const App = () => {
  const items = ["React", "Redux", "JavaScript", "Tailwind"];
  return (
    <div>
      <Product techStack={items} />
    </div>
  );
};

export default App;
