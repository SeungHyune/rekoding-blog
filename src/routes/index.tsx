import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Post, Search, Editor, NotFound, Admin } from "./pages";
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
        path: "/post/:id",
        element: <Post />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/editor",
        element: <Editor />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
