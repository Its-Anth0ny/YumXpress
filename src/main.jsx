import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import LocationProvider from "./utils/LocationProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <LocationProvider>
                <App />
            </LocationProvider>
        </BrowserRouter>
        {/* <RouterProvider router={App} /> */}
    </React.StrictMode>
);
