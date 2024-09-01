import { useCallback, useState } from 'react';
import './App.css';
import TodoForm from './componets/Todos/TodoForm';
import TodoList from './componets/Todos/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const newArr = useCallback((e) => setTodos((todos) => todos.concat(e)), []);
  const deleteItem = (e) => {
    const arrAfterDel = todos.slice(0, e).concat(todos.slice(e + 1));
    setTodos(arrAfterDel);
  };
  return (
    <div className="App">
      <h1 className="general-header">Todo App</h1>
      <TodoForm target={newArr} />
      <TodoList target={todos} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
