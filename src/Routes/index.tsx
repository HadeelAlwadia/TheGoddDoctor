import { createBrowserRouter } from "react-router-dom";
import Error from "../screens/Error";
import Login from "../screens/auth/LoginPage/Login";
import DashBoard from "../screens/DashBoard/Index";
import AddAppointment from "../screens/Appointments/AddAppointment";
import Appointments from "../screens/Appointments";

export const routes = createBrowserRouter([
    { 
        path: '/', element: <DashBoard /> },
    {
         path: '/auth/login', element: <Login /> },
    {
     path: '/appointments', element: <Appointments />
    }, {
        path: '/appointments/add', element: <AddAppointment />
    },
    { path: '*', element: <Error /> }

]

)