import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import SearchPAge from "../Pages/SearchPage/SearchPAge";
import BloodDonationRequest from "../Pages/BloodDonationRequest/BloodDonationRequest";

import ViewDetails from "../Pages/DonationDetails/ViewDetails";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AdminHome from "../Pages/Dashboard/AdminHome";
import AllUser from "../Pages/Dashboard/AllUser";
import AllBloodRequest from "../Pages/Dashboard/AllBloodRequest";
import ContentManagement from "../Pages/Dashboard/ContentManagement";
import Blog from "../Pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DonorDashboard from "../Pages/Dashboard/DonorDashboard/DonorDashboard";
import CreateDonationRequest from "../Pages/Dashboard/DonorDashboard/CreateDonationRequest";
import VolunteerDashboard from "../Pages/Dashboard/Volunteer/VolunteerDashboard";
import DonorHome from "../Pages/Dashboard/DonorDashboard/DonorHome";
import VolunteerHome from "../Pages/Dashboard/Volunteer/VolunteerHome";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/search',
        element: <SearchPAge></SearchPAge>
      },
      {
        path: '/donation',
        element: <BloodDonationRequest></BloodDonationRequest>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
     
      {
        path: '/viewDetails/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      
    ]
  },
  {
    path:'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'adminHome',
        element:<AdminHome></AdminHome>
      },
      {
        path:'allUser',
        element:<AllUser></AllUser>
      },
      {
        path:'allBloodRequest',
        element:<AllBloodRequest></AllBloodRequest>
      },
      {
        path:'contentManagement',
        element:<ContentManagement></ContentManagement>
      },
      // donor deshboard
      {
path:'donorHome',
element:<DonorHome></DonorHome>
      },
      {
        path:'myDonationRequest',
        element:<DonorDashboard></DonorDashboard>
      },
      {
        path:'createDonationRequest',
        element:<CreateDonationRequest></CreateDonationRequest>
      },
    // volunter
    {
      path:'volenteerHome',
      element:<VolunteerHome></VolunteerHome>
    },
    {
      path:'allBloodDonationRequest',
      element:<VolunteerDashboard></VolunteerDashboard>
    },
    {
      path:'contentManagement',
      element:<ContentManagement></ContentManagement>
    }
    ]
  },
]);