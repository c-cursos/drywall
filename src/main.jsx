

import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Comps from "./app/components/comps-index";
import Pages from "./app/views";
import "./assets/css/imports.css";


export default function App() {
    

    return( <>
        <Comps.Appbar />
        <Comps.Sidebar />
        <main>
            <AppRoutes />
        </main>
        Home
    </> );
}


ReactDOM.createRoot( document.querySelector( "body" ) ).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
