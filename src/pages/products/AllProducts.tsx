import type { SearchProps } from "antd/es/input/Search";
import { useGetProductsQuery } from "@/redux/api/productApi";
import { IProduct } from "@/types";
import ProductCard from "./ProductCard";
import SearchBar from "@/components/shared/search/SearchBar";
import gradientBg from "../../assets/images/gradient-bg.jpg";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

const AllProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isSuccess } = useGetProductsQuery({
    limit: 6,
    page: 1,
    searchTerm,
  });
  const handleSearch: SearchProps["onSearch"] = (value: string) => {
    setSearchTerm(value);
  };
  return (
    <section
      className="md:p-14 relative p-8 bg-fixed bg-center backdrop-blur-sm bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${gradientBg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="section-contents relative z-[1]">
        <div className="mb-8">
          <SearchBar handleSearch={handleSearch}></SearchBar>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {isSuccess &&
            data?.data?.length &&
            data?.data.map((product: IProduct) => (
              <ProductCard data={product} key={product._id}></ProductCard>
            ))}
        </div>

        <div className="mt-8 text-white">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
