"use client";

import Image from "next/image";
import { transactions } from "@/src/data/data-transactions";

function money(v: number) {
  return `$${v.toFixed(2)}`;
}

export default function LeftSide() {
  const recurringBills = transactions.filter((t) => t.recurring);

  const totalBills = recurringBills.reduce(
    (sum, bill) => sum + Math.abs(bill.amount),
    0,
  );

  const paidBills = recurringBills.filter(
    (bill) => new Date(bill.date).getMonth() < 7,
  );

  const paidBillsCount = paidBills.length;

  const paidBillsAmount = paidBills.reduce(
    (sum, bill) => sum + Math.abs(bill.amount),
    0,
  );

  const upcomingBills = recurringBills.filter(
    (bill) => new Date(bill.date).getMonth() === 7,
  );

  const upcomingBillsCount = upcomingBills.length;

  const upcomingBillsAmount = upcomingBills.reduce(
    (sum, bill) => sum + Math.abs(bill.amount),
    0,
  );

  const dueSoonBills = recurringBills.filter((bill) => {
    const day = new Date(bill.date).getDate();
    return day <= 5;
  });

  const dueSoonCount = dueSoonBills.length;

  const dueSoonAmount = dueSoonBills.reduce(
    (sum, bill) => sum + Math.abs(bill.amount),
    0,
  );

  return (
    <div
      className="
        flex flex-col gap-6
        md:flex-row md:gap-6 md:w-[688px]
        xl:flex-col xl:w-[337px] xl:max-w-[337px]
        mx-auto mb-5
      "
    >
      {/* TOTAL BILLS CARD */}
      <div
        className="
          bg-[#201F24] text-white rounded-xl
          flex flex-row justify-start gap-6
          md:flex-col md:justify-end
          p-6
          mx-auto
          w-[343px] h-[118px]
          md:w-[332px] md:h-[204px]
          xl:w-[337px] xl:h-[190px]
        "
      >
        <Image
          src="/images/icon-recurring-bills.svg"
          alt="icon"
          width={40}
          height={40}
        />

        <div className="flex flex-col gap-[11px]">
          <p className="text-sm">Total Bills</p>

          <h1 className="text-[32px] leading-[120%] font-bold">
            {money(totalBills)}
          </h1>
        </div>
      </div>

      {/* SUMMARY CARD */}
      <div
        className="
          bg-white rounded-xl
          flex flex-col justify-center gap-5
          p-5
          mx-auto

          w-[343px] h-[204px]

          md:w-[332px] md:h-[204px]

          xl:w-[337px] xl:h-[204px]
        "
      >
        <h2 className="font-bold text-[#201F24] text-base">Summary</h2>

        <div className="flex flex-col gap-4">
          {/* Paid Bills */}
          <div className="flex justify-between items-center">
            <p className="text-[#696868] text-[12px]">Paid Bills</p>

            <p className="text-[12px] font-bold text-[#201F24]">
              {paidBillsCount} ({money(paidBillsAmount)})
            </p>
          </div>

          <hr className="border-[#E6E4E3]" />

          {/* Total Upcoming */}
          <div className="flex justify-between items-center">
            <p className="text-[#696868] text-[12px]">Total Upcoming</p>

            <p className="text-[12px] font-bold text-[#201F24]">
              {upcomingBillsCount} ({money(upcomingBillsAmount)})
            </p>
          </div>

          <hr className="border-[#E6E4E3]" />

          {/* Due Soon */}
          <div className="flex justify-between items-center">
            <p className="text-[#C94736] text-[12px]">Due Soon</p>

            <p className="text-[12px] font-bold text-[#C94736]">
              {dueSoonCount} ({money(dueSoonAmount)})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
