"use client";

import { useEffect, useState } from "react";

import BudgetCard from "@/src/components/BudgetsCard";
import Header from "@/src/components/Header";
import SpendingSummary from "@/src/components/SpendingSummary";
import AddBudgetModal from "@/src/components/AddBudgetModal";
import EditBudgetModal from "@/src/components/EditBudgetModal";
import DeleteBudget from "@/src/components/DeleteBudget";

import { transactions } from "@/src/data/data-transactions";
import { calculateBudgets } from "@/src/utils/calcBudgets";
import { budgets as initialBudgets } from "@/src/data/data-budgets";

import { Budget, BudgetWithData } from "@/src/types/types";

const STORAGE_KEY = "budgets";

export default function Budgets() {
  const [mounted, setMounted] = useState(false);

  const [budgets, setBudgets] = useState<Budget[]>(initialBudgets);

  const [openAdd, setOpenAdd] = useState(false);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [selectedBudget, setSelectedBudget] = useState<BudgetWithData | null>(
    null,
  );

  const tx = transactions;

  // ✅ load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      setBudgets(JSON.parse(saved));
    }

    setMounted(true);
  }, []);

  // ✅ save to localStorage
  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(budgets));
  }, [budgets, mounted]);

  if (!mounted) return null;

  const budgetsWithData = calculateBudgets(budgets, tx);

  // ✅ OPEN EDIT
  const openEdit = (budget: BudgetWithData) => {
    setSelectedBudget(budget);
    setShowEditModal(true);
  };

  // ✅ OPEN DELETE
  const openDelete = (budget: BudgetWithData) => {
    setSelectedBudget(budget);
    setShowDelete(true);
  };

  return (
    <div>
      {/* HEADER */}
      <Header
        header="Budgets"
        buttonText="add new budget"
        onButtonClick={() => setOpenAdd(true)}
      />

      {/* ADD MODAL */}
      {openAdd && (
        <AddBudgetModal
          onClose={() => setOpenAdd(false)}
          onAdd={(data) => {
            setBudgets((prev) => [...prev, data]);
            setOpenAdd(false);
          }}
        />
      )}

      {/* EDIT MODAL */}
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

      {/* DELETE MODAL */}
      {showDelete && selectedBudget && (
        <DeleteBudget
          showDelete={showDelete}
          selectedBudget={selectedBudget}
          onClose={() => setShowDelete(false)}
          onDelete={() => {
            setBudgets((prev) =>
              prev.filter((b) => b.category !== selectedBudget.category),
            );

            setShowDelete(false);
          }}
        />
      )}

      {/* MAIN LAYOUT */}
      <div className="flex flex-col md:flex-row xl:max-w-[1060px] w-full mx-auto gap-6">
        {/* LEFT */}
        <div className="flex-1">
          <SpendingSummary />
        </div>

        {/* RIGHT */}
        <div className="flex-1">
          <BudgetCard
            budgetsWithData={budgetsWithData}
            onEdit={openEdit}
            onDelete={openDelete}
          />
        </div>
      </div>
    </div>
  );
}
