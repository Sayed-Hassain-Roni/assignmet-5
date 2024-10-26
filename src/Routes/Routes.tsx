import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CartLayout from "../components/layout/CartLayout";
import AboutUs from "../pages/AboutUs";
import CheckOutPage from "../components/layout/ChecKout";
import Login from "../pages/Authintacation/login";
import Register from "../pages/Authintacation/registration";
import AdminDasboard from "../pages/Authintacation/Dashboard/AdminDashboar";
import UserDashBoard from "../pages/Authintacation/Dashboard/UsersDashboatd";
import FacilityManagement from "../pages/Authintacation/Dashboard/AdminMangement/FacilityMangement";
import BookingManagement from "../pages/Authintacation/Dashboard/AdminMangement/BookingMangemet";
import Addadmin from "../pages/Authintacation/Dashboard/AdminMangement/AddAmin";
import MyBookings from "../pages/Authintacation/Dashboard/BookingManagement/Mybooking";
import ContactUs from "../pages/Products/ContactUs";
import FacilityListing from "../pages/All Facility/AllFacilities";
import FacilityDetails from "../pages/details/FacilityDetails";
import BookingPage from "../pages/Products/Booking";
import PaymentPage from "../pages/Products/Payment";
import BookingConfirmationPage from "../pages/Products/Confirm";
import PrivateRoute from "./PrivateRoute";
import AddNew from "../pages/Products/AddNew";
import EditPage from "../pages/Management/Table/UpdateFacility";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/cart",
    element: <CartLayout />,
  },
  {
    path: "/checkout",
    element: <CheckOutPage />,
  },

  {
    path: "/home/:id",
    element: <FacilityDetails />,
  },
  {
    path: "/:id",
    element: <FacilityDetails />,
  },

  {
    path: "/edit/:id",
    element: <EditPage />,
  },

  {
    path: "/dashboard1",
    element: <PrivateRoute element={<AdminDasboard />} roleRequired="admin" />,
  },

  {
    path: "/facility",
    element: <PrivateRoute element={<FacilityManagement />} />,
  },
  {
    path: "/allfacility",
    element: <FacilityListing />,
  },
  {
    path: "/allfacility/:id",
    element: <FacilityDetails />,
  },
  {
    path: "/bookings",
    element: (
      <PrivateRoute element={<BookingManagement />} roleRequired="admin" />
    ),
  },
  {
    path: "/addadmin",
    element: <PrivateRoute element={<Addadmin />} roleRequired="admin" />,
  },
  {
    path: "/dashboard2",
    element: <PrivateRoute element={<UserDashBoard />} roleRequired="user" />,
  },
  {
    path: "/mybookings",
    element: <PrivateRoute element={<MyBookings />} roleRequired="user" />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/addnew",
    element: <AddNew />,
  },
  {
    path: "/makebook/:id",
    element: <PrivateRoute element={<BookingPage />} roleRequired="user" />,
  },
  {
    path: "/payment",
    element: <PrivateRoute element={<PaymentPage />} roleRequired="user" />,
  },
  {
    path: "/booking-confirmation",
    element: (
      <PrivateRoute element={<BookingConfirmationPage />} roleRequired="user" />
    ),
  },
]);
