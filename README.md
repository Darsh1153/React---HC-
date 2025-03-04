# React---HC-

The HTML DOM (Document Object Model)
When a web page is loaded, the browser creates a Document Object Model of the page.

The HTML DOM model is constructed as a tree of Objects:

![image](https://github.com/user-attachments/assets/2090817a-5475-4451-ba2f-7788ec08a849)



# React working under the hood (Counter App)
How react re-renders any change in the state.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <div id="parentComponent">

    </div>

    <script>
        let state = {
            count : 0
        }
        function buttonComponentReRender(){
            document.getElementById('parentComponent').innerHTML = " ";
            const component = buttonComponent(state.count);
            document.getElementById('parentComponent').appendChild(component);
        }
        function buttonComponent(count){
            const but = document.createElement('button');
            but.innerHTML = `counter: ${count}`;
            but.setAttribute('onclick', 'incrementCounter()');
            return but;
        }
        function incrementCounter(){
            state.count++;
            buttonComponentReRender();
        }
        buttonComponentReRender();
    </script>
    
</body>
</html>




why react returns a single child?
React requires a single child (one root element) in a component because JSX expressions must have only one parent element. This ensures that the virtual DOM tree remains structured and predictable.

Why Does React Enforce a Single Root Element?
Consistency in the Virtual DOM

React constructs a tree structure internally. If there were multiple root elements, React wouldn't know how to efficiently manage updates.
Avoiding Ambiguity

Returning multiple root elements without a wrapper could confuse React about what to render first.
Performance Optimization

A single root node allows React to efficiently apply updates and manage component reconciliation.


What is a wrapper component? <br /> <br />
- A Wrapper Component is a React component that wraps around other components or elements to provide additional styling, logic, or behavior. It acts as a reusable container for content. <br />
import React from "react";

function App() {
  return (
    <div>
      <CardWrapper>
        hi there
      </CardWrapper>

      <CardWrapper>
        hello there
      </CardWrapper>
    </div>
  )
}

function CardWrapper({ children }) {
  // create a div with just a border
  // put the innerComponent that is passed as prop
  return (
    <div style={{ border: "2px solid black" }}>
      {children}
    </div>
  )
}

export default App

<br/> <br/>
<img width="551" alt="image" src="https://github.com/user-attachments/assets/30cd4ee5-0677-4b0c-8879-422ac50f5841" />


<br/> <br/>
useMemo <br/>

import { useMemo, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function incrementCounter(){
    setCount(count+1);
  }

  function expensiveTask(num){
    for(let i=0; i<1000000000; i++){}
    return num*2;
  }
  let doubledValue = useMemo(() => expensiveTask(input), [input]);
  return (
    <div>
      <button onClick={incrementCounter}>Click me</button>
      <div>counter: {count}</div>
      <input type="number" placeholder='Enter number' onChange={(e)=>setInput(e.target.value)} />
      <div>{doubledValue}</div>
    </div>
  )
}

export default App


<br/> <br/> <br/>

useMemo <br/>

useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
const cachedValue = useMemo(calculateValue, dependencies)
<br/>

// import React from 'react'
// import { useState } from 'react';

// function App() {
//   const [input, setInput] = useState(0);
//   const [count, setCount] = useState(0);

//   let sum = 0;
//   for(let i=1; i<=input; i++){
//     sum+=i;
//   }
//   return (
//     <div>
//       <input type="number" placeholder='Enter number' onChange={(e)=>setInput(e.target.value)} />
//       <div>sum from 1 to {input} is : {sum}</div>

//       <button onClick={()=>setCount(count+1)}>Counter: {count}</button>
//     </div>
//   )
// }

// export default App

/*
input tag (number)
div> the sum from 1 to input passed is {sum}
*/

import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [input, setInput] = useState(0); // 15 input: 15
  const [finalSum, setFinalSum] = useState(0);
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   let count = 0;
  //   for(let i=1; i<=input; i++){
  //     count = count + i;
  //   }
  //   setFinalSum(count);
  // }, [input])

  let totalSum = useMemo(() => {
    console.log("memo got called");
    let count = 0;
    for(let i=1; i<=input; i++){
      count += i;
    }
    return count;
  }, [input])
  return (
    <div>
      <input type="number" placeholder='Enter number' onChange={(e)=>setInput(e.target.value)} />
      <div>The sum from 1 to {input} is: {totalSum}</div>

      <button onClick={()=>setCount(count+1)}>Click me! {count}</button>
    </div>
  )
}

export default App




<br/> <br/>
# CONTEXT API <br/>
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
<img width="396" alt="image" src="https://github.com/user-attachments/assets/6c40c76e-4193-449c-9f81-8d1ce4e9b7ac" />


