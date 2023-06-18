import { useState, useEffect, useReducer } from "react";
import axios from 'axios';
import { useLoaderData, useLocation, useParams } from "react-router-dom";
function Users() {
    const usersLoaderData = useLoaderData();
    const location = useLocation();
    return (
        <>
            <h1>Welcome to {location.pathname === '/users' ? "users" : ""}</h1>
            <ul>
                {usersLoaderData && usersLoaderData.map((elem) => (
                    <li key={elem.id}>{elem.name}</li>
                ))}
            </ul>
        </>

    );
}

export default Users;

// export const usersLoader = async (response) => {
//     console.log(response);
    
//   }