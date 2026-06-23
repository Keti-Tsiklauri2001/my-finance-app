"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { transactions } from "@/src/data/data-transactions";

function formatDate(dateString: string) {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

export default function RecurringBillsView() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [openFilter, setOpenFilter] = useState(false);
  console.log(openFilter);
  const bills = useMemo(() => {
    return transactions
      .filter((t) => t.recurring)
      .map((t, index) => ({
        id: index,
        name: t.name,
        avatar: t.avatar,
        date: t.date,
        amount: Math.abs(t.amount),
      }));
  }, []);

  const filtered = useMemo(() => {
    return bills.filter((b) =>
      b.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [bills, search]);

  const sorted = useMemo(() => {
    const copy = [...filtered];

    switch (sort) {
      case "highest":
        return copy.sort((a, b) => b.amount - a.amount);
      case "lowest":
        return copy.sort((a, b) => a.amount - b.amount);
      case "oldest":
        return copy.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        );
      case "latest":
      default:
        return copy.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );
    }
  }, [filtered, sort]);

  return (
    <div className="bg-white rounded-xl p-8 pt-0 flex flex-col gap-6 w-full ">
      {/* TOP CONTROLS */}
      <div className="flex justify-between items-center gap-4 flex-wrap">
        {/* SEARCH */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search bills"
          className="border border-[#98908B] rounded-lg px-4 py-3 w-[150px] md:w-[320px] outline-none"
        />
        <div className="relative">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            onClick={() => setOpenFilter((p) => !p)}
            className="border border-[#98908B] rounded-lg px-3 py-3 text-sm pr-8 cursor-pointer appearance-none"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="highest">Highest</option>
            <option value="lowest">Lowest</option>
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
        {/* SORT */}
      </div>

      {/* TABLE HEADER */}
      <div className="flex justify-between text-xs text-[#696868] border-b pb-3">
        <p>Bills Title</p>
        <p>Due Date</p>
        <p className="text-right">Amount</p>
      </div>

      {/* LIST */}
      <div className="flex flex-col gap-4">
        {sorted.map((bill) => (
          <div key={bill.id} className="flex justify-between items-center">
            {/* LEFT */}
            <div className="flex items-center gap-4 w-[300px]">
              <Image
                src={bill.avatar}
                width={32}
                height={32}
                alt="avatar"
                className="rounded-full"
              />
              <p className="font-bold text-sm text-[#201F24]">{bill.name}</p>
            </div>

            {/* DATE */}
            <p className="text-xs text-[#696868] w-[180px]">
              {" "}
              {formatDate(bill.date)}
            </p>

            {/* AMOUNT */}
            <p className="text-right w-[100px] font-bold text-[#201F24]">
              ${bill.amount.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
