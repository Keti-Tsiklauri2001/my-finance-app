"use client";

import { balance } from "@/src/data/data-balance";
import Image from "next/image";
const { current } = balance[0];

function money(v) {
  return `$${v.toFixed(2)}`;
}

export default function LeftSide() {
  return (
    <div
      className="
     
        flex flex-col gap-6

        md:flex-row md:gap-6 md:w-[688px]
mb-5
        xl:flex-col xl:w-[337px] xl:max-w-[337px]
        mx-auto
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
        {/* ICON */}

        <Image
          src="/images/icon-recurring-bills.svg"
          alt="icon"
          width={32}
          height={32}
        />

        {/* TEXTS */}
        <div className="flex flex-col gap-2">
          <p className="text-sm md:text-sm xl:text-sm">Total bills</p>

          <h1 className="text-3xl font-bold">{money(current)}</h1>
        </div>
      </div>

      {/* SUMMARY CARD */}
      <div
        className="
          bg-white rounded-xl
mx-auto
          flex flex-col justify-center gap-5
          p-5

          w-[343px] h-[204px]

          md:w-[332px] md:h-[204px]

          xl:w-[337px] xl:h-[204px]
        "
      >
        <h2 className="font-bold text-[#201F24] text-base">Summary</h2>

        <div className="flex flex-col gap-4">
          <Row label="Paid Bills" value="2 ($320.00)" />

          <hr className="border-[#E6E4E3]" />

          <Row label="Total Upcoming" value="6 ($1,230.00)" />

          <hr className="border-[#E6E4E3]" />

          <Row label="Due Soon" value="2 ($40.00)" danger />
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, danger }) {
  return (
    <div className="flex justify-between items-center">
      <p className={danger ? "text-[#C94736]" : "text-[#696868] text-sm"}>
        {label}
      </p>

      <p
        className={`text-sm font-bold ${
          danger ? "text-[#C94736]" : "text-[#201F24]"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
