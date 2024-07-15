import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ProductPagination = ({
  numberOfProducts,
  currentPage,
  productsPerPage,
  setCurrentPage
}: {
  numberOfProducts: number;
  currentPage:number
  productsPerPage:number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
    const numberOfPages = Math.ceil(numberOfProducts / productsPerPage);
    console.log(numberOfPages)
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
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              console.log(paginationLinks[currentPage - 2]);
              if (paginationLinks[currentPage - 2]) {
                setCurrentPage(currentPage - 1);
              }
            }}
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
            onClick={() => {
              console.log(paginationLinks[currentPage + 1]);
              if (paginationLinks[currentPage]) {
                setCurrentPage(currentPage + 1);
              }
              console.log(currentPage);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ProductPagination;
