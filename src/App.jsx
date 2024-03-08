// import React, { Suspense, lazy } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
// import { createBrowserRouter, Outlet } from "react-router-dom";
import { Route, Routes, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ResMenu from "./components/ResMenu";

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
                <Route path="/" element={<Body />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/restaurant/:id" element={<ResMenu />} />
            </Route>
        </Routes>
    );
};

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

export default App;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router={appRouter} />);
