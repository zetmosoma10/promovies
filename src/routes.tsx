import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import TrendingPage from "./pages/TrendingPage";
import TVShowsPage from "./pages/TVShowsPage";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import MovieDetailPage from "./pages/MovieDetailPage";

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
        path: "movies/:id",
        element: <MovieDetailPage />,
      },
      {
        path: "trending",
        element: <TrendingPage />,
      },
      {
        path: "trending/:id",
        element: <MovieDetailPage />,
      },
      {
        path: "tvshows",
        element: <TVShowsPage />,
      },
      {
        path: "tvshows/:id",
        element: <MovieDetailPage />,
      },
    ],
  },
]);

export default router;
