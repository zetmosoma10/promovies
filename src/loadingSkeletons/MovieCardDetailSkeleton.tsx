const MovieCardDetailSkeleton = () => {
  return (
    <div className="flex flex-col gap-6 mt-10 overflow-hidden border shadow-md md:flex-row rounded-xl bg-surfaceColor border-surfaceColor animate-pulse">
      <div className="flex justify-center pt-4 md:pt-0 md:justify-start">
        <div className="bg-gray-600/20 h-[470px] w-[250px] md:rounded-lg" />
      </div>

      <div className="flex-1 px-4 pb-3 space-y-4 md:px-0 md:pr-2 md:pt-4">
        <div className="h-8 w-3/4 bg-gray-600/20 rounded" />
        <div className="h-4 w-full bg-gray-600/20 rounded" />
        <div className="h-4 w-5/6 bg-gray-600/20 rounded" />
        <div className="h-4 w-2/3 bg-gray-600/20 rounded" />

        <div className="mt-3 md:w-[60%] space-y-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="grid grid-cols-2 space-x-1">
              <div className="h-4 w-20 bg-gray-600/20 rounded" />
              <div className="h-4 w-full bg-gray-600/20 rounded" />
            </div>
          ))}
          <div className="grid grid-cols-2 space-x-1">
            <div className="h-4 w-20 bg-gray-600/20 rounded" />
            <div className="h-4 w-full bg-gray-600/20 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCardDetailSkeleton;
