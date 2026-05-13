import BudgetCard from "@/src/components/BudgetsCard";
import Header from "@/src/components/Header";
import SpendingSummary from "@/src/components/SpendingSummary";
export default function Budgets() {
  return (
    <div>
      <Header header="budgets" buttonText="add new budget" />
      <div className="flex flex-col md:flex-row xl:max-w-[1060px] xl:float-right w-full mx-auto gap-6">
        <div className="flex-1">
          <SpendingSummary />
        </div>

        <div className="flex-1">
          <BudgetCard />
        </div>
      </div>
    </div>
  );
}
