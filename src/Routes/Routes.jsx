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
          element: <MyToy></MyToy>
        },
        {
          path: 'alltoy',
          element: <AllToys></AllToys>,
          loader: () => fetch('http://localhost:5000/allToy') 
        }
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ]);

  export default router;