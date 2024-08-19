import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import LocationProvider from "./utils/LocationProvider";
import { Provider } from "react-redux";
import appStore from "./redux/appStore.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <LocationProvider>
                <Provider store={appStore}>
                    <App />
                </Provider>
            </LocationProvider>
        </BrowserRouter>
        {/* <RouterProvider router={App} /> */}
    </React.StrictMode>
);
