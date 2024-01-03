E3 P4 - TOPICS

- What are React components?
- Types of Components
- what is a React Functional Component?
- How do I render my HeadingComponent in root?
- Component Composition

---

React Components

- Everything is a component in react
- Button, footer, Header, Search bar, Title all are components

There are two types of Components

1. Class components (old way of writing code and nobody uses it)

Uses Javascript classes to create Class components

2. Functional Components (new of writing code and everybody uses it)

Uses Javascript functions to create Functional Components

REACT FUNCTIONAL COMPONENT

> It is just a normal Javascript function which return some JSX
> A function which returns some JSX code
> A function which returns a react element it becomes a functional component
> Need to begin with a capital letter
> Makes use of Arrow function

Example:

const HeadingComponet = () => {
return <h1>This is a React Functional Component</h1>
}

We can also write it like this:

const fn = () => {return true}
const fn = () => true

> Both are Valid:

const HeadingComponent = () => {
return <h1>This is a React Functional Component</h1>;
};

const HeadingComponent = () => (

   <h1 className="Heading">This is a React Functional Component</h1>
)

> How do I render my HeadingComponent in root?

We cannot render it like this root.render(HeadingComponent); -> This is React Element

We render a functional like this:
root.render(<HeadingComponent />);
This is the syntax babel understands this is a functional component
Browser doesnt care about anything
Babel does everything (converts everything for the browser)

COMPONENT COMPOSITION
Adding a component inside another component
const HeadingComponent = () => (

  <div className="container">
    <Title /> // This is how we write it
    <h1 className="Heading">This is a React Functional Component</h1>
  </div>
);
