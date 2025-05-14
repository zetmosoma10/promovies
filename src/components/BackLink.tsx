import { useNavigate } from "react-router-dom";

const BackLink = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="mt-10 hover:text-mintGreen focus:outline-none "
    >
      Go back
    </button>
  );
};

export default BackLink;
