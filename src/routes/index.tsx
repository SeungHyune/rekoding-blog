import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import { getPostDetail } from "@/services/response/post";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Post = React.lazy(() => import("./pages/Post/Post"));
const Search = React.lazy(() => import("./pages/Search/Search"));
const Editor = React.lazy(() => import("./pages/Editor/Editor"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));
const Admin = React.lazy(() => import("./pages/Admin/Admin"));

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
        loader: async ({ params }) => {
          const { id = "" } = params;
          const postDetail = await getPostDetail(id);
          return postDetail;
        },
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
