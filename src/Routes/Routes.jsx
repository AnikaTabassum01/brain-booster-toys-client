import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import AddToy from "../Pages/AddToy/AddToy";
import MyToy from "../Pages/MyToy/MyToy";
import AllToys from "../Pages/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";
import CategoryToyDetails from "../Pages/CategoryToyDetails/CategoryToyDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'signup',
            element: <SignUp></SignUp>
        },
        {
            path: 'blog',
            element: <Blog></Blog>
        },
        {
          path: 'addatoy',
          element: <AddToy></AddToy>
        },
        {
          path: 'mytoy',
          element: <PrivateRoute><MyToy></MyToy></PrivateRoute>,
        },
        {
          path: 'alltoy',
          element: <AllToys></AllToys>,
          loader: () => fetch('https://brain-booster-toy-server-anikatabassum01.vercel.app/allToy') 
        },
        {
          path : 'categoryToyDetails/:id',
          element: <PrivateRoute><CategoryToyDetails></CategoryToyDetails></PrivateRoute>,
          loader : ({params}) => fetch(`http://localhost:5000/categoryToyDetails/${params.id}`)
        }
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ]);

  export default router;