import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermConditions from "../Pages/TermsConditions";
import About from "../Pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:'/privacypolicy',
        element:<PrivacyPolicy></PrivacyPolicy>
      },
      {
        path:'/terms',
        element:<TermConditions></TermConditions>
      },
      {
        path:'/about',
        element:<About></About>
      }
    ]
  },
]);