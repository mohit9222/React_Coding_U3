import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );

// console.log(heading);
const number = 1000;

const reactElement = (
  <div className="heading-container">
    <h1 id="heading">This is React Element</h1>
  </div>
);

const Title = () => (
  <div className="heading-container">
    <h1 id="heading">This is JSX heading</h1>
  </div>
);

// const HeadingComponent = () => {
//   return <h1>This is a React Functional Component</h1>;
// };

// Functional component
// COMPONENT COMPOSITION
const HeadingComponent = () => (
  <div className="Functional-container">
    <Title />
    <Title2></Title2>
    {reactElement}
    <h1 className="Functional">This is a React Functional Component</h1>
  </div>
);

// Writing it using normal function
const Title2 = function () {
  return (
    <div>
      <h1>React JS</h1>
      {number}
      {console.log("Any code will work")}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
