import Header from "@/src/components/Header";
import LeftSide from "@/src/components/LeftSide";
import RecurringBillsView from "@/src/components/RecurringBillsView";

export default function RecurringBills() {
  return (
    <div>
      <Header header="recurring bills" />
      <div className="flex  flex-col xl:flex-row mx-auto w-[90%] xl:gap-5 xl:mt-5">
        <LeftSide />
        <RecurringBillsView />
      </div>
    </div>
  );
}
