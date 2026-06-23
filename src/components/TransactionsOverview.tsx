"use client";

import Link from "next/link";
import Image from "next/image";
import { transactions } from "../data/data-transactions";

export default function TransactionsOverview() {
  const latestTransactions = [...transactions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div
      className="
        bg-white
        rounded-xl pt-4 md:pt-8
        flex flex-col gap-5
        w-[340px] md:w-[700px] xl:w-[600px] mx-auto
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-[#201F24]">Transactions</h2>

        <Link
          href="/transactions"
          className="flex items-center gap-2 text-sm text-[#696868]"
        >
          View All
          <span>›</span>
        </Link>
      </div>

      {/* TRANSACTIONS */}
      <div className="flex flex-col">
        {latestTransactions.map((transaction, index) => (
          <div key={index}>
            <div className="flex items-center justify-between py-4">
              {/* LEFT */}
              <div className="flex items-center gap-4">
                <Image
                  src={transaction.avatar}
                  alt={transaction.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />

                <p className="font-bold text-[14px] text-[#201F24]">
                  {transaction.name}
                </p>
              </div>

              {/* RIGHT */}
              <div className="text-right">
                <p
                  className={`font-bold text-[14px] ${
                    transaction.amount > 0 ? "text-[#277C78]" : "text-[#201F24]"
                  }`}
                >
                  {transaction.amount > 0 ? "+" : "-"}$
                  {Math.abs(transaction.amount).toFixed(2)}
                </p>

                <p className="text-[12px] text-[#696868]">
                  {new Date(transaction.date).toLocaleDateString()}
                </p>
              </div>
            </div>

            {index !== latestTransactions.length - 1 && (
              <div className="h-px bg-[#E6E4E3]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
