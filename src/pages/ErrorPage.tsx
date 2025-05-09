import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const isRouteError = isRouteErrorResponse(error);
  return (
    <div className="flex items-center justify-center text-gray-50 bg-bgColor min-h-screen">
      <div>
        <h1 className="font-semibold roboto text-5xl mb-2">
          {isRouteError ? "404" : "Oops..."}
        </h1>
        {isRouteError ? (
          <p className="text-lightGray">Invalid route</p>
        ) : (
          <p className="text-lightGray">Unexpected error, try again later</p>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
