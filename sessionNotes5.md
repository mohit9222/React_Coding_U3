E3 P5 - TOPICS

- we can also use normal function
- {} curly brackets
- How can we put the react element inside the component?
- We can have a react element inside another react element

const Title = function(){
return (

<div>
    <h1>React JS</h1>
</div>
)
}

Arrow function is the industry standard

Inside these curly brackets {} we can write any JavaScript code
We can do any calculations inside these brackets
We can also write console.log inside this brackets

> How can we put the react element inside the component?
> We can write it inside the curly brackets {}

React Element
const reactElement = (

  <div className="heading-container">
    <h1 id="heading">This is JSX heading</h1>
  </div>
);

const HeadingComponent = () => (

  <div className="Functional-container">
    <Title />
    <Title2 />
    {reactElement}
    <h1 className="Functional">This is a React Functional Component</h1>
  </div>
);

We can have a react element inside another react element

JSX takes care of injections
Any data wrapped inside the brackets, it avoids cross side scripting

All are same

<Title/>
<Title></Title>
{Title()}
