import { isAxiosError } from "axios";
import {
  isRouteErrorResponse,
  Link,
  useNavigate,
  useRouteError,
} from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const isRouteError = isRouteErrorResponse(error);
  const isAxiosErrorResponse = isAxiosError(error);

  if (isAxiosErrorResponse) {
    let header;
    let message;

    if (error.message === "Network Error") {
      header = "Server is down";
      message = "Network Error";
    } else if (error.response?.status === 404) {
      header = "404";
      message = "Movie not found";
    }

    return (
      <div className="flex items-center justify-center text-gray-50 bg-bgColor min-h-screen">
        <div className="text-center">
          <h1 className="font-semibold roboto text-5xl mb-2">{header}</h1>
          <p className="text-lightGray text-lg">{message}</p>
          <button
            className="bg-mintGreen px-3 py-2 rounded-md mt-3 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  if (isRouteError) {
    return (
      <div className="flex items-center justify-center text-gray-50 bg-bgColor min-h-screen">
        <div className="text-center">
          <h1 className="font-semibold roboto text-5xl mb-2">Oops...</h1>
          <p className="text-lightGray text-lg mb-3">Invalid route</p>
          <Link className="bg-mintGreen px-3 py-2 rounded-md mt-3" to="/">
            Go back Home
          </Link>
        </div>
      </div>
    );
  }
};

export default ErrorPage;
