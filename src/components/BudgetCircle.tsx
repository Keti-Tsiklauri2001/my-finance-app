"use client";

import { useEffect, useMemo, useState } from "react";
import { Budget } from "../types/types";

type Props = {
  budgets: Budget[];
  totalSpent: number;
  totalLimit: number;
};

export default function BudgetCircle({
  budgets,
  totalSpent,
  totalLimit,
}: Props) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(t);
  }, []);

  const total = useMemo(() => {
    return budgets.reduce((acc, b) => acc + b.maximum, 0);
  }, [budgets]);

  // ✅ PURE version (NO mutation, NO current variable)
  const gradient = useMemo(() => {
    const percentages = budgets.map((b) =>
      total ? (b.maximum / total) * 100 : 0,
    );

    const starts = percentages.reduce<number[]>((acc, p, i) => {
      const start = i === 0 ? 0 : acc[i - 1] + percentages[i - 1];
      acc.push(start);
      return acc;
    }, []);

    return budgets
      .map((b, i) => {
        const start = starts[i];
        const end = start + percentages[i];
        return `${b.theme} ${start}% ${end}%`;
      })
      .join(", ");
  }, [budgets, total]);

  return (
    <div className="relative w-[240px] h-[240px] mx-auto">
      {/* OUTER RING */}
      <div
        className="w-[240px] h-[240px] rounded-full transition-all duration-700 ease-out"
        style={{
          background: `conic-gradient(${gradient})`,
          transform: animate ? "scale(1)" : "scale(0.9)",
          opacity: animate ? 1 : 0,
        }}
      />

      {/* INNER HOLE */}
      <div className="absolute inset-[20%] bg-white rounded-full" />
      <div className="absolute inset-[12%] bg-white/25 rounded-full" />

      {/* TEXT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-[32px] font-bold text-[#201F24]">
          ${Math.abs(totalSpent)}
        </p>
        <p className="text-[12px] text-[#696868]">of ${totalLimit} limit</p>
      </div>
    </div>
  );
}
