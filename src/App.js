import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider  } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import ResMenu from "./components/ResMenu";

const AppLayOut = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayOut />,
    children : [
      {
        path : "/",
        element :<Body />
      },
      {
        path : "/contact",
        element :<Contact />
      },
      {
        path : "/about",
        element :<About />
      },
      {
        path : "/restaurants/:id",
        element :<ResMenu />
      }
    ],
    errorElement : <Error />
  },
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
