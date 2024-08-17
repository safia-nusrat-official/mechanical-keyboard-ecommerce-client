import "./searchBar.css";
import { Input } from "antd";
import { IoSearch } from "react-icons/io5";

const { Search } = Input;

const SearchBar = ({
  handleSearch,
}: {
  handleSearch: (value: string) => any;
}) => {
  return (
    <Search
      size="large"
      placeholder="Search a product by it's name or it's brand"
      allowClear
      onSearch={handleSearch}
      enterButton={
        <button className="custom-search-button rounded-r-md p-[0.75rem] bg-blue-500 text-[#fefefe]">
          <IoSearch></IoSearch>
        </button>
      }
    />
  );
};

export default SearchBar;
