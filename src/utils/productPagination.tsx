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
  setCurrentPage,
}: {
  numberOfProducts: number;
  currentPage: number;
  productsPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const numberOfPages = Math.ceil(numberOfProducts / productsPerPage);
  const paginationLinks = Array(numberOfPages)
    .fill(1)
    .map((item, index) => (
      <PaginationItem key={item+index}>
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
              if (paginationLinks[currentPage]) {
                setCurrentPage(currentPage + 1);
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ProductPagination;
