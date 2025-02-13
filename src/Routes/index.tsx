import { createBrowserRouter } from "react-router-dom";
import Error from "../screens/Error";
import Login from "../screens/auth/LoginPage/Login";
import DashBoard from "../screens/DashBoard/Index";
import CreateAppointment from "../screens/Appointments/CreateAppointment";
import Appointments from "../screens/Appointments";
import Home from "../screens/Home";

export const routes = createBrowserRouter([
    {
    path:'/',    element:<Home/>
    },
    { 
        path: '/doctor/:id/dashboard', element: <DashBoard /> },
    {
         path: '/auth/login', element: <Login /> },
    {
     path: '/:role/:id/appointments', element: <Appointments />
    }, {
        path: '/patient/:id/appointments/add', element: <CreateAppointment />
    },
    { path: '*', element: <Error /> }

]

)