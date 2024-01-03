import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";

// Nested Header element using React.createElement(h1,h2,h3 inside a div with class as title)
const heading1 = React.createElement(
  "h1",
  { id: "header_h1" },
  "This is React JS using createElement"
);

const heading2 = React.createElement(
  "h2",
  { id: "sub-header" },
  "This is a great learning!"
);

const heading3 = React.createElement(
  "h3",
  { id: "par-header" },
  "Namaste React is a Beast!"
);

const header = React.createElement("div", { className: "title" }, [
  heading1,
  heading2,
  heading3,
]);

// Header Component
const Header = () => {
  return (
    <div className="heading-wrapper">
      <div className="logo1">
        <img src={logo} className="logo" />
      </div>
      <div className="search">
        <input type="text" placeholder="Search something" />
      </div>
      <div className="avatar">
        <div className="user-icon" key="user-icon"></div>
      </div>
    </div>
  );
};

// Nested Header element using JSX(h1,h2,h3 inside a div with class as title)
const JsxHeader = (
  <div className="title">
    <h1 className="jsxheader">This is React JS using JSX</h1>
    <h2>This is a great learning!</h2>
    <h3>Namaste React is a Beast!</h3>
  </div>
);

// Nested Header element using FunctionalComponent(h1,h2,h3 inside a div with class as title)
const FunctionalComponent = () => {
  return (
    <div className="title">
      <h1 id="header-fc">This is React JS using Functional Component</h1>
      <h2 id="sub-header-fc">This is a great learning!</h2>
      <h3 id="par-header-fc">Namaste React is a Beast!</h3>
    </div>
  );
};

//Pass attributes into the tag in JSX
const JSXHeader_attr = (
  <div className="title">
    <h1 id="header_atr">This is React JS using JSX attributes</h1>
    <h2 id="sub-header">This is a great learning!</h2>
    <h3 id="par-header">Namaste React is a Beast!</h3>
  </div>
);

// {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>}
const TitleComponent = () => {
  return (
    <div className="title">
      <h1 id="TC">This is React JS - Title Component</h1>
      <h2 id="sub-header">This is a great learning!</h2>
      <h3 id="par-header">Namaste React is a Beast!</h3>
    </div>
  );
};

// Composition of a component
const ComponentComposition = () => {
  return (
    <>
      <Header />
      {header}
      {JsxHeader}
      <FunctionalComponent />
      {JSXHeader_attr}
      {TitleComponent}
      <TitleComponent />
      <TitleComponent></TitleComponent>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComponentComposition />);
