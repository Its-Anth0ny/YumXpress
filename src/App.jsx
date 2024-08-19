// import React, { Suspense, lazy } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
// import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Body from "./pages/Body";
import FoodAI from "./pages/FoodAI";
import AboutUs from "./pages/AboutUs";
// import ContactUs from "./pages/ContactUs";
import ResMenu from "./pages/ResMenu";
import Cart from "./pages/Cart";
// import appStore from "./redux/appStore";
import { useSelector } from "react-redux";
import ContactUs from "./pages/ContactUs";

// const AboutUs = lazy(() => import("./components/AboutUs"));

const App = () => {
    const isOpen = useSelector((state) => state.foodai.isOpen);
    return (
        <div className={`relative ${isOpen ? "overflow-hidden h-screen" : ""}`}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div
                            className={`relative ${
                                isOpen ? "fixed inset-0" : ""
                            }`}
                        >
                            <Header />
                            <Outlet />
                            {isOpen && <FoodAI />}
                        </div>
                    }
                >
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/list" element={<Body />} />
                    {/* <Route path="/foodai" element={<FoodAI />} /> */}
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/list/restaurant/:id" element={<ResMenu />} />
                </Route>
            </Routes>
        </div>
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
