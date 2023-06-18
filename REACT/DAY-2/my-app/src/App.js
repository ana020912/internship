import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import List from './components/Button/List';
import { useEffect, useState, useReducer } from 'react';
import axios from 'axios';

// const axios = require('axios');



function App() {
  const [todos, setTodos] = useState([]);
  const [todoList, setTodoList] = useState(null);
  useEffect(() => {
    const datas = axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
      .then( (response) => setTodos(response.data))
      .catch((error) => console.log(error))
      
  }, []);
  // const [state, dispatch] = useReducer(reducer, {initialState: null});
  // function reducer (state, action) {
  //     if (action.type === 'display_list') {
  //         return {
  //           initialState: todos.map((todo) => (
  //             <li key={todo.id}>{todo.title}</li>
  //           ))
  //         }      
  //     }
  // }

  const handleClick = () => {
    if (todos.length > 0) {
      setTodoList(
          todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))
       
      );
    }
  };

  return (
    <>
      <Button handleClick={handleClick} />
      {/* <Button handleClick={dispatch({ type: 'display_list' })} /> */}
      <ul>
          {todoList}
      </ul>
    </>
  );
}

export default App;
