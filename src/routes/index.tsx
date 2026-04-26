import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import { getPostDetail } from "@/services/response/post";

const LandingHome = React.lazy(() => import("./pages/LandingHome/LandingHome"));
const Blog = React.lazy(() => import("./pages/Blog/Blog"));
const Profile = React.lazy(() => import("./pages/Profile/Profile"));
const Portfolio = React.lazy(() => import("./pages/Portfolio/Portfolio"));
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
        element: <LandingHome />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
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
