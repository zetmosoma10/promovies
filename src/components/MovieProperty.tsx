const MovieProperty = ({ label, value }: { label: string; value: any }) => {
  return (
    <div className="grid grid-cols-2 space-x-1">
      <span className="font-medium">{label}:</span>
      <span className="font-light">{value}</span>
    </div>
  );
};

export default MovieProperty;
