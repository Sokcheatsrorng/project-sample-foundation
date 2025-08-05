import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import  LoginComponent  from "./components/AuthComponents/LoginComponent";
import  SignUpComponent  from "./components/AuthComponents/SignUpComponent";
import AuthLayout from "./layouts/AuthLayout";
import ProductPage from "./pages/ProductPage";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import DetailProductPage from "./pages/DetailProductPage";

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
    Component: ProductPage,
   
  }, 
  {
     path:"detail/:id",
     Component: DetailProductPage
  },
  {
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
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>

);

