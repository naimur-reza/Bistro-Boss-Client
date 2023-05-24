import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Shop from "../Pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "shop/:title",
        element: <Shop />,
      },
    ],
  },
]);
export default router;
