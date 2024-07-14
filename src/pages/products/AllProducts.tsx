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
import { Skeleton } from "antd";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Card, CardContent } from "@/components/ui/card";

const AllProducts = () => {
  // pagination logic
  const { data, isSuccess: productCountFetchSuccess } =
    useGetProductsCountQuery(null);
  const numberOfProducts: number = productCountFetchSuccess && data?.data;
  const productsPerPage = 6;
  const numberOfPages = Math.ceil(numberOfProducts / productsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const paginationLinks = Array(numberOfPages)
    .fill(0)
    .map((item, index) => (
      <PaginationItem>
        <PaginationLink
          className={`${currentPage === index + 1 && "text-black"}`}
          isActive={currentPage === index + 1}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </PaginationLink>
      </PaginationItem>
    ));

  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: productData,
    isSuccess,
    isLoading,
  } = useGetProductsQuery(
    !searchTerm
      ? {
          limit: productsPerPage,
          page: currentPage,
        }
      : {
          searchTerm,
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
      <div className="section-contents relative z-[1]">
        <div className="mb-8">
          <SearchBar handleSearch={handleSearch}></SearchBar>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {isLoading &&
            Array(6)
              .fill("item loading")
              .map((item) => (
                <Card>
                  <CardContent className="p-6">
                    <Skeleton active />
                  </CardContent>
                </Card>
              ))}
          {isSuccess &&
            productData?.data?.length &&
            productData?.data.map((product: IProduct) => (
              <ProductCard data={product} key={product._id}></ProductCard>
            ))}
        </div>
        <div className="mt-8 text-white">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                  {
                    console.log(paginationLinks[currentPage - 2])
                    if(paginationLinks[currentPage - 2]){
                      setCurrentPage(currentPage - 1)
                    }
                  }
                  }
                />
              </PaginationItem>

              {paginationLinks}

              {numberOfPages > 5 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              <PaginationItem>
                <PaginationNext
                  className=""
                  onClick={() =>{
                    console.log(paginationLinks[currentPage+1])
                    if(
                      paginationLinks[currentPage]
                    ){
                      setCurrentPage(currentPage + 1)
                    }
                    console.log(currentPage)
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>{" "}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
