import { useRef, type FormEvent } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const input = ref.current;

    if (input && input.value !== "") {
      const encoded = encodeURIComponent(input.value);
      navigate(`/search?query=${encoded}`);
      input.value = "";
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="focus-within:border focus-within:border-mintGreen bg-surfaceColor pl-2 rounded-lg overflow-hidden"
    >
      <div className="flex items-center">
        <CiSearch className="text-xl text-gray-50 " />
        <input
          ref={ref}
          className="py-1 text-gray-200 bg-surfaceColor  caret-catedGray indent-2 focus:outline-none"
          type="text"
          placeholder="Search movies..."
        />
      </div>
    </form>
  );
};

export default Search;
