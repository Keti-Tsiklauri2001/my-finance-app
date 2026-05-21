"use client";
import { useState, useEffect } from "react";
import BudgetCard from "@/src/components/BudgetsCard";
import Header from "@/src/components/Header";
import SpendingSummary from "@/src/components/SpendingSummary";
import AddBudgetModal from "@/src/components/AddBudgetModal";
import { transactions } from "@/src/data/data-transactions";
import { calculateBudgets } from "@/src/utils/calcBudgets";
import { budgets as initialBudgets } from "@/src/data/data-budgets";

export default function Budgets() {
  const [open, setOpen] = useState(false);

  const [budgets, setBudgets] = useState(initialBudgets);
  const [tx, setTx] = useState(transactions); // IMPORTANT

  const budgetsWithData = calculateBudgets(budgets, tx);
  useEffect(() => {
    console.log("BUDGET STATE CHANGED:", budgets);
  }, [budgets]);
  return (
    <div>
      <div>
        <Header
          header="Budgets"
          buttonText="add new budget"
          onButtonClick={() => setOpen(true)}
        />

        {open && (
          <AddBudgetModal
            onClose={() => setOpen(false)}
            onAdd={(data) => {
              console.log("new budget:", data);

              setBudgets((prev) => [...prev, data]);

              setOpen(false);
            }}
          />
        )}
      </div>

      <div className="flex flex-col md:flex-row xl:max-w-[1060px]  w-full mx-auto gap-6">
        <div className="flex-1">
          <SpendingSummary />
        </div>

        <div className="flex-1">
          <BudgetCard budgetsWithData={budgetsWithData} />
        </div>
      </div>
    </div>
  );
}
