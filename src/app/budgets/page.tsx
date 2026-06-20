"use client";

import { useEffect, useState } from "react";
import BudgetCard from "@/src/components/BudgetsCard";
import Header from "@/src/components/Header";
import SpendingSummary from "@/src/components/SpendingSummary";
import AddBudgetModal from "@/src/components/AddBudgetModal";
import EditBudgetModal from "@/src/components/EditBudgetModal";

import { transactions } from "@/src/data/data-transactions";
import { calculateBudgets } from "@/src/utils/calcBudgets";
import { budgets as initialBudgets } from "@/src/data/data-budgets";

import { Budget, BudgetWithData } from "@/src/types/types";

const STORAGE_KEY = "budgets";

export default function Budgets() {
  const [mounted, setMounted] = useState(false);

  const [budgets, setBudgets] = useState<Budget[]>(initialBudgets);

  const [open, setOpen] = useState(false);
  const [tx] = useState(transactions);

  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState<BudgetWithData | null>(
    null,
  );

  // ✅ ONLY run after mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      setBudgets(JSON.parse(saved));
    }

    setMounted(true);
  }, []);

  // ✅ save safely
  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(budgets));
  }, [budgets, mounted]);

  // ⛔ CRITICAL: prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  const budgetsWithData = calculateBudgets(budgets, tx);

  return (
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
            setBudgets((prev) => [...prev, data]);
            setOpen(false);
          }}
        />
      )}

      {showEditModal && selectedBudget && (
        <EditBudgetModal
          budget={selectedBudget}
          onClose={() => setShowEditModal(false)}
          onSave={(updatedBudget) => {
            setBudgets((prev) =>
              prev.map((b) =>
                b.category === selectedBudget.category
                  ? { ...b, ...updatedBudget }
                  : b,
              ),
            );

            setShowEditModal(false);
          }}
        />
      )}

      <div className="flex flex-col md:flex-row xl:max-w-[1060px] w-full mx-auto gap-6">
        <div className="flex-1">
          <SpendingSummary />
        </div>

        <div className="flex-1">
          <BudgetCard
            budgetsWithData={budgetsWithData}
            onEdit={(budget) => {
              setSelectedBudget(budget);
              setShowEditModal(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}
