import "./searchBar.css";
import { Input, Space } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import { IoFilterOutline, IoSearch } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const { Search } = Input;

const suffix = (
  <Select defaultValue="all">
    <SelectTrigger className="outline-none">
      <IoFilterOutline className="mr-4" />
      <span className="mr-2">Filter by </span>
      <SelectValue></SelectValue>
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="all">All</SelectItem>
      <SelectItem value="price">Price</SelectItem>
      <SelectItem value="dark">Dark</SelectItem>
      <SelectItem value="system">System</SelectItem>
    </SelectContent>
  </Select>
);

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
