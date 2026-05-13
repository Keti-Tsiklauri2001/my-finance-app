import BudgetCard from "@/src/components/BudgetsCard";
import Header from "@/src/components/Header";
import SpendingSummary from "@/src/components/SpendingSummary";
export default function Budgets() {
  return (
    <div>
      <Header header="budgets" buttonText="add new budget" />
      <BudgetCard />
      <SpendingSummary />
    </div>
  );
}
