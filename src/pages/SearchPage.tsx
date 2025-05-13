import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { slug } = useParams();
  return (
    <section className="max-container text-gray-50">
      SearchPage - {slug}
    </section>
  );
};

export default SearchPage;
