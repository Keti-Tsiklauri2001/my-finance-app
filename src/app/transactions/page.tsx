"use client";
import Header from "@/src/components/Header";
import Pagination from "@/src/components/transactionsPage/Pagination";
import TransactionsList from "@/src/components/transactionsPage/TransactionsList";
import { useTransactions } from "../hooks/useTransaction";

import { transactions } from "@/src/data/data-transactions";
import TransactionsFilters from "@/src/components/transactionsPage/TransactionsFilters";
export default function Transactions() {
  const {
    paginatedTransactions,
    filter,
    setFilter,
    page,
    setPage,
    search,
    setSearch,
    sort,
    setSort,
    totalPages,
  } = useTransactions(transactions);

  return (
    <div className="flex flex-col gap-6">
      <Header header="transactions" />

      <TransactionsFilters
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
        search={search}
        setSearch={setSearch}
      />

      <TransactionsList transactions={paginatedTransactions} />

      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
}
