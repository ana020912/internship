import { useState, useEffect, useReducer } from "react";
import axios from 'axios';
import { useLoaderData, useLocation, useParams } from "react-router-dom";

function Todos () {
    // let { todos } = useParams();
    const todosLoaderData = useLoaderData();
    const location = useLocation();
    return (
        <>
            <h1>Welcome to {location.pathname === '/todos'? "Todos" : ""}</h1>
            <ul>
                {todosLoaderData && todosLoaderData.map((elem) => (
                    <li key={elem.id}>{elem.title}</li>
                ))}
            </ul>
        </>
        
    );
}

export default Todos;

export const todosLoader = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10')
                                  .catch(error => console.log(error))
    return response.data
  }