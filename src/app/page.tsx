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
export default function Home() {
  return (
    <div>
      <Header header="Overview" />
      <Balance />
      <div className="flex flex-col md:flex-row ">
        <div className="flex flex-col mx-auto">
          <OverviewPots />
          <TransactionsOverview />
        </div>
        <div>
          <div className="pt-4 md:pt-8 ">
            <div className="w-[340px] mx-auto">
              <div className="flex items-center justify-between ">
                <h2 className="text-[20px] font-bold leading-[120%] text-[#201F24]">
                  My Budgets
                </h2>

                <Link
                  href="/budgets"
                  className="flex items-center gap-3 text-[14px] leading-[150%] text-[#696868]"
                >
                  <span>See Details</span>
                  <span className="text-[16px]">›</span>
                </Link>
              </div>
            </div>
            <SpendingSummary />
          </div>
          <RecurringBillsOverview />
        </div>
      </div>
    </div>
  );
}
