E3 P2 - TOPICS

- What are DOM elements?
- What is a react element?
- How do we write a h1 tag with "Hellow World from React" in react?

What are DOM elements?
All the HTML elements are our DOM elements

Our DOM elements are equal to our react elements

- How do we write a h1 tag with "Hellow World from React" in react?

const heading = React.createElement(
"h1", -> which TAG
{ id: "heading" }, -> attributes
"Hello World from React!" -> what we want to display / children
);

- react element is NOT a HTML element

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

- React element is a object
- When we render this element onto DOM it becomes a HTML element
- React Element => object => HTMLElement(render)

What ever happens in React, it happens inside Root\*
React will REPLACE and not APPEND anything inside the root
