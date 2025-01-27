import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Post } from "./pages";
import { DefaultLayout } from "./layouts";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post",
        element: <Post />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
