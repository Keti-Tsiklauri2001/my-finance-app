import { useMemo, useState } from "react";
import { Transaction } from "@/src/types/types";

type SortType = "latest" | "oldest" | "highest" | "lowest";
type FilterType = "all" | "income" | "expense";

export function useTransactions(data: Transaction[]) {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<FilterType>("all");
  const [sort, setSort] = useState<SortType>("latest");
  const [page, setPage] = useState<number>(1);

  const pageSize = 10;

  // 1. FILTER + SEARCH
  const filtered = useMemo(() => {
    return data.filter((t) => {
      const matchesSearch =
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.category.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        filter === "all"
          ? true
          : filter === "income"
            ? t.amount > 0
            : t.amount < 0;

      return matchesSearch && matchesFilter;
    });
  }, [data, search, filter]);

  // 2. SORT
  const sorted = useMemo(() => {
    const copy = [...filtered];

    switch (sort) {
      case "latest":
        return copy.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );

      case "oldest":
        return copy.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        );

      case "highest":
        return copy.sort((a, b) => b.amount - a.amount);

      case "lowest":
        return copy.sort((a, b) => a.amount - b.amount);

      default:
        return copy;
    }
  }, [filtered, sort]);

  // 3. PAGINATION
  const paginated = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sorted.slice(start, start + pageSize);
  }, [sorted, page]);

  const totalPages = Math.ceil(sorted.length / pageSize);

  return {
    search,
    setSearch,
    filter,
    setFilter,
    sort,
    setSort,
    page,
    setPage,

    paginatedTransactions: paginated, // ✅ FIX HERE
    totalPages,
    totalItems: sorted.length,
  };
}
