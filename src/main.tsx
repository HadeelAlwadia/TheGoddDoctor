import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import AppProvider from "./store/index.tsx";


createRoot(document.getElementById("root")!).render(
   <StrictMode>
    <AppProvider children={<App />}/>
  </StrictMode>


);
