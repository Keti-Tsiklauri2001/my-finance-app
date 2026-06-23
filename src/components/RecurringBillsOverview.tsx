"use client";

import Link from "next/link";
import { transactions } from "@/src/data/data-transactions";

function money(value: number) {
  return `$${value.toFixed(2)}`;
}

export default function RecurringBillsOverview() {
  const recurringBills = transactions.filter((t) => t.recurring).slice(0, 3);

  return (
    <div
      className="
        bg-white
        rounded-xl
        pt-4 md:pt-8
        flex flex-col gap-8
        mx-auto
        w-[340px]
        md:w-[360px]
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-[#201F24]">
          Recurring Bills
        </h2>

        <Link
          href="/recurring-bills"
          className="flex items-center gap-2 text-sm text-[#696868] hover:text-[#201F24]"
        >
          See Details
          <span>›</span>
        </Link>
      </div>

      {/* Summary Cards */}
      <div className="flex flex-col gap-3">
        {recurringBills.map((bill) => (
          <div
            key={bill.category}
            className="
              flex items-center justify-between
              bg-[#F8F4F0]
              rounded-lg
              px-4 py-5
              border-l-4
            "
          >
            <p className="text-[14px] text-[#696868]">{bill.category}</p>

            <p className="text-[14px] font-bold text-[#201F24]">
              {money(bill.amount)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
