import type { SearchProps } from "antd/es/input/Search";
import {
  useGetProductsCountQuery,
  useGetProductsQuery,
} from "@/redux/api/productApi";
import { IProduct } from "@/types";
import ProductCard from "./ProductCard";
import SearchBar from "@/components/shared/search/SearchBar";
import gradientBg from "../../assets/images/gradient-bg.jpg";
import { useState } from "react";
import { Radio, Select, Skeleton, Switch } from "antd";
import { Card, CardContent } from "@/components/ui/card";
import { BsSortDown } from "react-icons/bs";
import { IoFilterOutline } from "react-icons/io5";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import "./products.css";
import SectionHeading from "@/components/shared/SectionHeading";
import ProductPagination from "@/utils/productPagination";

const AllProducts = () => {
  // pagination logic
  const { data: productCountData, isSuccess: productCountFetchSuccess } =
    useGetProductsCountQuery(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("title");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const priceRanges = [
    { min: 100, max: 150 },
    { min: 150, max: 200 },
    { min: 250, max: 300 },
    { min: 350, max: 400 },
    { min: 450, max: 500 },
    { min: 500, max: 550 },
    { min: 550, max: 600 },
  ];
  const priceLabels = priceRanges.map((range) => ({
    label: `$${range.min} - $${range.max}`,
    value: `{ "priceRangeMin": "${range.min}", "priceRangeMax": "${range.max}" }`,
  }));
  const {
    data: productData,
    isSuccess,
    isLoading,
  } = useGetProductsQuery(
    searchTerm
      ? {
          searchTerm,
          sort,
        }
      : Object.keys(filters).length
      ? {
          sort,
          ...filters,
        }
      : {
          limit: productsPerPage,
          page: currentPage,
          sort,
        }
  );
  const handleSearch: SearchProps["onSearch"] = (value: string) => {
    setSearchTerm(value);
  };
  return (
    <section
      className="md:p-14 relative overflow-hidden p-8 bg-fixed bg-center backdrop-blur-sm bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${gradientBg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="section-contents  font-Untitled-Sans relative z-[1]">
        <div className="mb-8 bg-white rounded-md p-4 flex flex-col gap-4">
          <SearchBar handleSearch={handleSearch}></SearchBar>

          <div className="flex md:flex-row flex-col justify-between gap-2">
            <div className="sort flex justify-between items-center font-medium">
              <BsSortDown className="text-xl md:mr-2 mr-0"></BsSortDown>
              <span className="md:mr-4 text-xs whitespace-break-spaces mr-0 md:text-xl">Sort By:</span>
              <Select
                defaultValue="title"
                style={{ width: 120 }}
                onChange={(value: string) => setSort(value)}
                options={[
                  { value: "price", label: "Price" },
                  { value: "rating", label: "Rating" },
                  { value: "title", label: "Name" },
                ]}
              />
              <button className="ml-2" onClick={() => setSort("-" + sort)}>
                {sort.startsWith("-") ? (
                  <FaArrowUpLong></FaArrowUpLong>
                ) : (
                  <FaArrowDownLong></FaArrowDownLong>
                )}
              </button>
            </div>
            <div className="filter flex gap-2 items-center font-medium bg-whitep-4 rounded-md">
              <IoFilterOutline></IoFilterOutline>
              <label htmlFor="airplane-mode">Filter by Price Ranges</label>
              <Switch
                onChange={(checked) => {
                  setShowFilter(checked);
                  if (!checked) {
                    setFilters({});
                  }
                }}
              ></Switch>
            </div>
          </div>

          {showFilter && (
            <Radio.Group
              options={priceLabels}
              defaultValue={"100-200"}
              onChange={({ target }) => {
                const priceFilter = JSON.parse(target.value);
                setFilters(priceFilter);
              }}
              optionType="button"
            />
          )}
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {isLoading &&
            Array(productsPerPage)
              .fill("item loading")
              .map(() => (
                <Card>
                  <CardContent className="p-6">
                    <Skeleton.Avatar
                      shape="square"
                      size={"large"}
                      style={{
                        marginBottom: 16,
                        height: "150px",
                        width: "100%",
                        borderRadius:"1.5rem"
                      }}
                      active
                    />

                    <Skeleton paragraph={{ rows: 3 }} />
                  </CardContent>
                </Card>
              ))}
          {isSuccess &&
            productData?.data?.length &&
            productData?.data.map((product: IProduct) => (
              <ProductCard data={product} key={product._id}></ProductCard>
            ))}

          {isSuccess && productData?.data?.length === 0 && (
            <SectionHeading text="Uh oh, Looks like there's no data."></SectionHeading>
          )}
        </div>
        <div className="mt-8 text-white">
          <ProductPagination
            productsPerPage={productsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            numberOfProducts={productCountFetchSuccess && productCountData.data}
          ></ProductPagination>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
