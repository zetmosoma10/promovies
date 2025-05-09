type Props = {
  rating: number;
};

const Ratings = ({ rating }: Props) => {
  let color = "";
  if (rating < 7) {
    color = "bg-red-700";
  } else if (rating < 9) {
    color = "bg-mintGreen";
  } else if (rating >= 9) {
    color = "bg-AzureBlue";
  }

  return (
    <span
      className={`absolute right-2 top-2 text-gray-200 text-xs rounded-md py-1 px-2 ${color} `}
    >
      {rating.toFixed(1)}
    </span>
  );
};

export default Ratings;
