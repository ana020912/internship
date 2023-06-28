import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import Todos from './components/Todos';
import Users from './components/Users';
import Posts from './components/Posts';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserDetails from './components/UsersDetails';
import TodoDetails from './components/TodosDetails';
import PostDetails from './components/PostsDetails';
import ErrorPage from './routes/errorpage';
import getDataById from './services/getDataById.service';
import getData from './services/getData.service';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/users",
    element: <Users />,
    loader: getData
    ,
    children: [
      {
        path: ":usersId",
        element: <UserDetails />,
        loader: getDataById
      }
    ]
  },
  {
    path: "/posts",
    element: <Posts />,
    loader: async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
        .catch(error => console.log(error))
      return response.data
    },
    children: [
      {
        path: ":postId",
        element: <PostDetails />,
        loader: getDataById
      }
    ]
  },
  {
    path: "/todos",
    element: <Todos />,
    loader: async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10')
        .catch(error => console.log(error))
      return response.data
    },
    children: [
      {
        path: "/todos/:todosId",
        element: <TodoDetails />,
        loader: getDataById
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>

  );
}

export default App;