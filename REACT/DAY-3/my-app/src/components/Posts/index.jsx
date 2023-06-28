// import { useState, useEffect, useReducer } from "react";
// import axios from 'axios';
import { useLoaderData, useLocation, Link, Outlet } from "react-router-dom";


// const initialState = {
//   posts: []
// };



// const reducer = (state, action) => {
//   if (action.type === 'success') {
//     return {
//       posts: action.payload, 
//     };
//   } else if (action.type === 'error') {
//     return {
//       posts: [], 
//     };
//   }
//   return state;
// };



function Posts() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const postLoaderData = useLoaderData();
  const location = useLocation();
 
  // useEffect(() => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => {
  //       dispatch({ type: 'success', payload: response.data }); // Removed JSON.stringify
  //     })
  //     .catch(() => {
  //       dispatch({ type: 'error' });
  //     });
  // }, []);

  return (
    <>
      <h1>Welcome to {location.pathname === '/posts'? "Posts" : ""}</h1>
      <ul>
        { postLoaderData && postLoaderData.map((elem) => ( 
          <li key={elem.id}><Link to = {`${elem.id}`} >{elem.title}</Link></li> 
        ))}
      </ul>
      <div id = 'details'>
        <Outlet />
      </div>
    </>
  );
}
export default Posts;