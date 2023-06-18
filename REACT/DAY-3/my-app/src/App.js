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
import getData from './services/getData.service';


const response = "";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/users",
    element: <Users />,
    loader: getData
  },
  {
    path: "/posts",
    element: <Posts />, 
    loader: getData
  },
  {
    path: "/todos",
    element: <Todos />,
    loader:  getData
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