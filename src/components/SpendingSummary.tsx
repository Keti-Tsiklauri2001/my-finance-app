"use client";
import { budgets } from "../data/data-budgets";
import { transactions } from "../data/data-transactions";

import BudgetCircle from "./BudgetCircle";
export default function SpendingSummary() {
  const budgetsWithSpent = budgets.map((budget) => {
    const spent = transactions
      .filter((t) => t.category === budget.category)
      .reduce((sum, t) => sum + t.amount, 0);

    return {
      ...budget,
      spent,
    };
  });

  const totalSpent = budgetsWithSpent.reduce((acc, b) => acc + b.spent, 0);

  const total = budgetsWithSpent.reduce((acc, b) => acc + b.maximum, 0);

  let start = 0;

  const gradient = budgetsWithSpent
    .map((b) => {
      const percent = (Math.abs(b.spent) / total) * 100;
      const result = `${b.theme} ${start}% ${start + percent}%`;
      start += percent;
      return result;
    })
    .join(", ");

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 bg-white rounded-xl w-full max-w-3xl xl:flex-col">
      {/* LEFT - CHART */}
      <BudgetCircle
        totalLimit={total}
        totalSpent={totalSpent}
        budgets={budgets}
      />

      {/* RIGHT - LIST */}
      <div className="flex-1">
        <h2 className="text-xl font-bold text-[#201F24] mb-6">
          Spending Summary
        </h2>

        <div className="flex flex-col gap-4 xl:w-[360px]">
          {budgetsWithSpent.map((b, i) => (
            <div key={i} className="flex justify-between items-center">
              {/* title */}
              <div className="flex items-center gap-3 text-[#696868] text-sm">
                <span
                  className="w-[4px] h-[21px] rounded-full"
                  style={{ backgroundColor: b.theme }}
                />
                {b.category}
              </div>

              {/* amount */}
              <div className="flex items-center gap-2">
                <strong className="text-[#201F24] text-base font-bold">
                  ${Math.abs(b.spent)}.00
                </strong>
                <span className="text-xs text-[#696868]">
                  of ${b.maximum}.00
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
