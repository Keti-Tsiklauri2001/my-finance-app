import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";

type FilterType = "all" | "income" | "expense";
type SortType = "latest" | "oldest" | "highest" | "lowest";

interface TransactionsFiltersProps {
  filter: FilterType;
  setFilter: Dispatch<SetStateAction<FilterType>>;

  sort: SortType;
  setSort: Dispatch<SetStateAction<SortType>>;

  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export default function TransactionsFilters({
  filter,
  setFilter,
  sort,
  setSort,
  search,
  setSearch,
}: TransactionsFiltersProps) {
  const [openFilter, setOpenFilter] = useState(false);
  const [openSort, setOpenSort] = useState(false);

  return (
    <div className="flex justify-between items-center w-[95%] gap-4 mx-auto">
      {/* SEARCH */}
      <div className="flex flex-col w-[220px]">
        <div className="relative flex items-center border border-gray-300 rounded-lg px-4 py-2 h-[45px]">
          <div className="w-full">
            {/* Mobile */}
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="block md:hidden w-full outline-none text-sm text-gray-700"
            />

            {/* Desktop */}
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search transaction"
              className="hidden md:block w-full outline-none text-sm text-gray-700"
            />
          </div>
        </div>
      </div>

      {/* SORT + FILTER */}
      <div className="flex items-center gap-6">
        {/* SORT */}
        <div className="relative">
          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value as SortType);
              setOpenSort(false);
            }}
            onClick={() => setOpenSort((p) => !p)}
            onBlur={() => setOpenSort(false)}
            className="appearance-none border border-gray-300 rounded-lg px-3 py-2 pr-10 h-[45px] text-sm bg-white"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="highest">Highest</option>
            <option value="lowest">Lowest</option>
          </select>

          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Image
              src={
                openSort
                  ? "/images/icon-caret-up.svg"
                  : "/images/icon-caret-down.svg"
              }
              alt="caret"
              width={12}
              height={12}
            />
          </div>
        </div>

        {/* FILTER */}
        <div className="relative">
          <select
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value as FilterType);
              setOpenFilter(false);
            }}
            onClick={() => setOpenFilter((p) => !p)}
            onBlur={() => setOpenFilter(false)}
            className="appearance-none border border-gray-300 rounded-lg px-3 py-2 pr-10 h-[45px] text-sm bg-white"
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Image
              src={
                openFilter
                  ? "/images/icon-caret-up.svg"
                  : "/images/icon-caret-down.svg"
              }
              alt="caret"
              width={12}
              height={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
