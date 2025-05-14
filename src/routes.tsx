import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import TrendingPage from "./pages/TrendingPage";
import TVShowsPage from "./pages/TVShowsPage";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import TVShowDetailPage from "./pages/TVShowDetailPage";
import SearchPage from "./pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "movies",
        element: <MoviesPage />,
      },
      {
        path: "movies/:slug",
        errorElement: <ErrorPage />,
        element: <MovieDetailPage />,
      },
      {
        path: "trending",
        element: <TrendingPage />,
      },
      {
        path: "trending/:slug",
        errorElement: <ErrorPage />,
        element: <TVShowDetailPage />,
      },
      {
        path: "tv-shows",
        element: <TVShowsPage />,
      },
      {
        path: "tv-shows/:slug",
        errorElement: <ErrorPage />,
        element: <TVShowDetailPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
]);

export default router;
