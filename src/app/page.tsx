import Head from "next/head";
import Balance from "../components/Balance";
import Header from "../components/Header";
import OverviewPots from "../components/OverViewPots";
import TransactionsOverview from "../components/TransactionsOverview";
import BudgetCircle from "../components/BudgetCircle";
import SpendingSummary from "../components/SpendingSummary";
import Link from "next/link";
import RecurringBills from "./recurring-bills/page";
import RecurringBillsOverview from "../components/RecurringBillsOverview";
import BudgetsOverview from "../components/BudgetsOverview";
export default function Home() {
  return (
    <div>
      <Header header="Overview" />
      <Balance />
      <div className="flex flex-col xl:flex-row ">
        <div className="flex flex-col mx-auto">
          <OverviewPots />
          <TransactionsOverview />
        </div>
        <div className="flex flex-col mx-auto">
          <BudgetsOverview />
          <RecurringBillsOverview />
        </div>
      </div>
    </div>
  );
}
