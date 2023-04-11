import React from 'react';
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import Profile from "./pages/profile/Profile"
import Navbar from "./components/navBar/navBar"
import Leftbar from "./components/leftBar/leftBar"
import Rightbar from "./components/rightBar/rightBar"
import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";

function App() {

  const currentUser = true;
  const Layout = () => {
    return(
      <div>
       <Navbar/>
        <div style = {{display: "flex"}}>
        <Leftbar/>
        <div style = {{flex: 6}}>
        <Outlet/>
        </div>
        <Rightbar/>
        </div>
      </div>
    )
  }

  const ProtectedRoute = (({children}) => {
    console.log(children);
    if(!currentUser) {
      // Redirect to login path
      return <Navigate to="/login" />;
    }
    return children;
  })
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>
      ),
       children: [
         {
          path: "/",
          element: <Home/>
        },
        {
          path: "/profile/:id",
          element: <Profile/>
        },
        ]
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/profile",
      element: <Profile/>,
    },
  ]);
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
