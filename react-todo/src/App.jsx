// import { useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       hi there
//     </div>
//   )
// }


// export default App


// import { useState } from 'react'

// function App() {
//   const [todos, setTodos] = useState([{
//     title: "Go to gym",
//     description: "Go to gym from 5 to 6",
//     completed: false
//   }, {
//     title: "Study DSA",
//     description: "Study DSA from 6 to 8",
//     completed: true
//   }, {
//     title: "efe",
//     description: "nfrjdke",
//     completed: false
//   }])
//   return (
//     <div>
//       {/* {JSON.stringify(todos)} */}
//       {/* <Todo title={todos[0].title} description={todos[0].description}></Todo>
//       <Todo title={todos[1].title} description={todos[1].description}></Todo> */}

//       {todos.map(function(todo){
//         return <Todo title={todo.title} description={todo.description}></Todo>
//       })}
//     </div>
//   )
// }

// /*
// title, description, completed
// */
// function Todo(props){
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <h3>{props.description}</h3>
//     </div>
//   )
// }

// export default App







// import { useState } from 'react'

// function App() {
//   const [todos, setTodos] = useState([{
//     title: "go to gym",
//     description: "go to gym from 7 to 8",
//     completed: false
//   }, {
//     title: "study dsa",
//     description: "study dsa from 9 to 12",
//     completed: true
//   }, {
//     title: "play cricket",
//     description: "play cricket from 4 to 6",
//     completed: false
//   }])
//   function addTodo(){
//     setTodos([...todos, {
//       title: "new todo added",
//       description: "new description added",
//       completed: true
//     }])
//   }
//   return (
//     <div>
//       {/* {JSON.stringify(todos)} */}

//       {/* <Todo title={todos[0].title} description={todos[0].description}></Todo>
//       <Todo title={todos[1].title} description={todos[1].description}></Todo> */}

//         <button onClick={addTodo}>Add more todos</button>
//       {todos.map(function(todo){
//         return <Todo title={todo.title} description={todo.description}></Todo>
//       })}
//     </div>
//   )
// }

// function Todo(props){
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <h3>{props.description}</h3>
//     </div>
//   )
// }

// export default App


import { useState } from 'react'

function App() {

  const [todos, setTodos] = useState([{
    title: "go to gym",
    description: "go at 6pm",
    completed: true
  },
  {
    title: "go to eat",
    description: "go at 7pm",
    completed: true
  },
  {
    title: "study dsa",
    description: "study at 8pm",
    completed: true
  }])

  return (
    <div>
      {/* {JSON.stringify(todos)} */}

      {/* <TodoComponent title={todos[0].title} description={todos[0].description}></TodoComponent>
      <TodoComponent title={todos[1].title} description={todos[1].description}></TodoComponent>
      <TodoComponent title={todos[2].title} description={todos[2].description}></TodoComponent> */}

      {todos.map(function(todo){
        return <TodoComponent title={todo.title} description={todo.description}></TodoComponent>
      })}
    </div>
  )

}
function TodoComponent(props){
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
    </div>
  )
}

export default App