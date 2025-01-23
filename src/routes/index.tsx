import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Layout from "../components/layout";

const SearchPage = lazy(() => import("../pages/SearchPage"));
const OwnerProfile = lazy(() => import("../pages/OwnerProfile"));
const RepoDetails = lazy(() => import("../pages/RepoPage"));
const ErrorPageNotFound = lazy(() => import("../pages/ErrorPageNotFound"));

export const router = createBrowserRouter([
  { path: "/", element: <SearchPage /> },
  {
    element: <Layout />,
    children: [
      { path: "/profile/:username", element: <OwnerProfile /> },
      { path: "/repository/:owner/:repoName", element: <RepoDetails /> },
      { path: "*", element: <ErrorPageNotFound /> },
    ],
  },
]);
