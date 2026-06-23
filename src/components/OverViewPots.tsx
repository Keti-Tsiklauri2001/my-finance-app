"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Pot } from "../types/types";

function formatMoney(value: number) {
  return `$${value.toFixed(2)}`;
}

const STORAGE_KEY = "pots";

export default function OverviewPots() {
  const [pots, setPots] = useState<Pot[]>([]);

  // load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      setPots(JSON.parse(saved));
    }
  }, []);

  // total always recalculates
  const total = pots.reduce((sum, pot) => sum + pot.total, 0);

  return (
    <div className="flex flex-col gap-5 bg-white rounded-xl pt-4 md:pt-8 w-full md:w-[700px] xl:w-[540px]">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-[#201F24]">Saving Pots</h2>

        <Link
          href="/pots"
          className="flex items-center gap-2 text-[#696868] text-sm cursor-pointer"
        >
          See Details <span>›</span>
        </Link>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col md:flex-row gap-5">
        {/* TOTAL */}
        <div className="flex items-center gap-4 bg-[#F8F4F0] rounded-xl p-4 w-full md:w-[247px]">
          <Image src="/images/pots.svg" alt="pots" width={40} height={40} />

          <div className="flex flex-col">
            <p className="text-sm text-[#696868]">Total Saved</p>
            <h3 className="text-[32px] font-bold text-[#201F24]">
              {formatMoney(total)}
            </h3>
          </div>
        </div>

        {/* LIST */}
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex gap-4">
            {pots.slice(0, 2).map((p) => (
              <div key={p.name} className="flex items-center gap-3 flex-1">
                <div
                  className="w-[4px] h-[43px] rounded"
                  style={{ backgroundColor: p.theme }}
                />
                <div>
                  <p className="text-[12px] text-[#696868]">{p.name}</p>
                  <p className="text-[14px] font-bold text-[#201F24]">
                    {formatMoney(p.total)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            {pots.slice(2, 4).map((p) => (
              <div key={p.name} className="flex items-center gap-3 flex-1">
                <div
                  className="w-[4px] h-[43px] rounded"
                  style={{ backgroundColor: p.theme }}
                />
                <div>
                  <p className="text-[12px] text-[#696868]">{p.name}</p>
                  <p className="text-[14px] font-bold text-[#201F24]">
                    {formatMoney(p.total)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
