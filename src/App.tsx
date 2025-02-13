import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes";
import Header from "./Components/common/Header";
const isNotLoginPage=!window.location.href.includes('auth')
function App() {
  
  return (
    <>
{ isNotLoginPage&&<Header/>
}    <RouterProvider router={routes} />
    </>
  );
}

export default App;
