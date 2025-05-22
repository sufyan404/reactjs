import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import User from "./components/User/User";
import Github, { githubInfoLoader } from "./components/GitHub/GitHub";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "About",
//         element: <About />,
//       },
//       {
//         path: "Contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="User/:userid" element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path="Github" element={<Github />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
