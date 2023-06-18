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
import ErrorPage from './routes/errorpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/users",
    element: <Users />,
    loader: async (infos) => {
      console.log(infos);
      const data = await axios.get('https://jsonplaceholder.typicode.com/users?_start=0&_limit=10')  //extract in a service.js
                                  .catch(error => console.log(error))
      return data.data
    }
  },
  {
    path: "/posts",
    element: <Posts />, 
    loader:  async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
                                      .catch(error => console.log(error))
        return response.data
    }
  },
  {
    path: "/todos",
    element: <Todos />,
    loader:  async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10')
                                      .catch(error => console.log(error))
        return response.data
    }
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