// import React, { Suspense, lazy } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
// import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Body from "./pages/Body";
import Recipes from "./pages/Recipes";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ResMenu from "./pages/ResMenu";

// const AboutUs = lazy(() => import("./components/AboutUs"));

const App = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <div>
                        <Header />
                        <Outlet />
                    </div>
                }
            >
                <Route path="/" element={<Dashboard />} />
                <Route path="/list" element={<Body />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/list/restaurant/:id" element={<ResMenu />} />
            </Route>
        </Routes>
    );
};

export default App;

// const AppLayout = () => {
//     return (
//         <div className="AppLay">
//             <Header />
//             {/* Outlet will get replaced by children */}
//             <Outlet />
//         </div>
//     );
// };

// const appRouter = createBrowserRouter([
//     {
//         path: "/",
//         element: <AppLayout />,
//         children: [
//             {
//                 path: "/",
//                 element: <Body />,
//             },
//             {
//                 path: "/about",
//                 element: <AboutUs />,
//                 // element: (
//                 //     <Suspense fallback={<h1>Load ho rha...</h1>}>
//                 //         <AboutUs />
//                 //     </Suspense>
//                 // ),
//             },
//             {
//                 path: "/contact",
//                 element: <ContactUs />,
//             },
//             {
//                 path: "/restaurant/:resId",
//                 element: <ResMenu />,
//             },
//         ],
//     },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router={appRouter} />);
