"use client";

import PaginationButton from "../PaginationButton";
import PaginationNumber from "../PaginationNumber";

type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
};

function Pagination({ page, setPage, totalPages }: PaginationProps) {
  function nextPage() {
    if (page < totalPages) setPage(page + 1);
  }

  function prevPage() {
    if (page > 1) setPage(page - 1);
  }

  function handlePageChange(pageNum: number) {
    setPage(pageNum);
  }

  function renderPages() {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
        <PaginationNumber
          key={num}
          isActive={page === num}
          onClick={() => handlePageChange(num)}
        >
          {num}
        </PaginationNumber>
      ));
    }

    const pages: (number | string)[] = [];

    const left = Math.max(2, page - 1);
    const right = Math.min(totalPages - 1, page + 1);

    pages.push(1);

    if (left > 2) pages.push("...");

    for (let i = left; i <= right; i++) {
      pages.push(i);
    }

    if (right < totalPages - 1) pages.push("...");

    pages.push(totalPages);

    return pages.map((p, index) => {
      const isEllipsis = p === "...";

      return (
        <PaginationNumber
          key={index}
          isEllipsis={isEllipsis}
          isActive={page === p}
          onClick={() => !isEllipsis && handlePageChange(p as number)}
        >
          {p}
        </PaginationNumber>
      );
    });
  }

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between pt-6 gap-2 w-full">
      {/* PREV */}
      <PaginationButton
        buttonText="Prev"
        onClick={prevPage}
        isDisabled={page === 1}
      />

      {/* NUMBERS */}
      <div className="flex items-center gap-2">{renderPages()}</div>

      {/* NEXT */}
      <PaginationButton
        buttonText="Next"
        onClick={nextPage}
        isDisabled={page === totalPages}
      />
    </div>
  );
}

export default Pagination;
