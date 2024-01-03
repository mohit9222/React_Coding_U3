E3 P3 - TOPICS

- Creating a React element using the core react is it a good way?
- What is JSX?
- How do we create JSX?
- Whom do we write our code for "Machines" or "Humans"?
- Is JSX code a valid Javascript? if no, How does it work then?
- What is Babel?
- Writing attributes, single and multiple lines in JSX

---

- This syntax is not a good way, it is very bad
- It is not developer friendly

const heading = React.createElement(
"h1",
{ id: "heading" },
"Hello World from React!"
);

JSX (Javascript XML)

- It is a Javascript syntax which is easier to create react eloements
- JSX is not part of react, both are very different
- We can write react without JSX also
- JSX- HTML-like or XML like syntax
- JSX is an extension of Javascript (more or less) and it has to be transpiled by babel before the browser can use it

JSX - React.createElement - ReactElement - Object - HTMLElement(render)

creating a JSX:
const jsxHeading = <h1 id="heading">Hello World from JSX!</h1>

NOTE - This is NOT HTML inside Javascript, this is JSX

- This is how we create React element using core React:

const heading = React.createElement(
"h1",
{ id: "heading" },
"Hello World from React!"
);

- This is how we create React element using JSX React:

const jsxHeading = <h1 id="heading">Hello World from JSX!</h1>

- Whom do we write our code for "Machines" or "Humans"?

We write code for Humans and Machines, But we write code first for HUMANS(They understand our code)
and then for Manchines(Understand Binary)

const heading = <h1 id="heading">Hello World from JSX!</h1>
(React element/ object) -> JSX -> When this piece of code is executed it becomes a React element using JSX

- Is the above JSX a valid Javascript?

It is not a valid JS because this is not pure JS (JS engine doesnt understand JSX)
It understands ECMA script (ES6)-(PureJS)

How does it work then?
PARCEL is doing the job behind the scenes
The code is transpiled(converted) before it goes to the JS Engine (receives the code what the browser understand)

JSX --> PARCEL --(transpiled by) --> BABEL (It is a package which transpiles the code) --> JS Engine

Babel

- It is a Javascript complier/transpiler which converts the code what the browser understands
- It is opens source
- Not developed by Meta
- https://babeljs.io/
- Older version of browsers dont understand ES6 code, babel converts it

In Babel behind the scenes:

React/ JSX
const heading = <h1>Hello from JSX!</h1>

Babel
const heading = /\_#\_PURE\_\_\_/React.createElement(......)

There is a slight difference between HTML and JSX!
Ex: In JSX
const heading = <h1 className="Root">Hello from JSX!</h1>

This is how we write our class in JSX (className)
We make use of cameCase in JSX for attributes

Single and Multiple line in JSX

- Single Line

const heading = <h1 className="Root">Hello from JSX!</h1>

- Multiple Line

const heading = (

<h1 className="Root">
Hello from JSX!
</h1>
)

It needs to be within brackets
