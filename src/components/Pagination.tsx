"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import PaginationButton from "./PaginationButton";
import PaginationNumber from "./PaginationNumber";

interface Props {
  totalItems: number;
  itemsPerPage: number;
}

function Pagination({ totalItems, itemsPerPage }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const currentPage = Number(searchParams.get("page") ?? 1);

  function handlePageChange(page: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));

    router.push(`${pathname}?${params.toString()}`);
  }

  function nextPage() {
    if (currentPage < pageCount) {
      handlePageChange(currentPage + 1);
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  }

  function renderPages() {
    if (pageCount <= 5) {
      return Array.from({ length: pageCount }, (_, i) => i + 1).map((num) => (
        <PaginationNumber
          key={num}
          isActive={currentPage === num}
          onClick={() => handlePageChange(num)}
        >
          {num}
        </PaginationNumber>
      ));
    }

    const pages: (number | string)[] = [];

    const left = Math.max(2, currentPage - 1);
    const right = Math.min(pageCount - 1, currentPage + 1);

    pages.push(1);

    if (left > 2) pages.push("...");

    for (let i = left; i <= right; i++) {
      pages.push(i);
    }

    if (right < pageCount - 1) pages.push("...");

    pages.push(pageCount);

    return pages.map((page, index) => {
      const isEllipsis = page === "...";

      return (
        <PaginationNumber
          key={index}
          isEllipsis={isEllipsis}
          isActive={currentPage === page}
          onClick={() => !isEllipsis && handlePageChange(page as number)}
        >
          {page}
        </PaginationNumber>
      );
    });
  }

  if (pageCount <= 1) return null;

  return (
    <div className="flex items-center justify-between pt-6 gap-2 w-full">
      {/* PREV */}
      <PaginationButton
        buttonText="Prev"
        onClick={prevPage}
        isDisabled={currentPage === 1}
      />

      {/* NUMBERS */}
      <div className="flex items-center gap-2">{renderPages()}</div>

      {/* NEXT */}
      <PaginationButton
        buttonText="Next"
        onClick={nextPage}
        isDisabled={currentPage === pageCount}
      />
    </div>
  );
}

export default Pagination;
