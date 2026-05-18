import { Dispatch, SetStateAction } from "react";

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
  return (
    <div className="flex justify-between items-center w-full gap-4">
      {/* LEFT: Search */}
      <div className="flex flex-col w-[320px]">
        <div className="relative flex items-center border border-gray-300 rounded-lg px-4 py-2 h-[45px]">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search transaction"
            className="w-full outline-none text-sm text-gray-700"
          />

          <div className="w-4 h-4 ml-2 text-gray-500">
            {/* <Image alt="search" width="16px" height="16px" src /> */}
          </div>
        </div>
      </div>

      {/* RIGHT: Sort + Filter */}
      <div className="flex items-center gap-6">
        {/* SORT */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Sort by</span>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortType)}
            className="border border-gray-300 rounded-lg px-3 py-2 h-[45px] text-sm"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="highest">Highest</option>
            <option value="lowest">Lowest</option>
          </select>
        </div>

        {/* FILTER */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Filter</span>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as FilterType)}
            className="border border-gray-300 rounded-lg px-3 py-2 h-[45px] text-sm"
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
      </div>
    </div>
  );
}
