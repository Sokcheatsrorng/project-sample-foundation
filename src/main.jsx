import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import  LoginComponent  from "./components/AuthComponents/LoginComponent";
import  SignUpComponent  from "./components/AuthComponents/SignUpComponent";
import AuthLayout from "./layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage
  
  },
  {
    path: "about",
   
  },
  {
    path: "product",
   
  }, {
    path: "auth",
    Component: AuthLayout,
    children: [
      {
        path: "login", Component: LoginComponent
      },
      {
        path: "signup", Component: SignUpComponent
      }
    ]
  }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
