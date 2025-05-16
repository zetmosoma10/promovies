const SortSelector = () => {
  return (
    <select className="p-2 font-medium rounded-md cursor-pointer text-gray-50 focus:outline-none bg-surfaceColor focus:border focus:border-mintGreen ">
      <option value="">Sort by</option>
      <option value="">Newest</option>
      <option value="">Name</option>
      <option value="">Most viewed</option>
      <option value="">Top rated</option>
    </select>
  );
};

export default SortSelector;
