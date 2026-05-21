import { Budget, BudgetWithData, Transaction } from "../types/types";

export function calculateBudgets(
  budgets: Budget[],
  transactions: Transaction[],
): BudgetWithData[] {
  return budgets.map((budget) => {
    const filtered = transactions.filter((t) => t.category === budget.category);

    const spent = filtered.reduce((acc, t) => acc + Math.abs(t.amount), 0);

    const free = budget.maximum - spent;

    const percentage = Math.min((spent / budget.maximum) * 100, 100);

    return {
      ...budget,
      spent,
      free,
      percentage,
      transactions: filtered,
    };
  });
}
