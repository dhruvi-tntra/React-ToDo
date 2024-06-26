import { useState } from 'react';
import TodoInput from './components/TodoInput';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  
  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

   const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) =>{
      return todo !==text;
    });
    setTodos(newTodos);
   }

  return (
    <div className="App">
      <h1>React To-Do</h1>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList list={todos} remove={deleteTodo}></TodoList>
    </div>
  );
}

export default App;
